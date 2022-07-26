import React, { useState } from "react";
import CartProduct from "../CartProduct/CartProduct.jsx";
import "./Cart.css";

const Cart = () => {

  const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem("Cart")));

  setInterval(()=>{
    setCart(JSON.parse(sessionStorage.getItem("Cart")));
    
  },500)
  
  
  let finalPrices;
  let total;
  let prices;


  if(cart==null){
return (
  <div className="container Cart-container">
    <div>
      <h2>Carrinho</h2>
    </div>

    <h3>Seu carrinho está vazio, tente adicionar algo a ele!</h3>
  </div>
);
  }


   
     prices = cart.map((item) =>
       item.category === "Console"
         ? (item.Price - (item.Price * 10) / 100).toFixed(2)
         : (item.Price - (item.Price * 6) / 100).toFixed(2)
     );

     finalPrices = prices.map((item) => Number(item));
     total = finalPrices.reduce((acc, item) => acc + item);


return (
  <div className="container Cart-container">
    <div>
      <h2>Carrinho ({cart.length})</h2>
    </div>

    {cart.map(({ id, category, image, Name, Price }) => (
      <CartProduct
        id={id}
        category={category}
        image={image}
        Name={Name}
        Price={Price}
      />
    ))}

    <div>
      <h2>Total: R$ {total.toFixed(2)} </h2>
      <button className="btn btn-primary">Finalizar Compra</button>
    </div>
  </div>
);

  
};

export default Cart;
