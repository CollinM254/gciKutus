import React, { useState } from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import '../Styles/ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      <div className={`chatbot-popup ${isOpen ? 'open' : ''}`}>
        <a href="https://wa.me/254741210060" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>
          <FaWhatsapp /> WhatsApp
        </a>
        <a href="tel:+254741210060" style={{color: "white"}}>
          <FaPhone /> Call
        </a>
        <a href="mailto:cmwenda20@gmail.com" style={{color: "white"}}>
          <FaEnvelope style={{color: "white"}}/> Send Enquiry
        </a>
        <a href="https://calendly.com/cmwenda20" style={{color: "white"}}>
          <FaCalendarAlt /> Book Appointment
        </a>
      </div>
      <div className="chatbot-button" onClick={togglePopup}>
        <div className="chatbot-icon">
          <span>💬</span>
        </div>
        <span className="chatbot-text">Talk to us</span>
      </div>
    </div>
  );
};

export default ChatBot;
