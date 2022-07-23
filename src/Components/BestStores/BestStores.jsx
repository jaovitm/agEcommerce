import React from "react";
import { useNavigate, Link} from "react-router-dom";

import "./Best.css";
import SWB from "../../Assets/StarWars/SWB.jpg";
import SW1 from "../../Assets/StarWars/SW1.png";
import SW2 from "../../Assets/StarWars/SW2.png";
import DVB from "../../Assets/Diversos/DVB.jpg";
import DV1 from "../../Assets/Diversos/DV1.png";
import DV2 from "../../Assets/Diversos/DV2.png";
import CSB from "../../Assets/Console/CSB.jpg";
import CS1 from "../../Assets/Console/CS1.png";
import CS2 from "../../Assets/Console/CS2.png";

const BestStores = () => {

  const history = useNavigate();

  function handleSubmit(link) {
    history(`/${link}`);
  }


  return (
    <>
      <div className="container bs-container">
        <div className="bs-card" onClick={() => handleSubmit("StarWars")}>
          <img
            src={SWB}
            alt="Personagem de Star Wars"
            className="bs-card-banner"
          />
          <div className="bs-card-content">
            <h1>Star Wars Store</h1>

            <div className="bs-examples">
              <img
                src={SW1}
                alt="Personagem de Star Wars"
                className="bs-example-img"
              />
              <img
                src={SW2}
                alt="Personagem de Star Wars"
                className="bs-example-img"
              />
            </div>

            <div className="bs-button">
              <button className="btn btn-primary">
                <Link to="/StarWars">Conheça</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="bs-card" onClick={() => handleSubmit("Consoles")}>
          <img
            src={CSB}
            alt="Manetes de XBOX e Playstation"
            className="bs-card-banner"
          />
          <div className="bs-card-content">
            <h1>Consoles Store</h1>

            <div className="bs-examples">
              <img
                src={CS1}
                alt="Manete de Xbox One"
                className="bs-example-img"
              />
              <img src={CS2} alt="Playstation 5" className="bs-example-img" />
            </div>

            <div className="bs-button">
              <button className="btn btn-primary">
                <Link to="/Consoles">Conheça</Link>
              </button>
            </div>
          </div>
        </div>

        <div
          className="bs-card"
          onClick={() => handleSubmit("Diversos")}
        >
          <img src={DVB} alt="Um funko Pop" className="bs-card-banner" />
          <div className="bs-card-content">
            <h1>Diversos</h1>

            <div className="bs-examples">
              <img src={DV1} alt="Pessoa Jogando" className="bs-example-img" />
              <img src={DV2} alt="Banner Atari" className="bs-example-img" />
            </div>
            <div className="bs-button">
              <button className="btn btn-primary">
                <Link to="/Diversos">Conheça</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestStores;
