import React, { useEffect, useState } from "react";
import ProdCard from "../ProductCard/ProdCard.jsx";
import { useParams } from "react-router-dom";
import './FullProduct.css'

const FullProduct = ({data}) => {
  const params = useParams();

  const [ProductAd, setProductAd] = useState([]);

  useEffect(() => {
    const Active = data.filter((item) => item.Name === params.product);
    setProductAd(Active);
  }, []);

  return (
    <>
      <div className="container ProductAd-container">
        {ProductAd.map(({ id, category, image, Name, Price, FullDesc }) => (
          <div>
            <img src={image} alt="" />
            <div>
              <h1>{Name}</h1>
              {category === "Console" ? (
                <strong>R$ {(Price - (Price * 10) / 100).toFixed(2)}</strong>
              ) : (
                <strong>R$ {(Price - (Price * 6) / 100).toFixed(2)}</strong>
              )}
              <br /> <br />
              <p>{FullDesc}</p>
              <br />
              <br />
              <button className="btn btn-primary">Comprar</button>
              <button className="btn btn-cart"> Adicionar ao Carrinho</button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h3>Produtos Similares</h3>
        <ProdCard data={data}/>
      </div>
    </>
  );
};

export default FullProduct;
