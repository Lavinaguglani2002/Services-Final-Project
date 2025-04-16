// import axios from 'axios';
// import React, { useState ,useEffect} from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';



// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [captcha, setCaptcha] = useState(""); 
//     const [userInput, setUserInput] = useState("");  
 

//     const [password, setPassword] = useState("");
//     const [showPassword, setShowPassword] = useState(false);


//     const navigate = useNavigate();
//     useEffect(() => {
//         const user = localStorage.getItem("USER");
//         if (user) {
//             navigate("/"); 
//         }
//     }, []);
    
    

//     useEffect(() => {
//         generateCaptcha();
//     }, []);
// //🔹 useEffect tabhi run hoga jab page load hoga, aur generateCaptcha() function call karega taaki ek naya CAPTCHA dikhe.


//     // Function to generate a random CAPTCHA
//     const generateCaptcha = () => {
//         const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$&";  
//         //🔹 Yeh ek empty string initialize karti hai.
//  //Iska kaam yeh hai ki jab hum loop chalayein, toh naye characters isme add ho sakein.


//         let captchaText = "";
//         for (let i = 0; i < 6; i++) {  // Generate a 6-character random string
//             captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
//             //Math.random() gives 0.374 → 0.374 * 62 = 23.188 → Math.floor(23.188) = 23 → characters.charAt(23) → "X"
// //CAPTCHA becomes: "X"


//         }
        
//         setCaptcha(captchaText);  // Update CAPTCHA state
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
    
//         // ✅ First check CAPTCHA before sending request
//         if (userInput !== captcha) {  
//             alert(" Incorrect CAPTCHA! Try again.");
//             generateCaptcha();  // Refresh CAPTCHA
//             return;  
//         }
    
//         try {
//             const response = await axios.post("http://localhost:8000/api/login", { email, password });
    
//             if (response.status === 200) {
//                 alert("✅ Login successful!");
    
//                 localStorage.setItem('USER', response.data.user);
//                 localStorage.setItem('TOKEN', response.data.token);
//                 localStorage.setItem('EMAIL', response.data.email);
//                 localStorage.setItem('Name', response.data.name);
//                 localStorage.setItem("Role",response.data.role)

// navigate("/")
    
//             } else {
//                 alert("Error in data");
//             }
//         } catch (error) {
//             console.error("Error:", error.response ? error.response.data : error.message);
//             alert("Login failed! Please check your email and password.");
//         }   
//     };
    
//     return (
//         <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: "linear-gradient(135deg, #667eea, #764ba2)" }}>
//             <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-white" style={{ width: "90%", maxWidth: "400px" }}>
//                 <h2 className="text-center mb-4">Login</h2>
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
//                     <div className='input-group'>
//                     <input 
//                         type={showPassword? 'text':'password'} 
//                         //showpassweord true hoga toh text nhi to password chup jayenga
//                         className='form-control' 
//                         placeholder='Enter your password' 
//                         value={password} 
//                         required 
//                         pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}"
//                         title="Password must be at least 8 characters, include a number, an uppercase & lowercase letter, and a special character."
//                         onChange={(e) => setPassword(e.target.value)} 
//                     />
//                     <span className='input-group-text' style={{cursor:"pointer"}}
//                     onClick={()=>setShowPassword(!showPassword)}>{showPassword ?<FaEyeSlash/>:<FaEye/>}</span>
//                 </div>
//                 </div>
//                 <label>CAPTCHA:</label>
//                     <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
//                         <span style={{ background: "#ddd", padding: "10px", fontSize: "18px", fontWeight: "bold", letterSpacing: "2px", borderRadius: "5px" }}>{captcha}</span>
//                         <button type="button" onClick={generateCaptcha} style={{ marginLeft: "10px", background: "none", border: "none", cursor: "pointer", fontSize: "20px" }}>🔄</button>
//                     </div>

//                     {/* CAPTCHA Input */}
//                     <input 
//                         type="text" 
//                         placeholder="Enter CAPTCHA" 
//                         value={userInput} 
//                         onChange={(e) => setUserInput(e.target.value)} 
//                         style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }} 
//                         required 
//                     />

//                 <button type="submit" className="btn btn-primary w-100">Submit</button>
//                 <div className="text-center mt-3">
//                     <Link to="/signup" className="text-decoration-none">Don't have an account? <strong>Signup</strong></Link>
//                 </div>
//                 <div className="text-center mt-2">
//                     <Link to="/forgotpassword" className="text-decoration-none">Forgot Password?</Link>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Login;



import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import api from '../axios';
const Login = () => {
  const [email, setEmail] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("USER");
    if (user) navigate("/");
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$&";
    let captchaText = "";
    for (let i = 0; i < 6; i++) {
      captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(captchaText);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userInput !== captcha) {
      alert("❌ Incorrect CAPTCHA!");
      generateCaptcha();
      return;
    }

    try {
      const response = await api.post("/login", { email, password });
      if (response.status === 200) {
        alert("✅ Login successful!");
        localStorage.setItem('USER', response.data.user);
        localStorage.setItem('TOKEN', response.data.token);
        localStorage.setItem('EMAIL', response.data.email);
        localStorage.setItem('Name', response.data.name);
        localStorage.setItem("Role", response.data.role);
        localStorage.setItem("userId", response.data.user);


        navigate("/");
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      alert("Login failed!");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #fceabb, #f8b400)",
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
          🌟 Welcome Back!
        </h2>

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
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}"
              title="8+ chars, upper, lower, number & special char"
              style={{
                borderRadius: "10px",
                border: "1px solid #ccc",
                padding: "10px",
              }}
            />
            <span
              className="input-group-text"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                cursor: "pointer",
                backgroundColor: "#f8b500",
                color: "#fff",
                border: "none",
                borderRadius: "0 10px 10px 0",
              }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <label className="form-label fw-semibold">CAPTCHA</label>
        <div className="d-flex align-items-center mb-2">
          <div
            className="px-3 py-2"
            style={{
              background: "#ffe58a",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "8px",
              letterSpacing: "2px",
              fontSize: "18px",
              flex: 1,
            }}
          >
            {captcha}
          </div>
          <button
            type="button"
            onClick={generateCaptcha}
            className="btn btn-light ms-2"
            style={{
              fontSize: "20px",
              border: "1px solid #f8b500",
              color: "#f8b500",
              borderRadius: "10px",
              background: "#fff8e1",
            }}
            title="Refresh CAPTCHA"
          >
            🔄
          </button>
        </div>
        <input
          type="text"
          placeholder="Enter CAPTCHA"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          required
          className="form-control mb-3"
          style={{
            borderRadius: "10px",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        />

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
            boxShadow: "0 4px 15px rgba(220, 181, 0, 0.5)",
            transition: "0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          🔓 Login
        </button>

        <div className="text-center mt-3">
          <Link to="/signup" className="text-decoration-none" style={{ color: "#f8b500" }}>
            Don't have an account? <strong>Sign Up</strong>
          </Link>
        </div>
        <div className="text-center mt-2">
          <Link to="/forgotpassword" className="text-decoration-none" style={{ color: "#888" }}>
            Forgot Password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
