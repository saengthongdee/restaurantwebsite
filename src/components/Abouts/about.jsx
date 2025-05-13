import React from "react";
import "./about.css";

function about() {
  return (
    <div>
      <div className="about-container">
        <h1>About us</h1>
        <div className="box-text">
          <div className="image">
            <div className="image-left"></div>
            <div className="image-right"></div>
          </div>
          <div className="box-text-about">
            <h3>The Gilded Fork</h3>
            <p>
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
            <div className="btn">learn more</div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
