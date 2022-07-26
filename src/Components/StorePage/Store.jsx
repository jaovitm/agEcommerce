import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../Product/Product";
import './Store.css'

const Store = ({category, data}) => {

  const [ActiveProducts, setActiveProducts] = useState([]);

  const history = useNavigate();

  function handleAddProduct() {
    history("/Adicionar Produto");
  }

  useEffect(()=>{
    
      const Active = data.filter((item) => item.category === category);
      setActiveProducts(Active);
  }, [])

  var results = ActiveProducts.length
  
  return (
    <>
      <div className="container store-container">
        <div>
          <h1>{category}</h1>
          <h5>{results} resultados encontrados</h5>

          <button className="btn btn-primary" onClick={handleAddProduct}>
            Adicionar Produto
          </button>
        </div>
        <div>
          {ActiveProducts.map(({ id, category, image, Name, Price, Desc }) => (
            <Product
              key={id}
              category={category}
              image={image}
              Name={Name}
              Price={Price}
              Desc={Desc}
            />
          ))}
        </div>
      </div>
    </>
  ); 
};

export default Store;
