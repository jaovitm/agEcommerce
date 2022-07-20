import React, { useEffect } from "react";
import CartProduct from "../CartProduct/CartProduct.jsx";
import "./Cart.css";

const Cart = () => {
  let cart = JSON.parse(sessionStorage.getItem("Cart"));
    let prices = cart.map((item) =>
    item.category === "Console"
      ? ((item.Price - (item.Price * 10) / 100).toFixed(2))
      : ((item.Price - (item.Price * 6) / 100).toFixed(2))
  );
  let finalPrices = prices.map(item => Number(item))

  let total = finalPrices.reduce((acc, item) => acc + item);

  useEffect(() => {
    cart = JSON.parse(sessionStorage.getItem("Cart"));
    total = finalPrices.reduce((acc, item) => acc + item);
  }, []);

  return (
    <div className="container Cart-container">
      <div>
        <h2>Carrinho ({cart.length})</h2>
      </div>

      {cart.map(({ id, category, image, Name, Price }) => (
        <CartProduct
          key={id}
          category={category}
          image={image}
          Name={Name}
          Price={Price}
        />
      ))}

      <div>
        <h2>Total: R$ {total} </h2>
        <button className="btn btn-primary">Finalizar Compra</button>
      </div>
    </div>
  );
};

export default Cart;
