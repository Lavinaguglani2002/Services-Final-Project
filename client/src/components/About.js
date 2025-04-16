// import React from "react";
// const AboutUs = () => {
//   return (
//     <div
//       className="container py-5"
//       style={{
//         minHeight: "100vh",
//         backgroundColor: "#f5f6fa",
//         fontFamily: "'Segoe UI', sans-serif",
//       }}
//     >
//       <div className="bg-white rounded-4 shadow p-5 animate__animated animate__fadeIn" style={{ maxWidth: "1200px", margin: "auto" }}>
//         <div className="row align-items-center g-4">
//           {/* Left: Image */}
//           <div className="col-md-6 text-center animate__animated animate__fadeInLeft">
//             <img
//               src="/services-gif.gif" // replace with your gif
//               alt="Services"
//               className="img-fluid rounded-4 shadow-sm"
//               style={{ maxHeight: "360px", objectFit: "cover" }}
//             />
//           </div>

//           {/* Right: Content */}
//           <div className="col-md-6 animate__animated animate__fadeInRight">
//             <h2 className="fw-bold text-dark mb-3">Welcome to <span style={{ color: "#0d6efd" }}>Your Lifestyle Hub</span></h2>
//             <p className="text-muted" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
//               We offer premium lifestyle services that make you feel your best —
//               inside and out. Our expert professionals ensure high-quality care in
//               beauty, wellness, and health.
//             </p>

//             <div className="mt-4">
//               <h5 className="fw-semibold mb-3 text-secondary">Our Services:</h5>
//               <ul className="list-unstyled text-start" style={{ fontSize: "1rem" }}>
//                 <li>💇‍♀️ <strong>Salon:</strong> Hair, grooming, beauty & glow-up</li>
//                 <li>🏥 <strong>Healthcare:</strong> Checkups, wellness care, consultations</li>
//                 <li>💪 <strong>Fitness:</strong> Gym, yoga, body transformation plans</li>
//                 <li>💆 <strong>Spa:</strong> Massage & relaxation therapy</li>
//               </ul>
//             </div>

//             <p className="mt-4 text-muted">
//               At <strong>Your Lifestyle Hub</strong>, we combine elegance, care, and
//               results. Whether you're looking to unwind or level up your lifestyle —
//               you're in the right place.
//             </p>

//             <div className="mt-4">
//               <button className="btn btn-primary px-4 py-2 rounded-pill shadow">
//                 Book Your Visit
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;



import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div
      className="container py-5"
      style={{ backgroundColor: "#fff", color: "#2d2d2d" }}
    >
      {/* Heading */}
      <h1
        className="text-center fw-bold mb-5 animate__animated animate__fadeInDown"
        style={{ fontSize: "3rem", color: "#1f1f1f", letterSpacing: "1px" }}
      >
        About Us
      </h1>

      {/* Content Box */}
      <div
        className="row align-items-center justify-content-center p-4 rounded-4 shadow-lg animate__animated animate__fadeInUp"
        style={{
          background: "#fefefe",
          boxShadow: "0 12px 35px rgba(0, 0, 0, 0.07)",
        }}
      >
        {/* Left: Image */}
        <div className="col-lg-6 text-center mb-4 mb-lg-0">
          <img
            src="https://static.wixstatic.com/media/b3dcef_118c67855c6c49a4ac9063504b19a677~mv2.jpg/v1/fill/w_980,h_528,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b3dcef_118c67855c6c49a4ac9063504b19a677~mv2.jpg" // Replace with your GIF path
            alt="Our Services"
            className="img-fluid rounded-4"
            style={{
              maxWidth: "90%",
              maxHeight: "400px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Right: Text */}
        <div className="col-lg-6 px-4">
          <h3 className="fw-semibold mb-3 text-primary">We Provide More Than Just Services</h3>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
            Welcome to <strong>Your Wellness World</strong> – a place where your <span className="text-success">style</span>, <span className="text-danger">health</span>, and <span className="text-warning">fitness</span> meet. Whether you want a stunning makeover, a relaxing spa session, or a fit body — we’ve got your back!
          </p>

          <ul className="list-unstyled mt-3" style={{ fontSize: "1rem" }}>
            <li>💇 <strong>Salon:</strong> Hair styling, grooming & skin care</li>
            <li>🏥 <strong>Healthcare:</strong> Checkups, wellness support, care</li>
            <li>💪 <strong>Fitness:</strong> Gym, yoga, and transformation plans</li>
            <li>💆 <strong>Spa:</strong> Relaxation, massage, and therapy</li>
          </ul>

          <p className="mt-4 text-muted">
            Our mission is simple: to help you look better, feel better, and live better. With expert professionals, premium services, and a warm environment, you’re in trusted hands.
          </p>

<Link to="/contact">
          <button className="btn btn-outline-primary mt-3 px-4 py-2 rounded-pill shadow-sm">
            Contact Us
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
