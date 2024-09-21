import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/Give.css"; // We'll define some styles here

function Give() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="give-container">
      <div className="payment-box" data-aos="fade-right">
        <h3 style={{ color: "black" }}>PayPal</h3>
        <p>Click to pay via PayPal</p>
        <button>Pay with PayPal</button>
      </div>

      <div className="payment-box" data-aos="fade-left">
        <h3 style={{ color: "black" }}>Mpesa Express</h3>
        <p>Click to pay via Mpesa Express</p>
        <button>Pay with Mpesa</button>
      </div>

      <div className="payment-box" data-aos="fade-up">
        <h3 style={{ color: "black" }}>Google Pay</h3>
        <p>Click to pay via Google Pay</p>
        <button>Pay with Google Pay</button>
      </div>

      <div className="payment-box" data-aos="fade-down">
        <h3 style={{ color: "black" }}>Mobile Money (Paybill)</h3>
        <p>Pay to Paybill Number: 400222</p>
        <p>Account Number: 858270#offering or tithe or any reason</p>

        <button>Pay Now</button>
      </div>
    </div>
  );
}

export default Give;
