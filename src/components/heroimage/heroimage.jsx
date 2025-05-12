import React, { useEffect, useState, useRef } from "react";
import "./heroimage.css";

function heroimage() {
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
    <div>
      <main ref={containerRef} style={{ backgroundImage: `url('/ba.png')` }}>
        <div className="overlay"></div>
        <div className="text">
          <p className="Animation-box zoom-in">welcom&nbsp;&nbsp;&nbsp;to</p>

          <h1 className="Animation-box zoom-in">
            <span>F</span>ine Dining
          </h1>
          <button className="Animation-box zoom-in">View menu</button>
        </div>
      </main>
    </div>
  );
}

export default heroimage;
