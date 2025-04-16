// import React, { useEffect, useState } from "react";

// const UserOrders = ({ userEmail }) => {
//   const [orders, setOrders] = useState([]);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     if (userEmail) {
//       fetchOrdersByEmail(userEmail);
//     }
//   }, [userEmail]);

//   const fetchOrdersByEmail = async (email) => {
//     try {
//       const res = await fetch(`http://localhost:8000/getuserorders/${email}`);
//       const data = await res.json();
//       setOrders(data.orders || []);
//     } catch (err) {
//       console.error("User order fetch error:", err);
//       setMessage("Failed to load orders.");
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4 fw-bold">My Orders</h2>

//       {message && <div className="alert alert-danger text-center">{message}</div>}

//       {orders.length === 0 ? (
//         <p className="text-center">No orders found.</p>
//       ) : (
//         <div className="row">
//           {orders.map((order, index) => (
//             <div key={index} className="col-md-6 col-lg-4 mb-4">
//               <div className="card border-0 shadow h-100">
//                 <div className="card-body">
//                   <h5 className="card-title mb-3 text-primary">
// Order {index+1} - {order.serviceName}
//                   </h5>
//                   <ul className="list-unstyled">
//                     <li>
//                       <strong>Date:</strong>{" "}
//                       {new Date(order.serviceDate).toLocaleDateString()}
//                     </li>
//                     <li>
//                       <strong>Amount:</strong> ₹{order.totalAmount}
//                     </li>
//                     <li>
//                       <strong>Status:</strong>{" "}
//                       <span
//                         className={`badge px-3 py-2 ${
//                           order.deliveryStatus === "Approved"
//                             ? "bg-success"
//                             : order.deliveryStatus === "Rejected"
//                             ? "bg-danger"
//                             : "bg-warning text-dark"
//                         }`}
//                       >
//                         {order.deliveryStatus}
//                       </span>
//                     </li>
//                     <ul className="order-items mt-2">
//                         {order.cartItems.map((item, idx) => (
//                             <li key={idx} className="mb-1">
//                             <strong>{item.name}</strong> - ₹{item.price} x {item.quantity}
//                           </li>
//                         ))}
//                     </ul>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserOrders;


import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "../axios";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        console.log("📤 Fetching orders for userId:", userId);
        const res = await api.get(`/getuserorders/${userId}`);
        console.log("✅ Orders received:", res.data.orders);
        setOrders(res.data.orders);
      } catch (error) {
        console.error("❌ Error fetching orders:", error);
      }
    };

    if (userId) {
      fetchOrders();
    }
  }, [userId]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>

{orders.map((order) => (
  <li key={order._id} className="mb-4 border p-4 rounded-lg shadow">
    <p><strong>Status:</strong> {order.deliveryStatus}</p>
    {order.deliveryStatus === "Shipped" &&  (
  <p className="text-success">
    📦 Delivery Date:
    {order.deliveryDate &&(
      <>-Delivery Date {new Date(order.deliveryDate).toLocaleDateString()}</>
  )}
  </p>
)}

    <p><strong>Delivery Type:</strong> {order.deliveryType}</p>

    <p className="mt-2 font-semibold">Items:</p>
    <ul className="ml-4 list-disc">
      {order.cartItems?.map((item, idx) => (
        <li key={idx} className="mb-2 flex items-center gap-4">

{item.image && (
  <img
    src={item.image}
    alt={item.name}
    style={{ width: "26px", height: "30px", objectFit: "cover", borderRadius: "4px" }}
  />
)}


<p className="card-text">
  Qty: {item.quantity} × ₹{(item.price / item.quantity).toFixed(2)} = ₹{item.price}
</p>
          
          <div>Total Amount:{order.totalAmount}</div>
        </li>
      ))}
    </ul>
  </li>
))}


        </ul>
      )}
    </div>
  );
};

export default MyOrders;
