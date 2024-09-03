import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <img src="/card-image.png" />
      </div>
      <div className="card-body">
        <div className="title">Avocado Toast</div>
        <div className="tags">
          <div className="tag" style={{ "background-color": "#d3e1c7" }}>
            🥑 Avocado
          </div>
          <div className="tag" style={{ "background-color": "#dad4c4" }}>
            🧄 Garlic
          </div>
          <div className="tag" style={{ "background-color": "#f0dcbf" }}>
            🥖 Craft Bread
          </div>
        </div>
        <div className="content">
          <p>
            A top choice among our customers: delicious, healthy, and an amazing
            part of any morning routine!
          </p>
        </div>
        <div className="footer">
          <div className="price">$15</div>
          <button className="cart-btn">
            Add to cart{" "}
            <span>
              <img src="/cart-icon.png"></img>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
