import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/About.css"; // CSS file for custom styles

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="about-container">
      <div data-aos="fade-right" className="about-section">
        <h2>About Us</h2>
        <p >
          Grace Chapel Intl Kutus is a Christian Church located in Kutus Town,
          Kirinyaga County. It is a branch of Grace Chapel Intl Church Kiambu
          Road. We are dedicated to preaching the true gospel and making Christ
          known in the world. Led by Rev. Antony Maina and Carol Maina, along
          with other pastors forming the Pastoral Team.
        </p>
      </div>

      <div data-aos="fade-up" className="vision-section">
        <h2>Vision</h2>
        <p>
          To have every member championing the course of Christ in our society
          by being and doing like Him.
        </p>
      </div>

      <div data-aos="fade-up" className="mission-section">
        <h2>Mission</h2>
        <p>
          To have every member championing the course of Christ in our society
          by being and doing like Him.
        </p>
      </div>

      <div data-aos="fade-up" className="culture-section">
        <h2>Culture</h2>
        <p>
          To have every member championing the course of Christ in our society
          by being and doing like Him.
        </p>
      </div>

      <div data-aos="fade-left" className="location-section">
        <h2>Location</h2>
        <p>
          We are located in Kutus Town Mjini, just a few kilometers in your
          first right turn past Magundu hardware.
        </p>
        <p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6203362818183!2d37.32198687372339!3d-0.570792135260077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1826295278dffed3%3A0x37bc124f9dcf5b05!2sGRACE%20CHAPEL%20INTERNATIONAL%20KUTUS!5e0!3m2!1sen!2ske!4v1725289455933!5m2!1sen!2ske"
            width="600"
            height="450"
            style={{border: '0'}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </p>
      </div>
    </div>
  );
};

export default About;
