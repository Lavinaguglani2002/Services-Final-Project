import React, { useEffect, useState } from "react";
import "./BlogsForm.css";
import axios from "axios";
import { Link,  useNavigate } from "react-router-dom";
import api from "../axios";

const CategoryForm = () => {
  const navigate=useNavigate()
  const [categoryname, setCategoryName] = useState("");
  const [categoryimage ,setCategoryImage] = useState("");
  const [photourl, setPhotourl] = useState("");

  useEffect(() => {
    if (categoryimage) {
      Upload(categoryimage);
    }
  }, [categoryimage]);

  const Upload = (image) => {
    if (!image) {
      alert("Please select a photo");
      return;
    }

    const data = new FormData();
    data.append("file", categoryimage);
    data.append("upload_preset", "bloggs");
    data.append("cloud_name", "dnrels1zh");

    fetch("https://api.cloudinary.com/v1_1/dnrels1zh/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.url) {
          setPhotourl(data.url);
          localStorage.setItem("image", data.url);
          alert("Photo uploaded successfully");
        } else {
          alert("Failed to upload photo");
        }
      })
      .catch((err) => {
        console.error("Upload error:", err);
        alert("Error uploading photo");
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!categoryname ||  !photourl) {
      alert("All fields are required");
      return;
    }

    alert("Submitting Blog...");

    try {
      const formData = { categoryname, categoryimage: photourl };

      const response = await api.post("/addcategory", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        alert("category posted successfully");
        
        setCategoryName("");
        setCategoryImage("");
        navigate("/dashboard/subcategory")
      }
    } catch (error) {
      console.error("Error submitting blog:", error);
      alert("Failed to submit blog");
    }
  };

  return (
    <>
      
      <div className="blog-container container mt-4 mb-4">
        <div className="row justify-content-center m-4">
          <Link to="/getcategory">Get Category</Link>
          {/* Blog Form */}
          <div className="col-md-8 col-lg-6">
            <div className="card px-4 py-3 shadow-sm">
              <h2 className="text-center mb-3">Add a category Post</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Category Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter category title"
                    value={categoryname}
                    onChange={(e) => setCategoryName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Image </label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setCategoryImage(e.target.files[0])}
                  />
                </div>


                <button type="submit" className="btn btn-primary w-100">
                  Publish Category
                </button>
              </form>
            </div>
          </div>

          {/* Blog Images */}
          <div className="col-md-6 mt-3 d-flex flex-column align-items-center">
            <img
              src="https://www.shankara.in/cdn/shop/articles/13_Skincare_Tips_for_Dry_Skin___From_Cleansing_to_Moisturizing.jpg?v=1726823781&width=2048"
              alt="Blog"
              className="blog-image img-fluid rounded shadow"
            />
            <img
              src="https://i.pinimg.com/736x/c3/bd/24/c3bd2475cc1c3fa981550cfd34dcbbba.jpg"
              alt="Blog"
              className="blog-image img-fluid rounded shadow mt-4 d-none d-md-block"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryForm;
