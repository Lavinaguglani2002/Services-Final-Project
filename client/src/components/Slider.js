import React, { useState } from "react";
import "./slider.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "https://salonbizsoftware.com/wp-content/uploads/2024/02/Stylists-doing-hair-at-salon-stations.jpg",
    "https://d1593xiyv01mio.cloudfront.net/gb/cms_content/276/e311d0f658824896b27f954b1e00f11f.jpg",
    "https://industry.asianhhm.com/articles/managing-delivering1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWERpGXyj0uNJvxQeqHRI9wiFBFXAWSTi-RA&s",
    "https://www.servicecentreindia.com/img/fridge.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-7wG8d3xQtsvVJQiOROBfsLDNpoz8BK6eWQ&s",
    "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_600,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1738232245414-2c017e.jpeg"
  ];

  const slidesToShow = 4; // Number of images to show at once

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + slidesToShow) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - slidesToShow + slides.length) % slides.length);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`,
          }}
        >
          {slides.map((src, index) => (
            <div className="slide" key={index}>
              <img src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="slider-buttons">
          <button className="prev" onClick={handlePrev}>←</button>
          <button className="next" onClick={handleNext}>→</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
