import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/ministries.css";

const DepartmentalMinistries = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []); // This ensures AOS runs when this component is mounted

  return (
    <div className="ministries-container">
      <h2>Departmental Ministries</h2>
      <div className="department-boxes">
        <div className="department-box" data-aos="fade-up">
          <h3>Worship Team</h3>
          <p>
            entrusted with the sacred task of leading our congregation in praise
            and worship, creating a divine atmosphere, and organizing
            transformative worship experiences. We believe in the power of music
            and worship to inspire hearts and elevate spirits.
          </p>
        </div>
        <div className="department-box" data-aos="fade-right">
          <h3>Ushering Department</h3>
          <p>
            responsible for general church arrangement and order. It is also
            responsible for welcoming huests to the church, giving directions to
            the visitors
          </p>
        </div>
        <div className="department-box" data-aos="fade-left">
          <h3>Media Team</h3>
          <p>
            Handling all media-related tasks during the service. They are the
            creative architects behind our church's online presence,
            meticulously curating our website, social media accounts, and
            crafting captivating photos and posters
          </p>
        </div>
        <div className="department-box" data-aos="fade-left">
          <h3>Technical Team</h3>
          <p>
            Technical Department plays a vital role in ensuring that worship
            services and events run smoothly through connecting and managing
            musical instruments.
          </p>
        </div>
        <div className="department-box" data-aos="fade-left">
          <h3>Hospitality Department</h3>
          <p>
            The hospitality department is responsible for organizing food and
            tea for the services, taking care of the church cooking items,
            ensuring that the church utensils are clean and are in order.{" "}
          </p>
        </div>
        <div className="department-box" data-aos="fade-left">
          <h3>Protocol Department</h3>
          <p>
            responsible for the order in the pastor's office, serves tea and
            food to the pastors, ensures the pastors are well catered for during
            the service. It also ensures cleanliness in the pastor's office
          </p>
        </div>
        <div className="department-box" data-aos="fade-left">
          <h3>Sunday School Department</h3>
          <p>
            Sunday School department organizes vocational bible school,
            organizes order of church tents, order of children chairs, organises
            children dedication. It also organises teens meeting and forum
          </p>
        </div>
        <div className="department-box" data-aos="fade-left">
          <h3>ICT Department</h3>
          <p>
            We're here to ensure smooth communication and support various
            tech-related needs. Together, we harness the power of technology to
            enhance our worship and fellowship.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DepartmentalMinistries;
