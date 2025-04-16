import React from "react";
import { Star, People } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const StarRating = () => {
  return (
    <div className="d-flex justify-content-center gap-5 py-4 bg-white">
      {/* Star Rating */}
      <div className="d-flex flex-column align-items-center">
        <Star className="text-dark" size={30} />
        <span className="fw-bold fs-4 mt-1">4.8</span>
        <span className="text-secondary fs-6">Service Rating</span>
      </div>

      {/* Customers Count */}
      <div className="d-flex flex-column align-items-center">
        <People className="text-dark" size={30} />
        <span className="fw-bold fs-4 mt-1">12M+</span>
        <span className="text-secondary fs-6">Customers Globally</span>
      </div>
    </div>
  );
};

export default StarRating;
