import React from 'react';
import './footer.css';
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>The Gilded Fork</h2>
          <p>Fine Dining & Exquisite Experience</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"> <FaFacebookSquare/>&nbsp; &nbsp;&nbsp;The Gilded Fork</a>
            <a href="#"> <IoLogoInstagram/>&nbsp;&nbsp;&nbsp; TheGildedFork_</a>
            <a href="#"> <CiTwitter />&nbsp;&nbsp;&nbsp; TheGildedFork_</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} The Gilded Fork. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
