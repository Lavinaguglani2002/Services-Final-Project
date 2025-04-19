
// // import { useState, useEffect } from "react";
// // import { useNavigate, useParams } from "react-router-dom";
// // import axios from "axios";
// // import { Link } from "react-router-dom";
// // import "./viewsubcategory.css"
// // import api from "../axios";

// // const Viewsmallsubcategory = () => {
// //   const navigate = useNavigate();
// //   const { categoryname, subcategoryname } = useParams();
// //   const [smallsubcategories, setSmallSubcategories] = useState([]);
// //   const [cart, setCart] = useState([]);
// //   const [cartcount, setcartcount] = useState(0); // Initialize cartcount state
// //   const email = localStorage.getItem("EMAIL") || "guest";  
// //   const role = localStorage.getItem("Role")  // Get role from localStorage

// //   useEffect(() => {
// //     useEffect(() => {
// //       if (role === "admin") {
// //         alert("Admins are not allowed to access this page.");
// //         navigate("/"); // Redirect to home or a specific page
// //       }
  
// //     // Fetch small subcategories
// //     const fetchData = async () => {
// //       try {
// //         const response = await api.get(`/getsubsmallcategory/${categoryname}/${subcategoryname}`);
// //         setSmallSubcategories(response.data);
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //       }
// //     };
// //     fetchData();
  
// //     // Load cart for this user
// //     const storedCart = JSON.parse(localStorage.getItem(`cart_${email}`)) || [];//particular user ka data nikana
// //     setCart(storedCart);
// //     setcartcount(storedCart.length);
// //   }, [categoryname, subcategoryname, email]);
  
// //   const handleAddToCart = (item) => {
// //     const existingItemIndex = cart.findIndex(
// //       (cartItem) => cartItem.productId === item._id && cartItem.status === "pending"
// //     );
  
// //     let updatedCart;
// //     if (existingItemIndex !== -1) {
// //       updatedCart = cart.map((cartItem, index) =>
// //         index === existingItemIndex
// //           ? {
// //               ...cartItem,   //pehle waale item ki saari properties copy kar lo (spread operator)
// //               quantity: cartItem.quantity + 1,
// //               price: (cartItem.quantity + 1) * item.price,
// //             }
// //           : cartItem   //agar nahi (false), to purana item waise ka waise hi le lo
  
// //       );
// //     } else {
// //       updatedCart = [
// //         ...cart,
// //         {
// //           productId: item._id,
// //           userId: email,
// //           name: item.smallsubcategoryname,
// //           image: item.smallsubcategoryimage,
// //           price: item.price,
// //           quantity: 1,
// //           status: "pending",
// //         },
// //       ];
// //     }
  
// //     setCart(updatedCart);
// //     setcartcount(updatedCart.length);
  
// //     // Save to localStorage using email
// //     localStorage.setItem(`cart_${email}`, JSON.stringify(updatedCart));
// //     localStorage.setItem("cartcount", updatedCart.length);
// //     window.dispatchEvent(new Event("storage"));
  
// //     alert("Item added to cart!");
// //     navigate("/addtocart");
    
// //   };
  
  

// //   return (

// // <div className="view-subcategory-wrapper container mt-4">
// //   <h2 className="text-center mb-4">{subcategoryname} Products</h2>
// //   <div className="row">
// //     {smallsubcategories.map((item) => (
// //       <div className="col-md-4 mb-4" key={item._id}>
// //         <div className="card">
// //           <img
// //             src={item.smallsubcategoryimage}
// //             className="card-img-top"
// //             alt={item.smallsubcategoryname}
// //           />
// //           <div className="card-body">
// //             <h5>{item.smallsubcategoryname}</h5>
// //             <p>Price: ₹{item.price}</p>
// //             <button
// //               className="btn btn-primary w-100"
// //               onClick={() => handleAddToCart(item)}
// //             >
// //               Add to Cart
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     ))}
// //   </div>
// // </div>

// //   );
// // };

// // export default Viewsmallsubcategory;



// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import "./viewsubcategory.css";
// import api from "../axios";

// const Viewsmallsubcategory = () => {
//   const navigate = useNavigate();
//   const { categoryname, subcategoryname } = useParams();
//   const [smallsubcategories, setSmallSubcategories] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [cartcount, setcartcount] = useState(0); // Initialize cartcount state
//   const email = localStorage.getItem("EMAIL") || "guest";
//   const role = localStorage.getItem("Role")  // Get role from localStorage
  
//   useEffect(() => {
//     console.log(role)
//     if (role === "admin") {
//       alert("Admins are not allowed to access this page.");
//       navigate("/"); 
//     }

//     const fetchData = async () => {
//       try {
//         const response = await api.get(`/getsubsmallcategory/${categoryname}/${subcategoryname}`);
//         setSmallSubcategories(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();

//     // Load cart for this user
//     const storedCart = JSON.parse(localStorage.getItem(`cart_${email}`)) || []; // Load specific user data
//     setCart(storedCart);
//     setcartcount(storedCart.length);
//   }, [categoryname, subcategoryname, email, role, navigate]);

//   const handleAddToCart = (item) => {
//     if (role === "admin") {
//       alert("Admins cannot add items to the cart.");
//       return; 
//     }

//     const existingItemIndex = cart.findIndex(
//       (cartItem) => cartItem.productId === item._id && cartItem.status === "pending"
//     );

//     let updatedCart;
//     if (existingItemIndex !== -1) {
//       updatedCart = cart.map((cartItem, index) =>
//         index === existingItemIndex
//           ? {
//               ...cartItem,
//               quantity: cartItem.quantity + 1,
//               price: (cartItem.quantity + 1) * item.price,
//             }
//           : cartItem
//       );
//     } else {
//       updatedCart = [
//         ...cart,
//         {
//           productId: item._id,
//           userId: email,
//           name: item.smallsubcategoryname,
//           image: item.smallsubcategoryimage,
//           price: item.price,
//           quantity: 1,
//           status: "pending",
//         },
//       ];
//     }

//     setCart(updatedCart);
//     setcartcount(updatedCart.length);

//     // Save to localStorage using email
//     localStorage.setItem(`cart_${email}`, JSON.stringify(updatedCart));
//     localStorage.setItem("cartcount", updatedCart.length);
//     window.dispatchEvent(new Event("storage"));

//     alert("Item added to cart!");
//     navigate("/addtocart");
//   };

//   return (
//     <div className="view-subcategory-wrapper container mt-4">
//       <h2 className="text-center mb-4">{subcategoryname} Products</h2>
//       <div className="row">
//         {smallsubcategories.map((item) => (
//           <div className="col-md-4 mb-4" key={item._id}>
//             <div className="card">
//               <img
//                 src={item.smallsubcategoryimage}
//                 className="card-img-top"
//                 alt={item.smallsubcategoryname}
//               />
//               <div className="card-body">
//                 <h5>{item.smallsubcategoryname}</h5>
//                 <p>Price: ₹{item.price}</p>
//                 <button
//                   className="btn btn-primary w-100"
//                   onClick={() => handleAddToCart(item)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Viewsmallsubcategory;



import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./viewsubcategory.css";
import api from "../axios";

const Viewsmallsubcategory = () => {
  const navigate = useNavigate();
  const { categoryname, subcategoryname } = useParams();
  const [smallsubcategories, setSmallSubcategories] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartcount, setCartCount] = useState(0); // Initialize cartcount state
  const email = localStorage.getItem("EMAIL") || "guest";
  const role = localStorage.getItem("Role");  // Get role from localStorage

  // Check if the user is admin
  useEffect(() => {
    if (role === "admin") {
      alert("Admins are not allowed to access this page.");
      navigate("/"); // Redirect to home or a specific page
    }
  }, [role, navigate]);

  // Fetch small subcategories
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/getsubsmallcategory/${categoryname}/${subcategoryname}`);
        console.log(response.data); // Check the response data
        setSmallSubcategories(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [categoryname, subcategoryname]);

  // Load cart for this user
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem(`cart_${email}`)) || []; // Load specific user data
    setCart(storedCart);
    setCartCount(storedCart.length);
  }, [email]);

  const handleAddToCart = (item) => {
    if (role === "admin") {
      alert("Admins cannot add items to the cart.");
      return;
    }

    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.productId === item._id && cartItem.status === "pending"
    );

    let updatedCart;
    if (existingItemIndex !== -1) {
      updatedCart = cart.map((cartItem, index) =>
        index === existingItemIndex
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
              price: (cartItem.quantity + 1) * item.price,
            }
          : cartItem
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
    setCartCount(updatedCart.length);

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
