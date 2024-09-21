import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/ministries.css";

const CommitteesMinistry = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="ministries-container">
      <h2>Committees Ministry</h2>
      <div className="committee-boxes">
        <div className="committee-box" data-aos="fade-up">
          <h3>Finance Committee</h3>
          <p>
            Responsible for church budgeting and finances. The finance committee
            comprises of all church members who pursue or are professionals in
            the finance careers
          </p>
        </div>
        <div className="committee-box" data-aos="fade-right">
          <h3>Health Committee</h3>
          <p>
            offer health education programs and resources, sharing knowledge and
            insights to help our members make informed and healthy choices.
            organize health screenings and check-ups to ensure that our church
            members have access to preventive healthcare.
          </p>
        </div>
        <div className="committee-box" data-aos="fade-left">
          <h3>Outreach Committee</h3>
          <p>
            Planning and executing community outreach programs. We host outreach
            meetings and events that encourage spiritual growth and fellowship
            among our church members and newcomers.
          </p>
        </div>
        <div className="committee-box" data-aos="fade-up">
          <h3>Gifts and Talents Committee</h3>
          <p>
            The gifts and talent committee is responsible for organising events
            that aim at identifying various talents and gifts among our church
            members
          </p>
        </div>
        <div className="committee-box" data-aos="fade-right">
          <h3>Funs and Forms Committee</h3>
          <p>
            The funs and forms committee is responsible for oranising student's
            connects, fun days, hikes, games, coffee chats, bonfires, goat
            eating
          </p>
        </div>
        <div className="committee-box" data-aos="fade-left">
          <h3>Development Committee</h3>
          <p>
            The development committee is reposnible for genaral church repair,
            rennovations, proposing any church development project and actualing
            our dream cathedral
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommitteesMinistry;
