




import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Typewriter from '../Admin/Typewriter';
import "./Layout.css"; // Custom CSS file for additional styling
import { useLocation } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [username, setUsername] = useState(null);
  const [cartCount, setCartCount] = useState(0); // Renamed to cartCount for clarity
  const [useremail, setUseremail] = useState("");
  const [userrole, setUserrole] = useState("");
  const [typewriterText, setTypewriterText] = useState('');

  const location=useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(()=>{
    const email=localStorage.getItem("EMAIL")
    if(email){
      const savedCart=JSON.parse(localStorage.getItem(`cart_${email}`))||[];
      setCartCount(savedCart.length)
    }
    const handleStorageChange=()=>{
      const email=localStorage.getItem("EMAIL")
      if(email){
        const updatedCart=JSON.parse(localStorage.getItem( `cart_${email}`))||[];
        setCartCount(updatedCart.length)
      }
    }
    window.addEventListener("storage",handleStorageChange)
    return ()=>window.removeEventListener("storage",handleStorageChange)
  },[location])


  useEffect(() => {
    const storedUser = localStorage.getItem("Name");
    const storedRole = localStorage.getItem("Role");
    const email = localStorage.getItem("EMAIL");

    if (storedUser) {
      console.log("User:", storedUser);
      setUsername(storedUser);
      setUseremail(email);
      setUserrole(storedRole);
      
    }
  },[location])


  const handleLogout = () => {
    localStorage.clear()

    navigate("/login");
  };

  const placeholders = [
    "Search for facial...",
    "Search for cleaning...",
    "Search for hair treatment...",
    "Search for massage...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
      setTypewriterText(placeholders[index]); // Update typewriter text
    }, 500);

    return () => clearInterval(interval);
  }, [index]);
const handleAddToCart=async()=>{
  const email=localStorage.getItem("EMAIL")
  if(email){
    navigate("/addtocart")
  }else{
    alert("please login")
    navigate("/login")
  }
  
}
  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid d-flex align-items-center">
          <a className="navbar-brand text-white d-flex align-items-center" href="#">
            <img 
              src="https://images-platform.99static.com//5izzx5mICDKM8GVjq-fDbXrLqyU=/482x1354:1119x1991/fit-in/500x500/99designs-contests-attachments/124/124405/attachment_124405286" 
              className="logo" 
              alt="logo"
            />
            <span className="ms-2 fw-bold">Handihud</span>
          </a>
          <button className="navbar-toggler text-white" type="button" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link to="/dashboard" className="nav-link">AdminLayout</Link></li>
              <li className="nav-item"><Link to="/blogs" className="nav-link">Blogs</Link></li>

              <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>

              <li className="nav-item"><Link to="/survey" className="nav-link">Survey</Link></li>
              {userrole === "admin" ? (
                <Link className='nav-link' to="/dashboard">
                  <button className='btn btn-primary me-3 text-white'>Dashboard</button>
                </Link>
              ) : userrole === "user" ? (
                <Link className='nav-link' to="/userdashboard">
                  <button className='btn btn-primary me-3'>Dashboard</button>
                </Link>
              ) : null}

              <li className="nav-item"><Link to="/viewsmallcategory/:categoryname/:subcategoryname" className="nav-link">View category</Link></li>
              <li className="nav-item">
                <input 
                  className="form-control mt-2" 
                  type="text" 
                  placeholder={typewriterText} 
                />
              </li>

              <Typewriter 
                texts={placeholders}  
                delay={100}           
                switchDelay={2000}    
                onUpdate={setTypewriterText} 
              />

<li className="nav-item d-flex align-items-center mt-2">
  <div className="cart-icon-container">
    <i className="fa-solid fa-cart-shopping mx-3 icon" onClick={() => handleAddToCart()}></i>
    {/* Show cart count as a badge above the cart icon */}
      <span className="cart-count-badge text-white">{cartCount}</span>
  </div>

  {username ? (
    <div className="d-flex align-items-center">
      <span className="user-circle">{username.charAt(0).toUpperCase()}</span>
      <button className="btn btn-danger btn-sm ms-2" onClick={handleLogout}>Logout</button>
    </div>
  ) : (
    <Link to="/login">
      <i className="fa-solid fa-user icon"></i>
    </Link>
  )}
</li>

            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <footer className="custom-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <h6>About Us</h6>
              <p>Providing the best services in town.</p>
            </div>
            <div className="col-lg-2 col-md-6 mb-4">
              <h6>Quick Links</h6>
              <p><a href="/">Home</a></p>
              <p><a href="#">Services</a></p>
              <p><a href="#">Contact</a></p>
            </div>
            <div className="col-lg-2 col-md-6 mb-4">
              <h6>Follow Us</h6>
              <p><a href="#">Facebook</a></p>
              <p><a href="#">Twitter</a></p>
              <p><a href="#">Instagram</a></p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
