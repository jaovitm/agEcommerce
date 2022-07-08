import React from 'react';
import ProdCard from "../ProductCard/ProdCard.jsx";
import './Daily.css'

const Daily = () => {
  return (
    <>
      <div className="container daily-container">
        <h1>Ofertas Diárias</h1>
        <h5>As melhores escolhas pra você!</h5>
      </div>
      <ProdCard />
    </>
  );
}

export default Daily