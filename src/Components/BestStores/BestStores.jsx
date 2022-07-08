import React from 'react'
import './Best.css'
import SWB from '../../Assets/StarWars/SWB.jpg';
import SW1 from "../../Assets/StarWars/SW1.png";
import SW2 from "../../Assets/StarWars/SW2.png";
import DVB from "../../Assets/Diversos/DVB.jpg";
import DV1 from "../../Assets/Diversos/DV1.png";
import DV2 from "../../Assets/Diversos/DV2.png";
import CSB from "../../Assets/Console/CSB.jpg";
import CS1 from "../../Assets/Console/CS1.png";
import CS2 from "../../Assets/Console/CS2.png";

const BestStores = () => {
  return (
    <>
      <div className="container bs-container">
        <a className="bs-card">
          <img src={SWB} alt="" className="bs-card-banner" />
          <div className="bs-card-content">
            <h1>Star Wars Store</h1>

            <div className="bs-examples">
              <img src={SW1} alt="" className="bs-example-img" />
              <img src={SW2} alt="" className="bs-example-img" />
            </div>

            <div className="bs-button">
              <button className="btn btn-primary">
                <a href="">Conheça</a>
              </button>
            </div>
          </div>
        </a>

        <a className="bs-card">
          <img src={CSB} alt="" className="bs-card-banner" />
          <div className="bs-card-content">
            <h1>Consoles Store</h1>

            <div className="bs-examples">
              <img src={CS1} alt="" className="bs-example-img" />
              <img src={CS2} alt="" className="bs-example-img" />
            </div>

            <div className="bs-button">
              <button className="btn btn-primary">
                <a href="">Conheça</a>
              </button>
            </div>
          </div>
        </a>

        <a className="bs-card">
          <img src={DVB} alt="" className="bs-card-banner" />
          <div className="bs-card-content">
            <h1>Diversos</h1>

            <div className="bs-examples">
              <img src={DV1} alt="" className="bs-example-img" />
              <img src={DV2} alt="" className="bs-example-img" />
            </div>
            <div className="bs-button">
              <button className="btn btn-primary">
                <a href="">Conheça</a>
              </button>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default BestStores