import React, { useState,useRef,useEffect } from 'react';
import './navbar.css';
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const containerRef = useRef(null);

    useEffect(() => {
    const boxes = containerRef.current.querySelectorAll(".Animation-box");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    boxes.forEach((box) => observer.observe(box));
    return () => boxes.forEach((box) => observer.unobserve(box));
  }, []);

  return (
    <div ref={containerRef}>
      <div className="overlay"></div>
      <nav>
        <div className="logo">The Gilded Fork</div>

        <div className="menu Animation-box slide-bottom">
          <ul>
            <li>
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Menu</a>
              <a href="">Contact</a>
              <a href="" className="a-head">Reserve</a>
            </li>
          </ul>
        </div>

        {/* 🍔 Hamburger Icon */}
        <RxHamburgerMenu className="icon" onClick={toggleMenu} />

        {/* 📱 Mobile Menu */}
        <div className={`menu-mobile ${menuOpen ? 'show' : ''}`}>
          <ul>
            <li>
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Menu</a>
              <a href="">Contact</a>
              <a href="" className="a-head">Reserve</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
