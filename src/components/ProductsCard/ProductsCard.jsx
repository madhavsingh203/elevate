import React from "react";
import "./ProductsCard.css";
const ProductsCard = ({ data }) => {
  return (
    <div className="card-container">
      <div className="top-section">
        <h3>{data.title}</h3>
        <span>
          <p
            style={{
              color: "red",
              display: "inline-block",
            }}
          >
            Price
          </p>{" "}
          $ {data.price}
        </span>
      </div>
      <div className="botton-section">
        <img src={data.image} />
      </div>
    </div>
  );
};

export default ProductsCard;
