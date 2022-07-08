import React from "react";
import SW1 from "../../Assets/StarWars/SW1.png";
import DV2 from "../../Assets/Diversos/DV2.png";
import CS3 from "../../Assets/Console/CS3.png";
import SW5 from "../../Assets/StarWars/SW5.png";
import DV6 from "../../Assets/Diversos/DV6.png";
import CS1 from "../../Assets/Console/CS1.png";
import "./ProdCard.css";


const ProdCard = () => {
  const b1 = document.querySelector("#fdaily");
  const b2 = document.querySelector("#sdaily");
  const container = document.querySelector(".product-card-container");
  const Data = [
    {
      id: 1,
      image: SW1,
      Name: "Boneco Dart Maul",
      Price: "R$ 109,90",
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      image: DV2,
      Name: "Poster Atari",
      Price: "R$ 125,39",
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      image: CS3,
      Name: "R$ GameBoy Color",
      Price: "125,20",
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      image: CS1,
      Name: "Manete Xbox One",
      Price: "R$ 250,75",
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 5,
      image: DV6,
      Name: "Boneco Sonic",
      Price: "R$ 55,50",
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 6,
      image: SW5,
      Name: "Action Figure Yoda",
      Price: "R$ 95,20",
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    }
  ];
  const CheckButtonId = (e) => {
    if (e.target.id == b1.id) {
      HandleDailyTransition("1");
    }
    else if (e.target.id == b2.id) {
      HandleDailyTransition("2");
    }
  };

  const HandleDailyTransition = (x) => {
    if (x === "1") {
      container.style.transform = "translateX(100%)";
    }
    if (x === "2") {
      container.style.transform = "translateX(0)";
    }
  };

  
  return (
    <>
      <div className="container product-card-container">
        {Data.map(({ id, image, Name, Price, Desc }) => {
          return (
            <a className="product-card" key={id} href={Name}>
              <img src={image} alt="Boneco Star Wars" />
              <div className="product-card-details">
                <h1>{Name}</h1>
                <small>{Price}</small> <br />
                <small>{Desc}</small> <br />
                <button className="btn btn-primary">Comprar</button>
              </div>
            </a>
          );
        })}
      </div>

      <div className="daily-controls">
        <div id="fdaily" onClick={(e) => CheckButtonId(e)}>
          <button id="fdaily" onClick={(e) => CheckButtonId(e)}></button>
        </div>
        <div id="sdaily" onClick={(e) => CheckButtonId(e)}>
          <button id="sdaily" onClick={(e) => CheckButtonId(e)}></button>
        </div>
      </div>
    </>
  );
};

export default ProdCard;
