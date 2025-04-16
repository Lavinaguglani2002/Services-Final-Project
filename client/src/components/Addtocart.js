











import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Addtocart.css";
import api from "../axios";

const Addtocart = () => {
  const [cart, setCart] = useState([]);
  const [cartcount, setCartcount] = useState(0);
  const [orderplaced, setorderplaced] = useState(false);
  const [deliveryType, setDeliveryType] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [step, setStep] = useState(0);

  const navigate = useNavigate();
  const email = localStorage.getItem("EMAIL") || "guest";

  useEffect(() => {
    const user = localStorage.getItem("USER");
    const role = localStorage.getItem("Role");

    if (!user || (role !== "user" && role !== "admin")) {
      alert("Access denied! Please login as a valid user.");
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem(`cart_${email}`)) || [];
    setCart(storedCart);
    setCartcount(storedCart.length);
  }, [email]);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    setCartcount(updatedCart.length);
    localStorage.setItem(`cart_${email}`, JSON.stringify(updatedCart));
    localStorage.setItem("cartcount", updatedCart.length);
    window.dispatchEvent(new Event("storage"));
  };

  const handleIncreaseQuantity = (index) => {
    const updatedCart = cart.map((item, i) =>
      i === index
        ? {
            ...item,
            quantity: item.quantity + 1,
            price: ((item.quantity + 1) * (item.price / item.quantity)).toFixed(2),
          }
        : item
    );
    updateCart(updatedCart);
  };

  const handleDecreaseQuantity = (index) => {
    const updatedCart = cart
      .map((item, i) => {
        if (i === index) {
          const newQuantity = item.quantity - 1;
          if (newQuantity === 0) return null;
          return {
            ...item,
            quantity: newQuantity,
            price: ((item.price / item.quantity) * newQuantity).toFixed(2),
          };
        }
        return item;
      })
      .filter((item) => item !== null);
    updateCart(updatedCart);
  };

  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    updateCart(updatedCart);
  };

  const totalAmount = cart
    .reduce((total, item) => total + parseFloat(item.price), 0)
    .toFixed(2);

  const extracharge = deliveryType === "Fast" ? 50 : 0;
  const totalAmountWithDelivery = (parseFloat(totalAmount) + extracharge).toFixed(2);

  const handlePlaceOrder = async () => {
    const userId = localStorage.getItem("USER");

    if (!userId || cart.length === 0) {
      alert("Invalid order data. Please log in and add items.");
      return;
    }

    if (!address.trim() || !city.trim() || !pincode.trim() || !deliveryType) {
      alert("Please fill all delivery details (address, city, pincode, delivery type).");
      return;
    }

    try {
      const response = await api.post("/orders", {
        userId,
        cartItems: cart,
        totalAmount: totalAmountWithDelivery,
        pincode,
        address,
        city,
        serviceDate: new Date(),
        deliveryType,
        userEmail: email,
      });
      const data = response.data;
      

      if (response.status === 201) {
        alert(data.message);
        localStorage.removeItem(`cart_${email}`);
        localStorage.setItem("cartcount", 0);
        setCart([]);
        setCartcount(0);
        setorderplaced(true);
        window.dispatchEvent(new Event("storage"));
      } else {
        alert(data.message || "Order not placed");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error("Order placement error:", error);
    }
  };

  return (
    <div className="addtocart-container py-5">
      {/* Step Indicators */}
      <div className="checkout-steps mb-4">
        {["Cart", "Address", "Payment", "Summary"].map((label, idx) => (
          <div
            key={idx}
            className={`step ${step === idx ? "active" : step > idx ? "completed" : ""}`}
          >
            <div className="step-circle">{idx + 1}</div>
            <div className="step-label">{label}</div>
          </div>
        ))}
      </div>

      {/* Step 0 - Cart */}
      {step === 0 && (
        <div className="row">
          <div className="col-md-8">
            <h4>Your Cart</h4>
            <div className="row">
              {cart.map((item, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <div className="card cart-card shadow-sm">
                    <img
                      src={item.image}
                      className="card-img-top"
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">
                        ₹{item.price} × {item.quantity}
                      </p>
                      <div className="d-flex justify-content-between">
                        <button
                          className="btn btn-success btn-sm"
                          onClick={() => handleIncreaseQuantity(index)}
                        >
                          +
                        </button>
                        <button
                          className="btn btn-warning btn-sm text-white"
                          onClick={() => handleDecreaseQuantity(index)}
                        >
                          -
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleRemoveItem(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <h5>Order Summary</h5>
              <ul className="list-group list-group-flush">
                {cart.map((item, idx) => (
                  <li
                    key={idx}
                    className="list-group-item d-flex justify-content-between"
                  >
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>₹{item.price}</span>
                  </li>
                ))}
                <li className="list-group-item fw-bold d-flex justify-content-between border-top">
                  <span>Total</span>
                  <span>₹{totalAmount}</span>
                </li>
              </ul>
              <button
                className="btn btn-primary mt-3 w-100"
                disabled={cart.length === 0}
                onClick={() => setStep(1)}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 1 - Address */}
      {step === 1 && (
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h4>Delivery Address</h4>
            <input
              className="form-control my-2"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              className="form-control my-2"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              className="form-control my-2"
              placeholder="Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
            <select
              className="form-control my-2"
              value={deliveryType}
              onChange={(e) => setDeliveryType(e.target.value)}
            >
              <option value="">Select Delivery Type</option>
              <option value="Fast">Fast (₹50, 2 Days)</option>
              <option value="Slow">Normal (Free, 4 Days)</option>
            </select>

            <button
              className="btn btn-primary w-100"
              onClick={() => {
                if (address && city && pincode && deliveryType) {
                  setStep(2);
                } else {
                  alert("Please fill all fields!");
                }
              }}
            >
              Continue to Payment
            </button>

            <button className="btn btn-secondary w-100 mt-2" onClick={() => setStep(0)}>
              Back to Cart
            </button>
          </div>
        </div>
      )}

      {/* Step 2 - Payment */}
      {step === 2 && (
        <div className="text-center">
          <h4>Payment</h4>
          <p>Simulated payment method (Cash/UPI etc)</p>
          <button className="btn btn-dark" onClick={() => setStep(3)}>
            Continue to Summary
          </button>
          <br />
          <button className="btn btn-secondary mt-2" onClick={() => setStep(1)}>
            Back to Address
          </button>
        </div>
      )}

      {/* Step 3 - Summary */}
      {step === 3 && (
        <div className="text-center">
          <h4>Order Summary</h4>
          <p>Total: ₹{totalAmountWithDelivery}</p>
          <button className="btn btn-success" onClick={handlePlaceOrder}>
            Place Order
          </button>
          <br />
          <button className="btn btn-secondary mt-2" onClick={() => setStep(2)}>
            Back to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default Addtocart;
