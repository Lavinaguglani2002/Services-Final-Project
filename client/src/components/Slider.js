import React from "react";
import "./Slider.css"; // ✅ CSS import

const Slider = () => {
  return (
    <div className="slider-container">
      {/* <h2 className="text-4xl font-bold mb-8 text-center text-black">
        Our <span className="text-yellow-600">Services</span>
      </h2> */}
      <div className="slider">
        <div className="slider-track">
          <div className="slide"><img src="https://salonbizsoftware.com/wp-content/uploads/2024/02/Stylists-doing-hair-at-salon-stations.jpg" alt="Image 1" /></div>
          <div className="slide"><img src="https://d1593xiyv01mio.cloudfront.net/gb/cms_content/276/e311d0f658824896b27f954b1e00f11f.jpg" alt="Image 2" /></div>
          <div className="slide"><img src="https://industry.asianhhm.com/articles/managing-delivering1.jpg" alt="GIF" /></div>
          <div className="slide"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWERpGXyj0uNJvxQeqHRI9wiFBFXAWSTi-RA&s" alt="Image 4" /></div>
          <div className="slide"><img src="https://www.servicecentreindia.com/img/fridge.webp" alt="Image 5" /></div>
          <div className="slide"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-7wG8d3xQtsvVJQiOROBfsLDNpoz8BK6eWQ&s" alt="Image 6" /></div>
          <div className="slide"><img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_600,dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1738232245414-2c017e.jpeg" alt="Image 7" /></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
