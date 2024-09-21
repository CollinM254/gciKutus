import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

function Ministries() {
  return (
    <div>
      <div className="content">
        <div data-aos="fade-down">
          <h2>Our Ministries</h2>
          <div className="content-box">
            <div data-aos="fade-up" className="box">
              <h1>DEPARTMENTAL MINISTRIES</h1>
              <p style={{color: "white"}}>
                The Service ministries Help in running the church especially on
                Sunday Services
              </p>
              <>
                <div className="redirect">
                  <Link to="/Departmental" className="link">
                    Read More <AiOutlineArrowRight />
                  </Link>
                </div>
              </>
            </div>
            <div data-aos="fade-left" className="box">
              <h1>COMMITTEES MINISTRY</h1>
              <p style={{color: "white"}}>
                The Committee ministry groups together people in the same career
                path.
              </p>
              <>
                <div className="redirect">
                  <Link to="/Committees" className="link">
                    Read More <AiOutlineArrowRight />
                  </Link>
                </div>
              </>
            </div>
            <div data-aos="fade-right" className="box">
              <h1>FAMILIES MINISTRY</h1>
              <p style={{color: "white"}}>
                The Family ministry groups together church members who come from
                the same locality.
              </p>
              <>
                <div className="redirect">
                  <Link to="/Families" className="link">
                    Read More <AiOutlineArrowRight />
                  </Link>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ministries;
