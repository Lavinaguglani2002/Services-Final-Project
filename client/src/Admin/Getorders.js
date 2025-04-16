


// import React, { useEffect, useState } from 'react';

// const Getorders = () => {
//   const [orders, setOrders] = useState([]);
//   const [message, setMessage] = useState('');
//   const [selectedEmail, setSelectedEmail] = useState([]);

//   useEffect(() => {
//     getAllOrders();
//   }, []);

//   const getAllOrders = async () => {
//     try {
//       const res = await fetch('http://localhost:8000/getorders', {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' },
//       });
//       const data = await res.json();
//       setOrders(data.orders || []);
//       setSelectedEmail('');
//     } catch (err) {
//       console.log('Error:', err);
//     }
//   };

//   const getOrdersByEmail = async (email) => {
//     try {
//       const res = await fetch(`http://localhost:8000/ordersbyemail/${email}`, {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' },
//       });
//       const data = await res.json();
//       setOrders(data.orders || []);
//       setSelectedEmail(email);
//     } catch (err) {
//       console.log('Error:', err);
//     }
//   };

//   // const updateStatus = async (id, status) => {
//   //   try {
//   //     const res = await fetch('http://localhost:8000/updateorderstatus', {
//   //       method: 'PUT',
//   //       headers: { 'Content-Type': 'application/json' },
//   //       body: JSON.stringify({ orderId: id, deliveryStatus: status }),
//   //     });
//   //     const data = await res.json();

//   //     if (res.ok) {
//   //       setMessage(`Order ${status} successfully!`);
//   //       setOrders((prev) =>
//   //         prev.map((order) =>
//   //           order._id === id ? { ...order, deliveryStatus: status } : order
//   //         )
//   //       );
//   //     } else {
//   //       setMessage(data.message || 'Failed to update.');
//   //     }
//   //   } catch (err) {
//   //     console.log('Error:', err);
//   //   }
//   // };


// //handle proceedd


// const handleReject = async (orderId) => {
//   await fetch(`http://localhost:8000/updateorder/${orderId}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ deliveryStatus: "Rejected" })
//   });
//   getAllOrders();
// };

// const handleProceed = async (orderId, orderDate) => {
//   const choice = window.prompt("Choose Delivery Type: fast / normal")?.toLowerCase();
//   let deliveryDate = new Date(orderDate);

//   if (choice === "fast") deliveryDate.setDate(deliveryDate.getDate() + 3);
//   else if (choice === "normal") deliveryDate.setDate(deliveryDate.getDate() + 7);
//   else return alert("Invalid choice");

//   await fetch(`http://localhost:8000/updateorder/${orderId}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       deliveryStatus: "Shipped",
//       deliveryDate
//     })
//   });
//   getAllOrders();
// };




//   // Get unique user emails from orders
//   const uniqueEmails = [...new Set(orders.map(order => order.userId?.email).filter(Boolean))];

//   return (
//     <div className="container mt-4">
//       <h2>{selectedEmail ? `Orders of ${selectedEmail}` : 'All Orders'}</h2>

//       {selectedEmail && (
//         <button className="btn btn-secondary mb-3" onClick={getAllOrders}>
//           ← Back
//         </button>
//       )}

//       {!selectedEmail && uniqueEmails.length > 0 && (
//         <div className="mb-3">
//           <label className="form-label"><b>Select by Email:</b></label>
//           <select
//             className="form-select"
//             value={selectedEmail}
//             onChange={(e) => getOrdersByEmail(e.target.value)}
//           >
//             <option value="">-- Select an email --</option>
//             {uniqueEmails.map((email) => (
//               <option key={email} value={email}>{email}</option>
//             ))}
//           </select>
//         </div>
//       )}

//       {message && <div className="alert alert-info">{message}</div>}

//       {orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         orders.map((order, index) => (
//           <div key={order._id} className="card mb-3 p-3 shadow-sm">
//             <p><b>Service:</b> Order {index + 1} - {order.serviceName}</p>
//             <p><b>Date & Time:</b> {new Date(order.serviceDate).toLocaleString()}</p>
//         <p>   <strong>Status:</strong>{order.deliveryStatus}</p> 
//         <p><strong>Delivery Date:</strong>{new Date (order.deliveryDate).toLocaleDateString()}</p>
//             <p><b>Amount:</b> ₹{order.totalAmount}</p>

//             <p>
//               <b>User:</b> {order.userId?.name || 'N/A'} (
//               <span
//                 style={{ color: 'blue', cursor: 'pointer' }}
//                 onClick={() => getOrdersByEmail(order.userId?.email)}
//               >
//                 {order.userId?.email || 'N/A'}
//               </span>
//               )
//             </p>
//             <p><b>Status:</b> {order.deliveryStatus}</p>

//             {order.deliveryStatus === 'Pending' ? (
//               <div className="d-flex gap-2">
//                 <button className="btn btn-success btn-sm" onClick={() => handleReject(order._id, 'Approved')}>
//                   Approve
//                 </button>
//                 <button className="btn btn-danger btn-sm" onClick={() => handleReject(order._id, 'Rejected')}
//                   disabled={order.deliveryStatus === 'Rejected'}>
//                   Reject
//                 </button>
//               </div>
//             ) : (
//               <span className={`badge ${order.deliveryStatus === 'Approved' ? 'bg-success' : 'bg-danger'}`}>
//                 {order.deliveryStatus}
//               </span>
//             )}
//             <button className='btn btn-success' onClick={()=>handleProceed(order._id,order.serviceDate)}
//               disabled={order.deliveryStatus==="Shipped" || order.deliveryStatus==="Rejected"}>
              
//             </button>

//             <ul className="order-items mt-2">
//               {order.cartItems.map((item, idx) => (
//                 <li key={idx} className="mb-1">
//                   <strong>{item.name}</strong> - ₹{item.price} x {item.quantity}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Getorders;





















import React, { useEffect, useState } from 'react';
import api from '../axios';

const Getorders = () => {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState('');
  const [selectedEmail, setSelectedEmail] = useState('');
const [loading,setLoading]=useState(false)
const [loadingOrderId,setLoadingOrderId]=useState('')
  useEffect(() => {
    getAllOrders();
  }, []);

  const getAllOrders = async () => {
    try {
      // Use axios to get all orders
      const res = await api.get('/getorders');
      
      // Set the orders state with the data from the response
      setOrders(res.data.orders || []);
      setSelectedEmail('');
    } catch (err) {
      console.log("Error:", err);  // Handle error
    }
  };
  

  const getOrdersByEmail = async (email) => {
    try {
      // Use axios to get the orders by email
      const res = await api.get(`/ordersbyemail/${email}`);
      
      // Set the orders state with the data from the response
      setOrders(res.data.orders || []);
      setSelectedEmail(email);
    } catch (err) {
      console.log("Error:", err);  // Handle error
    }
  };
  
  const handleReject = async (orderId) => {
    setLoadingOrderId(orderId);
  
    try {
      // Use axios to send the PUT request
      await api.put(`/updateorder/${orderId}`, {
        deliveryStatus: 'Rejected',
      });
      
      // Call the function to get all orders after the update
      await getAllOrders();
    } catch (error) {
      console.error("Error rejecting the order:", error);  // Handle error
    }
  
    setLoadingOrderId(null);
  };

  const handleProceed = async (orderId, orderDate, deliveryStatus) => {
    setLoadingOrderId(orderId);
    let deliveryDate = new Date(orderDate);
  
    if (deliveryStatus === 'fast') {
      deliveryDate.setDate(deliveryDate.getDate() + 2);
    } else {
      deliveryDate.setDate(deliveryDate.getDate() + 4);
    }
  
    try {
      // Use axios to send the PUT request
      await api.put(`/updateorder/${orderId}`, {
        deliveryStatus: 'Shipped',
        deliveryDate,
      });
      
      // Call the function to get all orders after the update
      await getAllOrders();
    } catch (error) {
      console.error("Error updating the order:", error);  // Handle error
    }
  
    setLoadingOrderId(null);
  };
  

  const uniqueEmails = [...new Set(orders.map(order => order.userId?.email).filter(Boolean))];

  return (
    <div className="container mt-4">
      <h2>{selectedEmail ? `Orders of ${selectedEmail}` : 'All Orders'}</h2>

      {selectedEmail && (
        <button className="btn btn-secondary mb-3" onClick={getAllOrders}>
          ← Back
        </button>
      )}

      {!selectedEmail && uniqueEmails.length > 0 && (
        <div className="mb-3">
          <label className="form-label"><b>Select by Email:</b></label>
          <select
            className="form-select"
            value={selectedEmail}
            onChange={(e) => getOrdersByEmail(e.target.value)}
          >
            <option value="">-- Select an email --</option>
            {uniqueEmails.map((email) => (
              <option key={email} value={email}>{email}</option>
            ))}
          </select>
          {loading && <div className='text-center md-3 text-white'>Please Wait</div>}
        </div>
      )}

      {message && <div className="alert alert-info">{message}</div>}

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div key={order._id} className="card mb-3 p-3 shadow-sm">
            <p><b>Service:</b> Order {index + 1} - {order.serviceName}</p>
            <p><b>Date & Time:</b> {new Date(order.serviceDate).toLocaleString()}</p>
            <p><strong>Status:</strong> {order.deliveryStatus}</p>
            <p><strong>Delivery Date:</strong> {order.deliveryDate ? new Date(order.deliveryDate).toLocaleDateString() : 'N/A'}</p>
            <p><b>Amount:</b> ₹{order.totalAmount}</p>
            <p>
              <b>User:</b> {order.userId?.name || 'N/A'} (
              <span
                style={{ color: 'blue', cursor: 'pointer' }}
                onClick={() => getOrdersByEmail(order.userId?.email)}
              >
                {order.userId?.email || 'N/A'}
              </span>
              )
            </p>

            {order.deliveryStatus === 'Pending' && (
              <div className="d-flex gap-2">
                <button className="btn btn-success btn-sm" onClick={() => handleProceed(order._id, order.serviceDate,order.deliveryStatus)}
                  disabled={loadingOrderId === order._id || order.deliveryStatus==="Shipped"}>
                  {loadingOrderId === order._id ? 'Processing...' : 'Approve'}
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleReject(order._id)}
                  disabled={loadingOrderId === order._id || order.deliveryStatus==="Rejected"} >
                    {loadingOrderId === order._id ? 'Rejecting...' : 'Reject'}
                </button>
              </div>
            )}

            {order.deliveryStatus !== 'Pending' && (
              <span className={`badge ${order.deliveryStatus === 'Shipped' ? 'bg-success' : 'bg-danger'}`}>
                {order.deliveryStatus}
              </span>
            )}

            <ul className="order-items mt-2">
              {order.cartItems.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.name}</strong> - ₹{item.price} x {item.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default Getorders;
