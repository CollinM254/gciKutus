import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
import "../Styles/Navbar.css";
import { IoIosSend } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import Logo from "../Assets/logo.png";

function Navbar() {
  //   const { isAuthenticated, user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Navbar">
      <div className="Nav-right">
        <Link to={"./"}>
          <img src={Logo} className="logo" />
        </Link>
      </div>

      <div className={`Nav-left ${isOpen ? "show" : ""}`}>
        <div className="navlinks">
          <div>
            <Link to={"./"} onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </div>
          <div>
            <Link to={"About"} onClick={() => setIsOpen(false)}>
              About
            </Link>
          </div>
          <div>
            <Link to={"Services"} onClick={() => setIsOpen(false)}>
              Our Services
            </Link>
          </div>
          <div>
            <Link to={"Ministries"} onClick={() => setIsOpen(false)}>
              Ministries
            </Link>
          </div>
          <div>
            <Link to={"Pastoral"} onClick={() => setIsOpen(false)}>
              Clergy
            </Link>
          </div>
          <div>
            <Link to={"Sermons"} onClick={() => setIsOpen(false)}>
              Sermons
            </Link>
          </div>
          <div>
            <Link to={"Contact"} onClick={() => setIsOpen(false)}>
              Contacts
            </Link>
          </div>
          {/* <div>
            <Link to={"Contact"} onClick={() => setIsOpen(false)}>
              Contacts
            </Link>
          </div> */}
          <div>
            <Link to={"Give"} onClick={() => setIsOpen(false)}>
              Give
            </Link>
          </div>
          <div>
            <Link to={"Sermons"} onClick={() => setIsOpen(false)}>
              Portal
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`hamburger ${isOpen ? "change" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  );
}

export default Navbar;
