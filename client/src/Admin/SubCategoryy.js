// // import React, { useEffect, useState } from "react";
// // import "./BlogsForm.css";
// // import axios from "axios";
// // import { useNavigate, useParams } from "react-router-dom";

// // const SubCategoryForm = () => {
// //   const { categoryId } = useParams();
// //   const navigate = useNavigate();

// //   const [categories, setCategories] = useState([]);
// //   const [selectedCategory, setSelectedCategory] = useState(categoryId || ""); // ✅ Store selected category ID
// //   const [name, setName] = useState("");
// //   const [image, setImage] = useState("");
// //   const [photourl, setPhotourl] = useState("");
// //   const [description, setDescription] = useState("");

// //   // ✅ Fetch Categories
// //   useEffect(() => {
// //     axios.get("http://localhost:8000/categories")
// //       .then((res) => setCategories(res.data))
// //       .catch((err) => console.error("Error fetching categories:", err));
// //   }, []);

// //   // ✅ Upload Image
// //   useEffect(() => {
// //     if (image) Upload(image);
// //   }, [image]);

// //   const Upload = (image) => {
// //     if (!image) {
// //       alert("Please select a photo");
// //       return;
// //     }

// //     const data = new FormData();
// //     data.append("file", image);
// //     data.append("upload_preset", "bloggs");
// //     data.append("cloud_name", "dnrels1zh");

// //     fetch("https://api.cloudinary.com/v1_1/dnrels1zh/image/upload", {
// //       method: "POST",
// //       body: data,
// //     })
// //       .then((res) => res.json())
// //       .then((data) => {
// //         if (data.url) {
// //           setPhotourl(data.url);
// //           localStorage.setItem("image", data.url);
// //           alert("Photo uploaded successfully");
// //         } else {
// //           alert("Failed to upload photo");
// //         }
// //       })
// //       .catch((err) => {
// //         console.error("Upload error:", err);
// //         alert("Error uploading photo");
// //       });
// //   };

// //   // ✅ Handle Form Submit
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!selectedCategory || !name || !description || !photourl) {
// //       alert("All fields are required");
// //       return;
// //     }

// //     alert("Submitting Subcategory...");

// //     try {
// //       const formData = {
// //         name,
// //         image: photourl,
// //         description
// //       };

// //       console.log("Submitting Data:", formData);

// //       const response = await axios.post(`http://localhost:8000/addsubcategory/${categoryId}`, formData, {
// //         headers: { "Content-Type": "application/json" },
// //       });

// //       if (response.status === 201) {
// //         alert("Subcategory posted successfully");
// //         setName("");
// //         setImage("");
// //         setDescription("");
// //         navigate("/smallcategory");
// //       }
// //     } catch (error) {
// //       console.error("Error submitting subcategory:", error);
// //       alert("Failed to submit subcategory");
// //     }
// //   };

// //   return (
// //     <div className="blog-container container mt-4 mb-4">
// //       <div className="row justify-content-center m-4">
// //         <div className="col-md-8 col-lg-6">
// //           <div className="card px-4 py-3 shadow-sm">
// //             <h2 className="text-center mb-3">Add a Subcategory Post</h2>
// //             <form onSubmit={handleSubmit}>
// //               {/* ✅ Category Selection */}
// //               <div className="mb-3">
// //                 <label className="form-label">Select Category</label>
// //                 <select
// //                   className="form-control"
// //                   value={selectedCategory}
// //                   onChange={(e) => setSelectedCategory(e.target.value)}
// //                   required
// //                 >
// //                   <option value="">Select Category</option>
// //                   {categories.map((cat) => (
// //                     <option key={cat._id} value={cat._id}>
// //                       {cat.name}
// //                     </option>
// //                   ))}
// //                 </select>
// //               </div>

// //               {/* ✅ Subcategory Title */}
// //               <div className="mb-3">
// //                 <label className="form-label">Subcategory Title</label>
// //                 <input
// //                   type="text"
// //                   className="form-control"
// //                   placeholder="Enter subcategory title"
// //                   value={name}
// //                   onChange={(e) => setName(e.target.value)}
// //                   required
// //                 />
// //               </div>

// //               {/* ✅ Image Upload */}
// //               <div className="mb-3">
// //                 <label className="form-label">Image</label>
// //                 <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])} />
// //               </div>

// //               {/* ✅ Description */}
// //               <div className="mb-3">
// //                 <label className="form-label">Category Description</label>
// //                 <textarea
// //                   className="form-control"
// //                   rows="5"
// //                   placeholder="Write your subcategory description..."
// //                   value={description}
// //                   onChange={(e) => setDescription(e.target.value)}
// //                   required
// //                 ></textarea>
// //               </div>

// //               {/* ✅ Submit Button */}
// //               <button type="submit" className="btn btn-primary w-100">
// //                 Publish Subcategory
// //               </button>
// //             </form>
// //           </div>
// //         </div>

// //         {/* Blog Images */}
// //         <div className="col-md-6 mt-3 d-flex flex-column align-items-center">
// //           <img
// //             src="https://elearningindustry.com/wp-content/uploads/2013/09/how-to-use-blogs-in-the-classroom.jpg"
// //             alt="Blog"
// //             className="blog-image img-fluid rounded shadow"
// //           />
// //           <img
// //             src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg"
// //             alt="Blog"
// //             className="blog-image img-fluid rounded shadow mt-4 d-none d-md-block"
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SubCategoryForm;




















// // // import React, { useEffect, useState } from 'react';

// // // const  SubCategoryy = () => {
// // //   const [categories, setCategories] = useState([]); // State for storing categories
// // //   const [categorytitle, setCategoryTitle] = useState(""); // Selected category
// // //   const [subcategorytitle, setSubcategoryTitle] = useState(""); // Subcategory name
// // //   const [photo, setPhoto] = useState("");
// // //   const [photourl, setPhotourl] = useState("");
// // //   const [content, setContent] = useState("");

// // //   // Fetch categories on component mount
// // //   useEffect(() => {
// // //     fetchCategories();
// // //   }, []);

// // //   const fetchCategories = async () => {
// // //     try {
// // //       const response = await fetch("http://localhost:8000/categories");
// // //       const data = await response.json();
// // //       setCategories(data); // Store categories in state
// // //     } catch (error) {
// // //       console.error("Error fetching categories:", error);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     console.log("Selected Photo:", photo);
// // //     if (photo) {
// // //       Upload(photo);
// // //     }
// // //   }, [photo]);

// // //   const Upload = async (photo) => {
// // //     if (!photo) {
// // //       alert("Please select a photo");
// // //       return;
// // //     }
// // //     const data = new FormData();
// // //     data.append("file", photo);
// // //     data.append("upload_preset", "bloggs");
// // //     data.append("cloud_name", "dnrels1zh");

// // //     fetch("https://api.cloudinary.com/v1_1/dnrels1zh/image/upload", {

// // //     method: "POST",
// // //       body: data,
// // //     })
// // //       .then((res) => res.json())
// // //       .then((data) => {
// // //         if (data.url) {
// // //           setPhotourl(data.url);
// // //           localStorage.setItem("photo", data.url);
// // //         } else {
// // //           alert("Failed to upload photo");
// // //         }
// // //       })
// // //       .catch((err) => {
// // //         console.error("Upload error:", err);
// // //         alert("Error uploading photo");
// // //       });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     console.log("categorytitle:", categorytitle);
// // //     console.log("subcategorytitle:", subcategorytitle);
// // //     console.log("photourl:", photourl);

// // //     if (!categorytitle || !subcategorytitle || !photourl || !content) {
// // //       alert("All fields are required");
// // //       return;
// // //     }
// // //     alert("Submitting Sub-Category...");
// // //     try {
// // //       const response = await fetch("http://localhost:8000/addsubcategory", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ 
// // //           name: categorytitle, // ✅ Ab categoryname sahi pass ho raha hai
// // //           subcategoryname: subcategorytitle, 
// // //           subcategoryimage: photourl, 
// // //           subcategorydescription: content
// // //         }),
// // //       });
      

// // //       if (response.status === 201) {
// // //         alert("Sub-Category added successfully");
// // //         setCategoryTitle("");
// // //         setSubcategoryTitle("");
// // //         setPhoto("");
// // //         setPhotourl("");
// // //         setContent("");
// // //       }
// // //     } catch (error) {
// // //       console.error("Error submitting sub-category:", error);
// // //       alert("Failed to submit sub-category");
// // //     }
// // //   };

// // //   return (
// // //     <div className="container mt-5 mb-4">
// // //       <div className="row justify-content-center m-4">
// // //         <div className="col-lg-6">
// // //           <div className="card px-4 py-3 shadow-sm">
// // //             <h2 className="text-center mb-3">Add Sub-Category</h2>
// // //             <form onSubmit={handleSubmit}>
              
// // //               {/* Dropdown for selecting category */}
// // //               <div className="mb-3">
// // //                 <label className="form-label">Select Category</label>
// // //                 <select 
// // //                   className="form-control" 
// // //                   value={categorytitle} 
// // //                   onChange={(e) => setCategoryTitle(e.target.value)}
// // //                   required
// // //                 >
// // //                   <option value="">-- Select a Category --</option>
// // //                   {categories.map((cat) => (
// // //                     <option key={cat._id} value={cat.name}> 
// // //                     {cat.name}
// // //                   </option>
                  
// // //                   ))}
// // //                 </select>
// // //               </div>

// // //               {/* Subcategory Name */}
// // //               <div className="mb-3">
// // //                 <label className="form-label">Sub-Category Name</label>
// // //                 <input
// // //                   type="text"
// // //                   className="form-control"
// // //                   placeholder="Enter sub-category"
// // //                   value={subcategorytitle}
// // //                   onChange={(e) => setSubcategoryTitle(e.target.value)}
// // //                   required
// // //                 />
// // //               </div>

// // //               {/* Upload Image */}
// // //               <div className="mb-3">
// // //                 <label className="form-label">Image</label>
// // //                 <input
// // //                   type="file"
// // //                   className="form-control"
// // //                   onChange={(e) => setPhoto(e.target.files[0])}
// // //                 />
// // //               </div>

// // //               {/* Subcategory Description */}
// // //               <div className="mb-3">
// // //                 <label className="form-label">Sub-Category Description</label>
// // //                 <textarea
// // //                   className="form-control"
// // //                   rows="5"
// // //                   placeholder="Write your description..."
// // //                   value={content}
// // //                   onChange={(e) => setContent(e.target.value)}
// // //                   required
// // //                 ></textarea>
// // //               </div>

// // //               <button type="submit" className="btn btn-primary w-100">
// // //                 Add Sub-Category
// // //               </button>
// // //             </form>
// // //           </div>
// // //         </div>

// // //         {/* Blog Images */}
// // //         <div className="col-lg-6 mt-3 d-flex flex-column align-items-center">
// // //           <img
// // //             src="https://elearningindustry.com/wp-content/uploads/2013/09/how-to-use-blogs-in-the-classroom.jpg"
// // //             alt="Blog"
// // //             className="img-fluid rounded shadow"
// // //           />
// // //           <img
// // //             src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg"
// // //             alt="Blog"
// // //             className="img-fluid rounded shadow mt-4"
// // //           />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SubCategoryy;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const SubCategoryForm = () => {
//   const {categoryId}=useParams()
//   const navigate = useNavigate();
  
//   const [categories, setCategories] = useState([]); // ✅ Categories List
//   const [selectedCategory, setSelectedCategory] = useState(""); // ✅ Selected Category

//   const [name, setName] = useState("");
//   const [image, setImage] = useState("");
//   const [photourl, setPhotourl] = useState("");
//   const [description, setDescription] = useState("");

//   // ✅ Fetch Categories from API
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get("http://localhost:8000/categories");
//         setCategories(response.data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   // ✅ Upload Image to Cloudinary
//   const uploadImage = (file) => {
//     if (!file) {
//       alert("Please select an image");
//       return;
//     }

//     const data = new FormData();
//     data.append("file", file);
//     data.append("upload_preset", "bloggs");
//     data.append("cloud_name", "dnrels1zh");

//     fetch("https://api.cloudinary.com/v1_1/dnrels1zh/image/upload", {
//       method: "POST",
//       body: data,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.url) {
//           setPhotourl(data.url);
//           alert("Image uploaded successfully!");
//         } else {
//           alert("Image upload failed!");
//         }
//       })
//       .catch((err) => console.error("Image upload error:", err));
//   };

//   // ✅ Handle Image Selection
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//     uploadImage(file);
//   };

//   // ✅ Handle Form Submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!selectedCategory || !name || !description || !photourl) {
//       alert("All fields are required!");
//       return;
//     }

//     try {
//       const formData = { name, image: photourl, description };

//       const response = await axios.post(
//         `http://localhost:8000/addsubcategory/${selectedCategory}`,
//         formData,
//         { headers: { "Content-Type": "application/json" } }
//       );

//       if (response.status === 201) {
//         alert("Subcategory added successfully!");
//         setName("");
//         setImage("");
//         setPhotourl("");
//         setDescription("");
//         navigate("/smallcategory");
//       }
//     } catch (error) {
//       console.error("Error submitting subcategory:", error);
//       alert("Failed to submit subcategory!");
//     }
//   };

//   return (
    
//     <div className="container mt-4 mb-4">
//       <div className="row justify-content-center">
//         <div className="col-md-8 col-lg-6">
//           <div className="card px-4 py-3 shadow-sm">
//             <h2 className="text-center mb-3">Add a Subcategory</h2>
//             <form onSubmit={handleSubmit}>

//               {/* ✅ Select Category */}
//               <div className="mb-3">
//                 <label className="form-label">Select Category</label>
//                 <select
//                   className="form-control"
//                   value={selectedCategory}
//                   onChange={(e) => setSelectedCategory(e.target.value)}
//                   required
//                 >
//                   <option value="">Choose a category</option>
//                   {categories.map((category) => (
//                     <option key={category._id} value={category._id}>
//                       {category.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* ✅ Subcategory Title */}
//               <div className="mb-3">
//                 <label className="form-label">Subcategory Title</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Enter subcategory title"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//               </div>

//               {/* ✅ Image Upload */}
//               <div className="mb-3">
//                 <label className="form-label">Image</label>
//                 <input type="file" className="form-control" onChange={handleImageChange} />
//               </div>

//               {/* ✅ Description */}
//               <div className="mb-3">
//                 <label className="form-label">Description</label>
//                 <textarea
//                   className="form-control"
//                   rows="5"
//                   placeholder="Write description..."
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   required
//                 ></textarea>
//               </div>

//               {/* ✅ Submit Button */}
//               <button type="submit" className="btn btn-primary w-100">
//                 Publish Subcategory
//               </button>
//               <Link to={`/getsubcategory/${categoryId}`}>View Subcategories</Link> 

//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubCategoryForm;




import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import api from '../axios';
const SubCategories = () => {
  const navigate=useNavigate()
  const [categories, setCategories] = useState([]); // State for storing categories
  const [categorytitle, setCategoryTitle] = useState(""); // Selected category
  const [subcategorytitle, setSubcategoryTitle] = useState(""); // Subcategory name
  const [photo, setPhoto] = useState("");
  const [photourl, setPhotourl] = useState("");
  const [content, setContent] = useState("");

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await api.get("/categories");  // Using axios to send GET request
      setCategories(response.data);  // Store categories in state
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
    

};

  useEffect(() => {
    console.log("Selected Photo:", photo);
    if (photo) {
      Upload(photo);
    }
  }, [photo]);

  const Upload = async (photo) => {
    if (!photo) {
      alert("Please select a photo");
      return;
    }
    const data = new FormData();
    data.append("file", photo);
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
          localStorage.setItem("photo", data.url);
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
    console.log("categorytitle:", categorytitle);
    console.log("subcategorytitle:", subcategorytitle);
    console.log("photourl:", photourl);

    if (!categorytitle || !subcategorytitle || !photourl || !content) {
      alert("All fields are required");
      return;
    }
    alert("Submitting Sub-Category...");

    
    try {
      const response = await api.post("/insertsubcategory", {
        categoryname: categorytitle,
        subcategoryname: subcategorytitle,
        subcategoryimage: photourl,
        content: content
      });
    

      if (response.status === 201) {
        alert("Sub-Category added successfully");
        navigate("/dashboard/smallsubcategory")
        setCategoryTitle("");
        setSubcategoryTitle("");
        setPhoto("");
        setPhotourl("");
        setContent("");
      }
    } catch (error) {
      console.error("Error submitting sub-category:", error);
      alert("Failed to submit sub-category");
    }
  };

  return (
    <div className="container mt-5 mb-4">
      <div className="row justify-content-center m-4">
      <Link to="/dashboard/getsmallsubcategory">Get SubCategory</Link>

        <div className="col-lg-6">
          <div className="card px-4 py-3 shadow-sm">
            <h2 className="text-center mb-3">Add Sub-Category</h2>
            <form onSubmit={handleSubmit}>
              
              {/* Dropdown for selecting category */}
              <div className="mb-3">
                <label className="form-label">Select Category</label>
                <select 
                  className="form-control" 
                  value={categorytitle} 
                  onChange={(e) => setCategoryTitle(e.target.value)}
                  required
                >
                  <option value="">-- Select a Category --</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat.categoryname}> 
                    {cat.categoryname}
                  </option>
                  
                  ))}
                </select>
              </div>

              {/* Subcategory Name */}
              <div className="mb-3">
                <label className="form-label">Sub-Category Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter sub-category"
                  value={subcategorytitle}
                  onChange={(e) => setSubcategoryTitle(e.target.value)}
                  required
                />
              </div>

              {/* Upload Image */}
              <div className="mb-3">
                <label className="form-label">Image</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
              </div>

              {/* Subcategory Description */}
              <div className="mb-3">
                <label className="form-label">Sub-Category Description</label>
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Write your description..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Add Sub-Category
              </button>
            </form>
          </div>
        </div>

        {/* Blog Images */}
        <div className="col-lg-6 mt-3 d-flex flex-column align-items-center">
          <img
            src="https://elearningindustry.com/wp-content/uploads/2013/09/how-to-use-blogs-in-the-classroom.jpg"
            alt="Blog"
            className="img-fluid rounded shadow"
          />
          <img
            src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg"
            alt="Blog"
            className="img-fluid rounded shadow mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default SubCategories;


