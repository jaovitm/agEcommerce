import React from "react";
import "./CartProduct.css";
import { Link } from "react-router-dom";

const CartProduct = ({ category, image, Name, Price, Desc }) => {
  let price =
    category === "Console" ? (
      <strong>R$ {(Price - (Price * 10) / 100).toFixed(2)}</strong>
    ) : (
      <strong>R$ {(Price - (Price * 6) / 100).toFixed(2)}</strong>
    );

    const handleDeleteCart = () =>{
      
    }

  return (
      <div className="Cardproduct-container">
        <img src={image} alt={Desc} />
        <div className="productDesc">
          <h1>{Name}</h1>
          <small>Vendido e entregue por AluraGeek</small>
          <h2>{price}</h2>
          <h5>
            Em até <span>10x sem juros</span>
          </h5>

          <div className="rate">
            {" "}
            &#9733; &#9733; &#9733; &#9733; &#9733; (
            {Math.floor(Math.random() * 100)})
          </div>
        </div>
        <div className="closeCart">
        <button className="btn" onClick={handleDeleteCart}>X</button>
        </div>
      </div>
  );
};

export default CartProduct;
