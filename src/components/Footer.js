import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";
import { MdAddCall, MdEmail } from "react-icons/md";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-main">
        <div className="contacts">
          <h3>Contacts</h3>
          <div>
            <Link to={"tel:+254707869120"}>
              <MdAddCall /> Call Us
            </Link>
          </div>
          <div>
            <Link to={"https://wa.me/254707869120"} style={{ color: "green" }}>
              <FaWhatsapp /> WhatsApp Us
            </Link>
          </div>
          <div>
            <Link to={"mailto:kutusgci@gmail.com"}>
              <MdEmail /> Email Us
            </Link>
          </div>
        </div>
        <div className="social-media">
          <h3>Social Media</h3>
          <div>
            <Link
              to={"https://www.facebook.com/profile.php?id=100067888666532"}
            >
              <FaFacebookF /> GCI - Kutus
            </Link>
          </div>
          <div>
            <Link to={""}>
              <FaInstagram /> GCI - Kutus
            </Link>
          </div>
          <div>
            <Link to={""}>
              <FaXTwitter />
              GCI - Kutus
            </Link>
          </div>
          <div>
            <Link
              to={"https://vm.tiktok.com/ZMhrwdkEb/"}
            >
              <IoLogoTiktok /> GCI - Kutus
            </Link>
          </div>
          <div>
            <Link
              to={
                "https://www.linkedin.com/in/collin-mwenda-software-engineer/"
              }
            >
              <FaLinkedinIn /> GCI - Kutus
            </Link>
          </div>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <div>
            <Link to={"./Give"}>Give</Link>
          </div>
          <div>
            <Link to={"/Services"}>Our Services</Link>
          </div>
          <div>
            <Link to={"/Sermons"}>Our Sermons</Link>
          </div>
          <div>
            <Link to={"/Pastoral"}>Clergy Team</Link>
          </div>
          <div>
            <Link to={"https://calendly.com/cmwenda20"}>
              Book an Appointment
            </Link>
          </div>
        </div>
        <div className="our-products">
          <h3>See Updates 👇👇</h3>
          <div>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100067888666532&amp;tabs=timeline&amp;width=340&amp;height=500&amp;small_header=true&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=3420544741517957"
              width="300"
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              style={{border: 'none', overflow: 'hidden'}}
            ></iframe>
          </div>
          
        </div>
      </div>
      <p style={{color: "white"}} className="text-center font-bold" title="Company's CEO">
        &copy;{new Date().getFullYear()} Developed by{" "}
        <Link to={"https://collinm254.github.io/Portfolio1/"}>Collin</Link>
      </p>
    </div>
  );
}

export default Footer;
