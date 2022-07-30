import React, { useEffect, useState } from "react";
import ProdCard from "../ProductCard/ProdCard.jsx";
import { useParams, useNavigate} from "react-router-dom";
import "./FullProduct.css";

const FullProduct = ({ data, admin, setProducts }) => {
  const params = useParams();
  const history = useNavigate();

  const [ProductAd, setProductAd] = useState([]);

  useEffect(() => {
    const Active = data.filter((item) => item.Name === params.product);
    setProductAd(Active);
  }, []);

  const closeModal = () => {
    const modal = document.querySelector(".editProductModal");
    modal.classList.remove("show-modal");
    history(`/${ProductAd[0].category}`)
  };

  const HandleCartAdd = () => {
    if (sessionStorage.getItem("Cart") === null) {
      sessionStorage.setItem("Cart", JSON.stringify(ProductAd));
    } else {
      sessionStorage.setItem(
        "Cart",
        JSON.stringify([
          ...JSON.parse(sessionStorage.getItem("Cart")),
          ProductAd[0],
        ])
      );
    }
  };

  const HandleProductEdit = () => {
    const title = document.querySelector(".title");
    const price = document.querySelector(".price");
    const desc = document.querySelector(".desc");

    const editedProducts = data.map((item) => {
      if (item.Name == ProductAd[0].Name) {
        item.Name = title.textContent;
        item.Desc = desc.textContent;
        item.Price = Number(price.textContent);
        console.log(item);
        return item;
      } else {
        return item;
      }
    });

    sessionStorage.setItem("Products", JSON.stringify(editedProducts));
    setProducts(JSON.parse(sessionStorage.getItem("Products")));

    const modal = document.querySelector(".editProductModal");
    modal.classList.add("show-modal");
  };

  const editFocus = (e) => {
    e.target.style.backgroundColor = "var(--color-bg-variant)";
  };
  const editBlur = (e) => {
    e.target.style.backgroundColor = "var(--color-bg)";
  };

  if (admin) {
    return (
      <>
        <h1 style={{ textAlign: "center", marginBottom: 50 }}>
          Clique nos textos para editar o produto
        </h1>
        <div className="container ProductAd-container">
          {ProductAd.map(({ id, category, image, Name, Price, FullDesc }) => (
            <div>
              <img src={image} alt="" />
              <div>
                <div
                  contentEditable
                  className="contentEditable title"
                  onFocus={editFocus}
                  onBlur={editBlur}
                >
                  {Name}
                </div>
                <div
                  contentEditable
                  className="contentEditable price"
                  onFocus={editFocus}
                  onBlur={editBlur}
                >
                  {Price}
                </div>
                <p
                  contentEditable
                  className="desc"
                  onFocus={editFocus}
                  onBlur={editBlur}
                >
                  {FullDesc}
                </p>
                <br />
                <br />
                <button className="btn btn-primary" onClick={HandleProductEdit}>
                  Salvar
                </button>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
        <div className="editProductModal">
          <h1 className="modal-content">Produto editado com sucesso!</h1>
          <span className="close-button" onClick={closeModal}>
            X
          </span>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container ProductAd-container">
          {ProductAd.map(({ id, category, image, Name, Price, FullDesc }) => (
            <div>
              <img src={image} alt="" />
              <div>
                <h1>{Name}</h1>
                <small>
                  De
                  <span className="lt"> R$ {Price}</span>
                </small>
                <s></s>
                <br />
                {category === "Console" ? (
                  <strong>
                    Por{" "}
                    <span>R$ {(Price - (Price * 10) / 100).toFixed(2)}</span>
                  </strong>
                ) : (
                  <strong>
                    Por <span>R$ {(Price - (Price * 6) / 100).toFixed(2)}</span>
                  </strong>
                )}
                <br /> <br />
                <p>{FullDesc}</p>
                <br />
                <br />
                <button className="btn btn-primary">Comprar</button>
                <button className="btn btn-cart" onClick={HandleCartAdd}>
                  {" "}
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3>Produtos Similares</h3>
          <ProdCard data={data} />
        </div>
      </>
    );
  }
};

export default FullProduct;
