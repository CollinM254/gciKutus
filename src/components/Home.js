import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/Home.css"; // Create this file for custom styles
import Video from "../Assets/Video.mp4";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import Typical from "react-typical";
import ChatBot from "./ChatBot";
import Layout from "../Layout";
// import Blog from "./Blog";
import IndexPage from "../pages/IndexPage";
function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  const [activeBox, setActiveBox] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBox((prevBox) => (prevBox + 1) % 5);
    }, 5000); // Change box every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // For below boxes
  const [contentBox, setContentBox] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setContentBox((prevBox) => (prevBox + 1) % 3);
    }, 5000); // Change box every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="header-video">
        <video src={Video} autoPlay loop muted width={"auto"} height={"auto"} />
        <div className="header-content">
          {activeBox === 0 && (
            <div data-aos="fade-up" className="box">
              <h1 style={{color: "white"}}>GCI - Kutus</h1>
              <p style={{color: "white"}}>Discipling Champions</p>
              <>
                <div className="redirect">
                  <Link to={"./About"} className="link">
                    About <AiOutlineArrowRight />
                  </Link>
                </div>
              </>
            </div>
          )}
          {activeBox === 1 && (
            <div data-aos="flip-right" className="box">
              <h1 style={{color: "white"}}>Our Services</h1>
              <p>
                <h1 style={{color: "white"}}>Sunday Services</h1>
                <p style={{color: "white"}}>Every Sunday from 09:00 AM to 01:00 PM</p>
              </p>
              <>
                <div className="redirect">
                  <Link to={"./Services"}>
                    Services
                    <AiOutlineArrowRight />
                  </Link>
                </div>
              </>
            </div>
          )}
          {activeBox === 1 && (
            <div data-aos="fade-left" className="box">
              {/* <h1>Our Services</h1> */}
              <p>
                <h1 style={{color: "white"}}>Midweek Services</h1>
                <p style={{color: "white"}}>Every Wednesday from 05:00 PM to 07:00 PM</p>
              </p>
              <>
                <div className="redirect">
                  <Link to={"./Services"}>
                    Services
                    <AiOutlineArrowRight />
                  </Link>
                </div>
              </>
            </div>
          )}
          {activeBox === 2 && (
            <div data-aos="fade-right" className="box">
              <h1 style={{color: "white"}}>Our Mission</h1>
              <p style={{color: "white"}}>
                To have every member championing the course of Christ in our
                society by being and doing like H
              </p>
              <>
                <div className="redirect">
                  <Link to={"./About"}>
                    More
                    <AiOutlineArrowRight />
                  </Link>
                </div>
              </>
            </div>
          )}
          {activeBox === 3 && (
            <div data-aos="flip-left" className="box">
              <h1 style={{color: "white"}}>Our Vision</h1>
              <p style={{color: "white"}}>
                To have every member championing the course of Christ in our
                society by being and doing like H
              </p>
              <>
                <div className="redirect">
                  <Link to={"./About"}>
                    Read More
                    <AiOutlineArrowRight />
                  </Link>
                </div>
              </>
            </div>
          )}
          {activeBox === 2 && (
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="box"
            >
              <h1 style={{color: "white"}}>Our Culture</h1>
              <p style={{color: "white"}}>
                To have every member championing the course of Christ in our
                society by being and doing like
              </p>
              <>
                <div className="redirect">
                  <Link to={"./About"} className="link">
                    More
                    <AiOutlineArrowRight />
                  </Link>
                </div>
              </>
            </div>
          )}
          {activeBox === 3 && (
            <div data-aos="fade-up" className="box">
              <h1 style={{color: "white"}}>Our Contacts</h1>
              <p style={{color: "white"}}>contact us through our Various social media handles</p>
              <>
                <div className="social">
                  <div>
                    <Link to={""}>
                      <FaFacebook />
                    </Link>
                  </div>
                  <div>
                    <Link to={""}>
                      <FaWhatsapp />
                    </Link>
                  </div>
                  <div>
                    <Link to={""}>
                      <FaYoutube />
                    </Link>
                  </div>
                  <div>
                    <Link to={""}>
                      <FaLinkedin />
                    </Link>
                  </div>
                  <div>
                    <Link to={""}>
                      <FaInstagram />
                    </Link>
                  </div>
                  <div>
                    <Link to={""}>
                      <FaXTwitter />
                    </Link>
                  </div>
                </div>
              </>
              <>
                <div className="redirect">
                  <Link to={"./Contact"}>
                    Contacts
                    <AiOutlineArrowRight />
                  </Link>
                </div>
              </>
            </div>
          )}
          {activeBox === 4 && (
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="box"
            >
              <h1 style={{color: "white"}}>About Us</h1>
              <p style={{color: "white"}}>
                Grace Chapel Intl Kutus is a Christian Church located in Kutus
                Town, Kirinyaga County. It is a branch of Grace Chapel Intl
                Church Kiambu Road. We are Evere dedicated to preach the true
                gospel and make Christ known in the whole world. We areled by
                Rev. Antony Main and Carol Maina assisted by a group of oyher
                pastors which together the form{" "}
                <Link to={"Pastoral"}>Pastoral Team</Link>
              </p>
              <>
                <div className="redirect">
                  <Link to={"./About"} className="link">
                    About Us
                    <AiOutlineArrowRight />
                  </Link>
                </div>
              </>
            </div>
          )}
        </div>
      </div>

      {/* news and Announcements */}

      <div className="content">
        <div data-aos="fade-down">
          <h2>News and Announcements</h2>
          <Layout />
          <IndexPage />

          {/* <div className="content-box">
            <div data-aos="fade-up" className="box">
              <h1>Web evelopment</h1>
              <p>
                We help your career grow and blow to the world by creating user
                friendly portfolio websites.
              </p>
              <>
                <div className="redirect">
                  <Link to={"./Services"} className="link">
                    Read More <AiOutlineArrowRight />
                  </Link>
                </div>
              </>
            </div>
            <div data-aos="fade-down" className="box">
              <h1>Mobile App Development</h1>
              <p>
                We develop all kinds of mobile applications including personal
                diaries, health and fitness, ecommerce, etc
              </p>
              <>
                <div className="redirect">
                  <Link to={"./Services"} className="link">
                    Read More <AiOutlineArrowRight />
                  </Link>
                </div>
              </>
            </div>
            <div data-aos="fade-left" className="box">
              <h1>Ecommerce Development</h1>
              <p>
                We help your business grow and blow to the world by creating
                user friendly and manageable ecommerce websutes and systems
                ranging from small scale to large scale and multivendow
              </p>
              <>
                <div className="redirect">
                  <Link to={"./Services"} className="link">
                    Read More <AiOutlineArrowRight />
                  </Link>
                </div>
              </>
            </div>
            <div data-aos="fade-right" className="box">
              <h1>School Management Systems</h1>
              <p>
                We develop school management systems for students marks analysis
                with staff panel, students panel and parents..
              </p>
              <>
                <div className="redirect">
                  <Link to={"./Services"} className="link">
                    Read More <AiOutlineArrowRight />
                  </Link>
                </div>
              </>
            </div>
            <div data-aos="fade-up" className="box">
              <h1>Hospital Management Systems</h1>
              <p>
                We build hospital management systems and websites, as well as
                doctor appointment systems
              </p>
              <>
                <div className="redirect">
                  <Link to={"./Services"} className="link">
                    Read More <AiOutlineArrowRight />
                  </Link>
                </div>
              </>
            </div>
            <div data-aos="fade-up" className="box">
              <h1>API Integrations</h1>
              <p>
                We help you connect your software with other applications to
                ensure seamless operation. Rest assured, we are here to make
                sure your systems communicate effectively with each other.
              </p>
              <>
                <div className="redirect">
                  <Link to={"./Services"} className="link">
                    Read More <AiOutlineArrowRight />
                  </Link>
                </div>
              </>
            </div>
            <div data-aos="fade-up" className="box">
              <h1>Digital Marketing Websites</h1>
              <p>
                We leverage advanced technology to create powerful,
                user-friendly platforms that drive engagement and achieve your
                marketing goals. Let us help you establish a strong online
                presence with our customized digital marketing solutions.
              </p>
              <>
                <div className="redirect">
                  <Link to={"./Services"} className="link">
                    Read More <AiOutlineArrowRight />
                  </Link>
                </div>
              </>
            </div>
          </div> */}
        </div>
      </div>
      {/* First 3rd */}
      <div></div>
      <div className="client_home_page content">
        <h2>Our Ministries 👉</h2>
        <div className="client-section">
          {contentBox === 0 && (
            <div data-aos="fade-up" className="box">
              <h1>Family Ministries</h1>
              <p>
                The Family ministry groups together church members who come from
                the same locality.
              </p>
              <>
                <div className="redirect">
                  <Link to={"./Ministries"} className="link">
                    Read More <AiOutlineArrowRight />
                  </Link>
                </div>
              </>
            </div>
          )}
          {contentBox === 1 && (
            <div data-aos="fade-down" className="box">
              <h1>Departmental Ministries</h1>
              <p>
                The departmental ministries Help in running the church
                especially on Sunday Services
              </p>
              <>
                <div className="redirect">
                  <Link to={"./Ministries"} className="link">
                    Read More <AiOutlineArrowRight />
                  </Link>
                </div>
              </>
            </div>
          )}
          {contentBox === 2 && (
            <div data-aos="fade-right" className="box">
              <h1>Committee Ministries</h1>
              <p>
                The Committee ministry groups together people in the same career
                path for networking purposes.
              </p>
              <>
                <div className="redirect">
                  <Link to={"./Ministries"} className="link">
                    See More <AiOutlineArrowRight />
                  </Link>
                </div>
              </>
            </div>
          )}
        </div>
      </div>
      {/* Products Section */}

      {/* forth section {clients} */}

      <ChatBot />
    </div>
  );
}

export default Home;
