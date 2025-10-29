import React from "react";
import "./card.css";

const FoodCard = ({ image, name, price, description }) => {
  return (
    <div className="food-card">
      <img src={image} alt={name} className="food-img" />
      <div className="food-info">
        <h3 className="food-name">{name}</h3>
        <p className="food-desc">{description}</p>
        <div className="food-bottom">
          <span className="food-price">₹{price}</span>
          <button className="add-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
