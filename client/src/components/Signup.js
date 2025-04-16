// import axios from 'axios';
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';


// const Signup = () => {
//     const navigate = useNavigate();
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [showPassword, setShowPassword] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post("http://localhost:8000/api/signup", { name, email, password });
            
//             if (response.status === 200) {
//                 alert("Data submitted successfully");
//                 navigate("/login");
//             } else {
//                 alert("Error in data");
//             }
//         } catch (error) {
//             console.log("Error:", error);
//         }
//     };

//     return (
//         <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: "linear-gradient(135deg, #ff9a9e, #fad0c4)" }}>
//             <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-white" style={{ width: "90%", maxWidth: "400px" }}>
//                 <h2 className="text-center mb-4">Sign Up</h2>
//                 <div className="mb-3">
//                     <label className="form-label">Name</label>
//                     <input 
//                         type="text" 
//                         className='form-control' 
//                         placeholder='Enter your name' 
//                         value={name} 
//                         onChange={(e) => setName(e.target.value)} 
//                         required 
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Email</label>
//                     <input 
//                         type='email' 
//                         className='form-control' 
//                         placeholder='Enter your email' 
//                         value={email} 
//                         onChange={(e) => setEmail(e.target.value)} 
//                         required 
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Password</label>
//                   <div className='input-group'>
//                     <input 
//                         type={showPassword?'text':'password'} 
//                         className='form-control' 
//                         placeholder='Enter your password' 
//                         value={password} 
//                         onChange={(e) => setPassword(e.target.value)} 
//                         required 
//                         pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}"
//                         title="Password must be at least 8 characters, include a number, an uppercase & lowercase letter, and a special character."
            
//                     />
//                     <span className='input-group-text' style={{cursor:"pointer"}}
//                     onClick={()=>setShowPassword(!showPassword)}>{showPassword ?<FaEyeSlash/>:<FaEye/>}</span>
// </div>
//                 </div>
//                 <button type="submit" className="btn btn-primary w-100">Submit</button>
//                 <div className="text-center mt-3">
//                     <Link to="/login" className="text-decoration-none">Already have an account? <strong>Login</strong></Link>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Signup;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import api from '../axios';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/signup", { name, email, password });

      if (response.status === 200) {
        alert("🎉 Account created successfully!");
        navigate("/login");
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.log("Error:", error);
      alert("Signup failed!");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(to right, #fceabb, #f8B400)",
        padding: "20px",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="shadow p-4"
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "#ffffff",
          borderRadius: "20px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          className="text-center mb-4 fw-bold"
          style={{ color: "#f8b500", fontSize: "28px" }}
        >
          ✨ Create Account
        </h2>

        <div className="mb-3">
          <label className="form-label fw-semibold">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              borderRadius: "10px",
              border: "1px solid #ccc",
              padding: "10px",
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              borderRadius: "10px",
              border: "1px solid #ccc",
              padding: "10px",
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Password</label>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}"
              title="Password must be at least 8 characters, include a number, an uppercase & lowercase letter, and a special character."
              style={{
                borderRadius: "10px",
                border: "1px solid #ccc",
                padding: "10px",
              }}
            />
            <span
              className="input-group-text"
              style={{
                cursor: "pointer",
                backgroundColor: "#f8b500",
                color: "#fff",
                border: "none",
                borderRadius: "0 10px 10px 0",
              }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="btn w-100 fw-bold"
          style={{
            backgroundColor: "#f8b500",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            padding: "12px 0",
            fontSize: "16px",
            boxShadow: "0 4px 15px rgba(248, 181, 0, 0.5)",
            transition: "0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          🚀 Sign Up
        </button>

        <div className="text-center mt-3">
          <Link to="/login" className="text-decoration-none" style={{ color: "#f8b500" }}>
            Already have an account? <strong>Login</strong>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
