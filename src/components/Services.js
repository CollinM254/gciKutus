import React from "react";
import "../Styles/Services.css";

function Services() {
  return (
    <div>
      <div class="services-container">
        <div class="service-box midweek-service" data-aos="fade-up">
          <div class="service-icon">
            <i class="fas fa-calendar-alt"></i>
          </div>
          <h2>Midweek Service</h2>
          <p style={{color: "white"}}>Every Wednesday from 05:00 PM to 07:00 PM</p>
          <button class="service-button">Welcome</button>
        </div>
        <div class="service-box sunday-service" data-aos="fade-up">
          <div class="service-icon">
            <i class="fas fa-calendar-alt"></i>
          </div>
          <h2>Sunday Service</h2>
          <p style={{color: "white"}}>Every Sunday from 09:00 AM to 01:00 PM</p>
          <button class="service-button">Welcome</button>
        </div>
      </div>
      <div class="service-description" data-aos="fade-right">
        <h3>MIDWEEK SERVICE</h3>
        <p style={{color: "white"}}>
          The midweek service at Grace Chapel International Kutus is a vibrant
          and spiritually enriching gathering that takes place every Wednesday
          at 5:00 PM. This service is designed to offer attendees a unique and
          powerful experience, bringing together the congregation for a time of
          worship, reflection, and fellowship: Worship and Praise: The midweek
          service begins with a powerful session of worship and praise. The
          church's talented worship team leads the congregation in uplifting
          songs and hymns that set the atmosphere for an encounter with the
          divine. The worship segment is characterized by heartfelt singing,
          clapping, and a sense of reverence as attendees enter into the
          presence of God.
        </p>
      </div>
      <div class="service-description" data-aos="fade-left">
        <h3>SUNDAY SERVICE</h3>
        <p style={{color: "white"}}>
          Every Sunday, our church family gathers to celebrate the Lord's Day
          and engage in a powerful, uplifting worship experience. It's a day
          when we come together to deepen our faith, strengthen our bonds, and
          rejoice in the presence of God.
        </p>
      </div>
    </div>
  );
}

export default Services;
