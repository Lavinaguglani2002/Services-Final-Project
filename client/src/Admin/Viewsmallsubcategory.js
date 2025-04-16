
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./viewsubcategory.css"
import api from "../axios";

const Viewsmallsubcategory = () => {
  const navigate = useNavigate();
  const { categoryname, subcategoryname } = useParams();
  const [smallsubcategories, setSmallSubcategories] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartcount, setcartcount] = useState(0); // Initialize cartcount state
  const email = localStorage.getItem("EMAIL") || "guest";  
  useEffect(() => {
    // Fetch small subcategories
    const fetchData = async () => {
      try {
        const response = await api.get(`/getsubsmallcategory/${categoryname}/${subcategoryname}`);
        setSmallSubcategories(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  
    // Load cart for this user
    const storedCart = JSON.parse(localStorage.getItem(`cart_${email}`)) || [];//particular user ka data nikana
    setCart(storedCart);
    setcartcount(storedCart.length);
  }, [categoryname, subcategoryname, email]);
  
  const handleAddToCart = (item) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.productId === item._id && cartItem.status === "pending"
    );
  
    let updatedCart;
    if (existingItemIndex !== -1) {
      updatedCart = cart.map((cartItem, index) =>
        index === existingItemIndex
          ? {
              ...cartItem,   //pehle waale item ki saari properties copy kar lo (spread operator)
              quantity: cartItem.quantity + 1,
              price: (cartItem.quantity + 1) * item.price,
            }
          : cartItem   //agar nahi (false), to purana item waise ka waise hi le lo
  
      );
    } else {
      updatedCart = [
        ...cart,
        {
          productId: item._id,
          userId: email,
          name: item.smallsubcategoryname,
          image: item.smallsubcategoryimage,
          price: item.price,
          quantity: 1,
          status: "pending",
        },
      ];
    }
  
    setCart(updatedCart);
    setcartcount(updatedCart.length);
  
    // Save to localStorage using email
    localStorage.setItem(`cart_${email}`, JSON.stringify(updatedCart));
    localStorage.setItem("cartcount", updatedCart.length);
    window.dispatchEvent(new Event("storage"));
  
    alert("Item added to cart!");
    navigate("/addtocart");
    
  };
  
  

  return (

<div className="view-subcategory-wrapper container mt-4">
  <h2 className="text-center mb-4">{subcategoryname} Products</h2>
  <div className="row">
    {smallsubcategories.map((item) => (
      <div className="col-md-4 mb-4" key={item._id}>
        <div className="card">
          <img
            src={item.smallsubcategoryimage}
            className="card-img-top"
            alt={item.smallsubcategoryname}
          />
          <div className="card-body">
            <h5>{item.smallsubcategoryname}</h5>
            <p>Price: ₹{item.price}</p>
            <button
              className="btn btn-primary w-100"
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Viewsmallsubcategory;
