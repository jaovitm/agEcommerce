import React from 'react';
import ProdCard from "../ProductCard/ProdCard.jsx";
import './Daily.css'
import { v4 as uuidv4 } from "uuid";


const Daily = ({data}) => {
  return (
    <>
      <div className="container daily-container">
        <h1>Ofertas Diárias</h1>
        <h5>As melhores escolhas pra você!</h5>
      </div>
      <ProdCard data={data}/>
    </>
  );
}

export default Daily