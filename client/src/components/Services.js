

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "./Rating";
import Slider from "./Slider";
import ContactUs from "./Contact";
import Testimonial from "./Testimonials";
import "./service.css";
import api from "../axios";

const Services = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [search, setSearch] = useState("");
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);
  
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSubcategoryClick = (category, subcategory) => {
    navigate(`/viewsmallcategory/${category.categoryname}/${subcategory.subcategoryname}`);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200;
    }
  };

  const filteredCategories = categories.filter(cat =>
    cat.categoryname.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="services-wrapper">
      <h2 className="services-title">
        Explore Home Services <span>Anytime, Anywhere</span>
      </h2>

      <div className="category-search-bar">
        <input
          className="category-search"
          type="text"
          placeholder="🔍 Search category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="scroll-buttons">
          <button onClick={scrollLeft}>⏪</button>
          <button onClick={scrollRight}>⏩</button>
        </div>
      </div>

      <div className="category-bar" ref={scrollRef}>
        {filteredCategories.map((category) => (
          <div
            key={category._id}
            className={`category-item ${selectedCategory?._id === category._id ? "active" : ""}`}
            onClick={() => handleCategoryClick(category)}
            data-tooltip={category.categoryname}
          >
            <img
              src={category.categoryimage}
              alt={category.categoryname}
              className="category-image"
            />
            <p>{category.categoryname}</p>
          </div>
        ))}
      </div>

      {selectedCategory && selectedCategory.subcategories.length > 0 && (
        <div className="subcategory-section">
          <h3 className="subcategory-title">{selectedCategory.categoryname} Subcategories</h3>
          <div className="subcategory-grid">
            {selectedCategory.subcategories.map((sub) => (
              <div
                key={sub._id}
                className="subcategory-card"
                onClick={() => handleSubcategoryClick(selectedCategory, sub)}
              >
                <div className="subcategory-badge">Popular</div>
                <img
                  src={sub.subcategoryimage}
                  alt={sub.subcategoryname}
                  className="subcategory-image"
                />
                <p>{sub.subcategoryname}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="extras">
        <Slider />
        <StarRating />
        <Testimonial />
        <ContactUs />
      </div>
    </div>
  );
};

export default Services;
