import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
import "../Styles/Pastoral.css";
import ChatBot from "./ChatBot";


function PastoralTeam() {
  AOS.init(); // Initialize AOS

  const pastors = [
    {
      name: "Rev Antony Maina",
      rank: "Senior Pastor",
      image: "https://res.cloudinary.com/dtszhuotx/image/upload/v1725350254/revi_l3ef3q.jpg",
      facebook: "https://www.facebook.com/anthony.maina.397",
      twitter: "",
      instagram: "",
      scheduleLink: "https://calendly.com/cmwenda20",
      aosAnimation: "fade-right", // Animation style
    },
    {
      name: "Pastor Caroline Maina",
      rank: "Associate Pastor",
      image: "https://res.cloudinary.com/dtszhuotx/image/upload/v1725353266/carol_yp8us0.jpg",
      facebook: "https://www.facebook.com/search/top?q=karolyn%20favoured",
      twitter: "",
      instagram: "",
      scheduleLink: "https://calendly.com/cmwenda20",
      aosAnimation: "fade-left", // Animation style
    },
    {
      name: "Pastor Jackson Muhoti",
      rank: "Associate Pastor",
      image: "https://res.cloudinary.com/dtszhuotx/image/upload/v1725353265/jack_angiha.jpg",
      facebook: "https://www.facebook.com/jackson.wamwitha",
      twitter: "",
      instagram: "",
      scheduleLink: "https://calendly.com/cmwenda20",
      aosAnimation: "fade-down", // Animation style
    },
    {
      name: "Pastor Faith Muhoti",
      rank: "Associate Pastor",
      image: "https://res.cloudinary.com/dtszhuotx/image/upload/v1725353270/faith_qu5ovo.jpg",
      facebook: "https://www.facebook.com/profile.php?id=100092272893231",
      twitter: "",
      instagram: "",
      scheduleLink: "https://calendly.com/cmwenda20",
      aosAnimation: "fade-right", // Animation style
    },
    {
      name: "Pastor Gabriel Macharia",
      rank: "Associate Pastor",
      image: "https://res.cloudinary.com/dtszhuotx/image/upload/v1725353313/masha_ondkeq.jpg",
      facebook: "https://www.facebook.com/mac.mac.9883",
      twitter: "",
      instagram: "",
      scheduleLink: "https://calendly.com/cmwenda20",
      aosAnimation: "fade-left", // Animation style
    },
    {
      name: "Pastor Balam Chomba",
      rank: "Associate Pastor",
      image: "https://res.cloudinary.com/dtszhuotx/image/upload/v1726328441/balam_1_r0fstw.jpg",
      facebook: "https://www.facebook.com/profile.php?id=100080307376002",
      twitter: "",
      instagram: "",
      scheduleLink: "https://calendly.com/cmwenda20",
      aosAnimation: "fade-left", // Animation style
    },
    {
      name: "Pastor Tabitha Chomba",
      rank: "Associate Pastor",
      image: "https://res.cloudinary.com/dtszhuotx/image/upload/v1726328454/balam_2_kk5246.jpg",
      facebook: "https://www.facebook.com/tabitha.kubai",
      twitter: "",
      instagram: "",
      scheduleLink: "https://calendly.com/cmwenda20",
      aosAnimation: "fade-left", // Animation style
    },
  ];

  return (
    <div className="pastoral-team">
      <h2>Our Pastoral Team</h2>
      <div className="pastoral-cards">
        {pastors.map((pastor, index) => (
          <div
            className="pastor-card"
            key={index}
            data-aos={pastor.aosAnimation} // Apply AOS animation
          >
            <img src={pastor.image} alt={pastor.name} className="pastor-image" />
            <h3>{pastor.name}</h3>
            <p className="pastor-rank">{pastor.rank}</p>
            <div className="social-icons">
              <a href={pastor.facebook}><FaFacebookF /></a>
              <a href={pastor.twitter}><FaTwitter /></a>
              <a href={pastor.instagram}><FaInstagram /></a>
            </div>
            <Link to={pastor.scheduleLink} className="schedule-link">
              Schedule a Meeting <AiOutlineArrowRight />
            </Link>
          </div>
        ))}
      </div>
      <ChatBot />
    </div>
  );
}

export default PastoralTeam;
