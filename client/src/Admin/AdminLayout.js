

import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Adminlayout.css";
import api from "../axios";

const AdminLayout = () => {
  const [item, setItem] = useState({});
  const [pic, setPic] = useState(localStorage.getItem("profilePic"));
  const [openDashboard, setOpenDashboard] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);
  const [openBlogs, setOpenBlogs] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);



  const defaultphoto =
    "https://png.pngatree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png";

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("Name")) {
      navigate("/login");
    }
    const name = localStorage.getItem("Name");
    const role = localStorage.getItem("Role");
    setItem({ name });

    if (role === "admin") {
      navigate("/dashboard");
    } else if (role === "user") {
      navigate("/userdashboard");
    }

    if (localStorage.getItem("EMAIL") && localStorage.getItem("TOKEN")) {
      getProfilePic();
    }
  }, []);

  const getProfilePic = async () => {
    const email = localStorage.getItem("EMAIL");
    const token = localStorage.getItem("TOKEN");

    try {
  
  const response = await api.post(
    "/getprofilepic", 
    { email: email },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (response.data.profile) {
    setPic(response.data.profile);
    localStorage.setItem("profilePic", response.data.profile);
  }
} catch (error) {
  console.error("Error fetching profile picture:", error);
}
};

  const handleSignOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="d-flex">
      <div
        className="sidebar"
        style={{
          minHeight: "100vh",
          width: "250px",
          backgroundColor: "#343a40",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h4 className="mb-4">Admin Panel</h4>

        <Link to="/" className="d-block text-white mb-3">
          ⌂ Home
        </Link>

        <div className="mb-3">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => setOpenDashboard(!openDashboard)}
          >
            📊 Dashboard ▼
          </div>
          {openDashboard && (
            <div style={{ paddingLeft: "15px", marginTop: "5px" }}>
              <Link to="/dashboard/category" className="d-block text-white">
                Category
              </Link>
              <Link to="/dashboard/subcategory" className="d-block text-white">
                Subcategory
              </Link>
              <Link to="/dashboard/smallcategory" className="d-block text-white">
                Smallcategory
              </Link>
            </div>
          )}
        </div>

        <div className="mb-3">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => setOpenCategories(!openCategories)}
          >
            📁 Categories ▼
          </div>
          {openCategories && (
            <div style={{ paddingLeft: "15px", marginTop: "5px" }}>
              <Link to="/dashboard/getcategory" className="d-block text-white">
                Get Category
              </Link>
              <Link to="/dashboard/getsubcategory" className="d-block text-white">
                Get Subcategory
              </Link>
              <Link to="/dashboard/getsmallsubcategory" className="d-block text-white">
                Get Smallcategory
              </Link>
            </div>
          )}
        </div>

        <div className="mb-3">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => setOpenBlogs(!openBlogs)}
          >
            📄 Blogs ▼
          </div>
          {openBlogs && (
            <div style={{ paddingLeft: "15px", marginTop: "5px" }}>
              <Link to="/dashboard/blogs" className="d-block text-white">
                Blogs
              </Link>
              <Link to="/dashboard/getblogs" className="d-block text-white">
                Get Blogs
              </Link>
            </div>
          )}
        </div>

        <Link to="/dashboard/enquiries" className="d-block text-white mb-3">
          📅 Profile
        </Link>

        <Link to="/dashboard/getpendingorders" className="d-block text-white mb-3">
          💼 Admin Orders
        </Link>

        <hr />

<div class="dropdown align-items-center">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
{item.name}
  </button>
  <ul class="dropdown-menu">
  <img
      src={pic || defaultphoto}
      alt="User"
      width="40"
      height="40"
      className="rounded-circle me-2"
    />
    <span>{item.name}</span>

    <li><a class="dropdown-item" href="/profilepagee">Profile</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" onClick={handleSignOut}>Sign Out</a></li>
  </ul>
</div>
</div>
      <div
        className="flex-grow-1 p-3"
        style={{ backgroundColor: "#f8f9fa", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
