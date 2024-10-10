import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/Give.css"; // We'll define some styles here
function Give() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handlePayPalDonate = () => {
    // Redirect to your PayPal.me donation link
    window.open("https://www.paypal.com/donate/?hosted_button_id=YD7KAW6U7TZ46", "_blank");
  };

  return (
    <div className="give-container">
      <div className="payment-box" data-aos="fade-right">
        <h3 style={{ color: "black" }}>PayPal</h3>
        <p style={{ color: "black" }}>Click to pay via PayPal</p>
        <button onClick={handlePayPalDonate}>Pay with PayPal</button>
      </div>

      <div className="payment-box" data-aos="fade-left">
        <h3 style={{ color: "black" }}>Mpesa Express</h3>
        <p style={{ color: "black" }}>Click to pay via Mpesa Express</p>
        <Link style={{textDecoration: "none"}} to={"/mpesa"}><button>Pay with Mpesa</button></Link>
      </div>

     

      <div className="payment-box" data-aos="fade-down">
        <h3 style={{ color: "black" }}>Mobile Money (Paybill)</h3>
        <p style={{ color: "black" }}>Pay to Paybill Number: 400222</p>
        <p style={{ color: "black" }}>Account Number: 858270#offering or tithe or any reason</p>
        <button>Pay Now </button>
      </div>
    </div>
  );
}

export default Give;

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "../Styles/Give.css"; // We'll define some styles here

// function Give() {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <div className="give-container">
//       <div className="payment-box" data-aos="fade-right">
//         <h3 style={{ color: "black" }}>PayPal</h3>
//         <p>Click to pay via PayPal</p>
//         <button>Pay with PayPal</button>
//       </div>

//       <div className="payment-box" data-aos="fade-left">
//         <h3 style={{ color: "black" }}>Mpesa Express</h3>
//         <p>Click to pay via Mpesa Express</p>
//         <button>Pay with Mpesa</button>
//       </div>

//       <div className="payment-box" data-aos="fade-up">
//         <h3 style={{ color: "black" }}>Google Pay</h3>
//         <p>Click to pay via Google Pay</p>
//         <button>Pay with Google Pay</button>
//       </div>

//       <div className="payment-box" data-aos="fade-down">
//         <h3 style={{ color: "black" }}>Mobile Money (Paybill)</h3>
//         <p>Pay to Paybill Number: 400222</p>
//         <p>Account Number: 858270#offering or tithe or any reason</p>

//         <button>Pay Now</button>
//       </div>
//     </div>
//   );
// }

// export default Give;
