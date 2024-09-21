import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/Contact.css";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-map" data-aos="fade-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7979.240665814159!2d37.324562!3d-0.570797!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1826295278dffed3%3A0x37bc124f9dcf5b05!2sGRACE%20CHAPEL%20INTERNATIONAL%20KUTUS!5e0!3m2!1sen!2ske!4v1725357288203!5m2!1sen!2ske"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>

        <div className="contact-form" data-aos="fade-left">
          <form>
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      <div className="contact-info-box" data-aos="fade-up">
        <p>
          <strong>Phone:</strong> +254 707869120
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:kutusgci@gmail.com">kutusgci@gmail.com</a>
        </p>
        <p>
          <strong>Location:</strong> We are located in Kutus Town Mjini
          .....just few kilometers in your first right turn past Magundu
          hardware Google Maps GRACE CHAPEL INTERNATIONAL is located at C8HF+PR,
          Kutus, Kenya. It has a 5 star rating on Google Maps.
        </p>
      </div>
    </div>
  );
}

export default Contact;
