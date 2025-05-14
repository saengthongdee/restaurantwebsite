import React,{useState,useEffect,useRef} from "react";
import "./about.css";

function about() {

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
      <div className="about-container">
        <h1>About us</h1>
        <div className="box-text">
          <div className="image Animation-box slide-image">
            <div className="image-left"></div>
            <div className="image-right"></div>
          </div>
          <div className="box-text-about">
            <h3 className="Animation-box slide-text">The Gilded Fork</h3>
            <p className="Animation-box slide-text">
              At Restaurant, fine dining is not just a meal — it's a celebration
              of taste, elegance, and craftsmanship. We take pride in curating
              an unforgettable culinary experience that combines meticulously
              selected ingredients, masterful techniques, and impeccable
              service. Each dish is thoughtfully crafted by our chefs, who have
              trained at world-renowned culinary institutes and carry a deep
              passion for both tradition and innovation. Our interior blends
              modern luxury with timeless sophistication, offering the perfect
              ambiance for special occasions, romantic evenings, or corporate
              gatherings.
            </p>
            <p className="about-mobile">
              At Restaurant, fine dining is not just a meal — it's a celebration
              of taste, elegance, and craftsmanship. We take pride in curating
              an unforgettable culinary experience that combines meticulously
              selected ingredients, masterful techniques, and impeccable
            </p>
            <div className="btn Animation-box slide-text">learn more</div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
