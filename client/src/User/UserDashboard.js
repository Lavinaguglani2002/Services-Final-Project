
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaUser, FaCog, FaSignOutAlt, FaChevronDown } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [item, setItem] = useState({});

  useEffect(() => {
    const name = localStorage.getItem("Name");
    const role = localStorage.getItem("Role");

    setItem({ name });

    if (role === "admin") {
      navigate("/dashboard");
    } else if (!role || role !== "user") {
      navigate("/login");
    }
  }, [navigate]);

  const handlelogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div
        className={`p-3 ${isSidebarOpen ? "d-block" : "d-none d-md-block"}`}
        style={{
          backgroundColor: "#1f1f2e",
          color: "white",
          width: "250px",
          boxShadow: "2px 0 10px rgba(0, 0, 0, 0.3)",
          borderRadius: "0 10px 10px 0",
        }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="fw-bold">User Dashboard</h4>
          <button className="btn btn-sm text-white d-md-none" onClick={() => setIsSidebarOpen(false)}>
            <FaTimes size={24} />
          </button>
        </div>

        <nav className="mt-4">
          <Link
            to="/"
            style={{
              display: "block",
              color: "white",
              padding: "10px 15px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "500",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#343a40")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <FaUser className="me-2" /> Home
          </Link>

          <div className="mt-4">
            <Link
              to="/my-orders"
              style={{
                display: "block",
                color: "white",
                padding: "10px 15px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "500",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#343a40")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <FaUser className="me-2" /> My Orders
            </Link>
          </div>

          {/* Dropdown for Settings */}
          <div className="mt-3">
            <button
              className="btn w-100 text-start d-flex justify-content-between align-items-center"
              style={{
                backgroundColor: "#1f1f2e",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "8px",
              }}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>
                <FaCog className="me-2" /> Settings
              </span>
              <FaChevronDown
                style={{
                  transition: "transform 0.3s",
                  transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {isDropdownOpen && (
              <div
                style={{
                  marginLeft: "1rem",
                  borderLeft: "2px solid white",
                  paddingLeft: "0.5rem",
                  marginTop: "0.5rem",
                }}
              >
                <Link
                  to="/settings/account"
                  style={{
                    display: "block",
                    color: "white",
                    padding: "8px 10px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    transition: "background-color 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#343a40")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  Account
                </Link>
                <Link
                  to="/settings/security"
                  style={{
                    display: "block",
                    color: "white",
                    padding: "8px 10px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    transition: "background-color 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#343a40")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  Security
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/login"
            onClick={handlelogout}
            style={{
              display: "block",
              color: "white",
              padding: "10px 15px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "500",
              marginTop: "1rem",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#343a40")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <FaSignOutAlt className="me-2" /> Logout
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 bg-light p-4">
        <button className="btn btn-dark d-md-none mb-3" onClick={() => setIsSidebarOpen(true)}>
          <FaBars size={24} />
        </button>
        <h2 className="fw-bold">Welcome {item.name || "User"}!</h2>
        <p className="mt-2">Manage your profile, settings, and more.</p>
      </div>
    </div>
  );
};

export default UserDashboard;
