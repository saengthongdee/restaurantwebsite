import React, { useState, useEffect } from "react";
import "./menu.css";
import data from "../../../data.json";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("hors_doeuvre");
  const [menuItems, setMenuItems] = useState([]);


  useEffect(() => {
    if (data[activeCategory]) {
      setMenuItems(data[activeCategory]);
    }
  }, [activeCategory]);

  const handleCategoryChange = (categoryKey) => {
    setActiveCategory(categoryKey);
  };

  return (
    <div className="container-menu">
      <div className="container-box-menu">
        <h1>Menu</h1>

        <div className="box-list-menu">
          <div className="control">
            <div
              className={`box-control ${
                activeCategory === "hors_doeuvre" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("hors_doeuvre")}
            >
              HORS D'OEUVRE
            </div>
            <div
              className={`box-control ${
                activeCategory === "pasta_or_risotto" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("pasta_or_risotto")}
            >
              PASTA OR RISOTTO
            </div>
            <div
              className={`box-control ${
                activeCategory === "releve_or_remove" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("releve_or_remove")}
            >
              RELEVÉ OR REMOVE
            </div>
          </div>
        </div>

        <div className="menu-items">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-card">
              <div 
                style={{ backgroundImage: `url(${item.image})` }}
                className="image">

              </div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="price">
                <p>price</p>
                ฿{item.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
