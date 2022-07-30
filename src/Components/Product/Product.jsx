import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Product = ({
  id,
  category,
  image,
  Name,
  Price,
  Desc,
  Admin,
  HandleDelete,
}) => {
  let price =
    category === "Console" ? (
      <strong>R$ {(Price - (Price * 10) / 100).toFixed(2)}</strong>
    ) : (
      <strong>R$ {(Price - (Price * 6) / 100).toFixed(2)}</strong>
    );
      const history = useNavigate();


  if (Admin) {
    return (
      <div className="product-container">
        <img src={image} alt={Desc} />
        <div className="productDesc">
          <h1>{Name}</h1>
          <small>Vendido e entregue por AluraGeek</small>

          <small className="lt">R$ {Price}</small>

          <h2>{price}</h2>
          <h5>
            Em até <span>10x sem juros</span>
          </h5>

          <div>
            <button
              className="btn btn-primary"
              onClick={() => HandleDelete(id)}
            >
              Excluir
            </button>
            <button className="btn btn-primary btn-edit" onClick={() =>{history(`/admin/${Name}`)}}>Editar</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <Link to={`/${Name}`}>
        <div className="product-container">
          <img src={image} alt={Desc} />
          <div className="productDesc">
            <h1>{Name}</h1>
            <small>Vendido e entregue por AluraGeek</small>
            <small className="lt">R$ {Price}</small>

            <h2>{price}</h2>
            <h5>
              Em até <span>10x sem juros</span>
            </h5>

            {category === "StarWars" ? (
              <h3>Frete Grátis! &#9889;</h3>
            ) : (
              <h3>Frete Fixo R$ 8.50 &#9889;</h3>
            )}
            <div className="rate">
              &#9733; &#9733; &#9733; &#9733; &#9733; (
              {Math.floor(Math.random() * 100)})
            </div>
          </div>
        </div>
      </Link>
    );
  }
};

export default Product;
