import React from "react";
import "./Benefits.css";
import HBO from "../../Assets/HBOMAX.jpg";
import DISNEY from "../../Assets/DISNEYPLUS.jpg";

const Benefits = () => {
  return (
    <>
      <div className="benefits-title">
        <h1>Beneficios AluraGeek</h1>
        <h5>Nas comprar acima de R$399.90</h5>
      </div>
      <div className="container benefits-contianer">
        <img src={HBO} alt="HBO Max Logo" className="benefits-img" />
        <ol>
          <li>
            1 ano de HBO MAX grátis!
            <ol>
              <li>Acesso a todos os filmes e séries de TV favoritos da HBO</li>
              <li>Series como Chernobyl, Pacificador e Euphoria</li>
            </ol>
          </li>
        </ol>

        <ol>
          <li>
            6 meses de Acesso ao Disney + 
            <ol>
              <li>Filmes da Marvel</li>
              <li>Toda a Saga Star Wars</li>
              <li>Filmes da Pixar como Toy Story, WALL·E</li>
              <li>E muito mais!!</li>
            </ol>
          </li>
        </ol>
        <img src={DISNEY} alt="Disney Plus" className="benefits-img" />
      </div>
    </>
  );
};

export default Benefits;
