import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/ministries.css";

const FamiliesMinistry = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="ministries-container">
      <h2>Families Ministry</h2>
      <div className="family-boxes">
        <div className="family-box" data-aos="fade-up">
          <h3>Overcomers Family</h3>
          <p>
            The overcomers family comprises of all church members that live on
            the left side along kutus-kagio road. It is headed by Rev Antony
            Maina (Senior Pastor)
          </p>
        </div>
        <div className="family-box" data-aos="fade-right">
          <h3>Conquerers Family</h3>
          <p>
            The Conquerers family comprises of all church members that live on
            the right side along kutus-kagio road. It is headed by Pastor
            Jackson Muhoti
          </p>
        </div>
        <div className="family-box" data-aos="fade-left">
          <h3>Favoured Family</h3>
          <p>
            Favoured family comprises of all church members who live in kutus
            town near the market all the way to County Government Offices. It is
            headed by Pastor Faith Jack
          </p>
        </div>
        <div className="family-box" data-aos="fade-up">
          <h3>Prosperous Family</h3>
          <p>
            Prospherous family comprises of all church members who live in
            Kutus-Mjini around the church. It is headed by Pastor Balam and
            Pastor Tabitha
          </p>
        </div>
        <div className="family-box" data-aos="fade-right">
          <h3>Gracious Family</h3>
          <p>
            Gracious family is comprised of all church members who live on the
            university way, on the left along kutus-kerugoya road. It is led by
            Pastor Macharia Gabriel
          </p>
        </div>
        <div className="family-box" data-aos="fade-left">
          <h3>Swap Family</h3>
          <p>
            Swap family comprises of all graduates who are alumni of GCI-Kutus.
            They are yet to get married or family. The family is headed by
            Pastor Gabriel Macharia
          </p>
        </div>
        <div className="family-box" data-aos="fade-left">
          <h3>Peaceful Family</h3>
          <p>
            Peaceful family comprises of all non-students church members and
            they have families or they are married. The family is headed by
            Pastor Caroline Maina
          </p>
        </div>
      </div>
    </div>
  );
};

export default FamiliesMinistry;
