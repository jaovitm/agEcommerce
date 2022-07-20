import "./App.css";
import Header from "./Components/Header/Header";
import Daily from "./Components/DailyOffers/Daily";
import Payment from "./Components/Payment/Payment";
import Benefits from "./Components/benefits/Benefits";
import BestStores from "./Components/BestStores/BestStores";
import Store from "./Components/StorePage/Store";
import Footer from "./Components/Footer/Footer";
import Slider from "./Components/Slider/Slider";
import FullProduct from "./Components/FullProduct/FullProduct";
import Login from "./Components/Login/Login";
import Cart from './Components/Cart/Cart'


//react packages
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";

// Imagens usadas no projeto
import SW1 from "./Assets/StarWars/SW1.png";
import SW2 from "./Assets/StarWars/SW2.png";
import SW3 from "./Assets/StarWars/SW3.png";
import SW4 from "./Assets/StarWars/SW4.png";
import SW5 from "./Assets/StarWars/SW5.png";
import SW6 from "./Assets/StarWars/SW6.png";

import DV1 from "./Assets/Diversos/DV1.png";
import DV2 from "./Assets/Diversos/DV2.png";
import DV3 from "./Assets/Diversos/DV3.png";
import DV4 from "./Assets/Diversos/DV4.png";
import DV5 from "./Assets/Diversos/DV5.png";
import DV6 from "./Assets/Diversos/DV6.png";

import CS1 from "./Assets/Console/CS1.png";
import CS2 from "./Assets/Console/CS2.png";
import CS3 from "./Assets/Console/CS3.png";
import CS4 from "./Assets/Console/CS4.png";
import CS5 from "./Assets/Console/CS5.png";
import CS6 from "./Assets/Console/CS6.png";


function App() {

  let ids = [];
  let newDaily = []

  const [Products, setProducts] = useState([
    {
      id: 1,
      category: "StarWars",
      image: SW1,
      Name: "Boneco Dart Maul",
      Price: 109.9,
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      FullDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, sint saepe quisquam aliquid repellendus iure similique adipisci harum nesciunt ex? Odio officiis impedit, maiores iure libero autem quos quis?",
    },
    {
      id: 2,
      category: "StarWars",
      image: SW2,
      Name: "Boneco Storm Trooper",
      Price: 119.9,
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      FullDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, sint saepe quisquam aliquid repellendus iure similique adipisci harum nesciunt ex? Odio officiis impedit, maiores iure libero autem quos quis?",
    },
    {
      id: 3,
      category: "StarWars",
      image: SW3,
      Name: "Balde Pipoca Storm Trooper Head",
      Price: 65.3,
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      FullDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, sint saepe quisquam aliquid repellendus iure similique adipisci harum nesciunt ex? Odio officiis impedit, maiores iure libero autem quos quis?",
    },
    {
      id: 4,
      category: "StarWars",
      image: SW4,
      Name: "Miniaturas em Lego",
      Price: 159.2,
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      FullDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, sint saepe quisquam aliquid repellendus iure similique adipisci harum nesciunt ex? Odio officiis impedit, maiores iure libero autem quos quis?",
    },
    {
      id: 5,
      category: "StarWars",
      image: SW5,
      Name: "Action Figure Yoda",
      Price: 95.2,
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      FullDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, sint saepe quisquam aliquid repellendus iure similique adipisci harum nesciunt ex? Odio officiis impedit, maiores iure libero autem quos quis?",
    },
    {
      id: 6,
      category: "StarWars",
      image: SW6,
      Name: "Baby Yoda Toy",
      Price: 150.85,
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      FullDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, sint saepe quisquam aliquid repellendus iure similique adipisci harum nesciunt ex? Odio officiis impedit, maiores iure libero autem quos quis?",
    },
    {
      id: 7,
      category: "Console",
      image: CS1,
      Name: "Manete Xbox One",
      Price: 367.9,
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      FullDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, sint saepe quisquam aliquid repellendus iure similique adipisci harum nesciunt ex? Odio officiis impedit, maiores iure libero autem quos quis?",
    },
    {
      id: 8,
      category: "Console",
      image: CS2,
      Name: "PlayStation 5 - 1TB",
      Price: 5500.3,
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      FullDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, sint saepe quisquam aliquid repellendus iure similique adipisci harum nesciunt ex? Odio officiis impedit, maiores iure libero autem quos quis?",
    },
    {
      id: 9,
      category: "Console",
      image: CS3,
      Name: "Gameboy",
      Price: 2500.5,
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      FullDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, sint saepe quisquam aliquid repellendus iure similique adipisci harum nesciunt ex? Odio officiis impedit, maiores iure libero autem quos quis?",
    },
    {
      id: 10,
      category: "Console",
      image: CS4,
      Name: "Manete Nintendo Switch",
      Price: 400.5,
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      FullDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, sint saepe quisquam aliquid repellendus iure similique adipisci harum nesciunt ex? Odio officiis impedit, maiores iure libero autem quos quis?",
    },
    {
      id: 11,
      category: "Console",
      image: CS5,
      Name: "Xbox Series X",
      Price: 5600.7,
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      FullDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, sint saepe quisquam aliquid repellendus iure similique adipisci harum nesciunt ex? Odio officiis impedit, maiores iure libero autem quos quis?",
    },
    {
      id: 12,
      category: "Console",
      image: CS6,
      Name: "Nintendo NES",
      Price: 1200.0,
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      FullDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, sint saepe quisquam aliquid repellendus iure similique adipisci harum nesciunt ex? Odio officiis impedit, maiores iure libero autem quos quis?",
    },
    {
      id: 13,
      category: "Diversos",
      image: DV1,
      Name: "Camiseta Manete",
      Price: 60.52,
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      FullDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, sint saepe quisquam aliquid repellendus iure similique adipisci harum nesciunt ex? Odio officiis impedit, maiores iure libero autem quos quis?",
    },
    {
      id: 14,
      category: "Diversos",
      image: DV2,
      Name: "Poster Atari",
      Price: 125.39,
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      FullDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, sint saepe quisquam aliquid repellendus iure similique adipisci harum nesciunt ex? Odio officiis impedit, maiores iure libero autem quos quis?",
    },
    {
      id: 15,
      category: "Diversos",
      image: DV3,
      Name: "Relogio com Radio",
      Price: 125.32,
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      FullDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, sint saepe quisquam aliquid repellendus iure similique adipisci harum nesciunt ex? Odio officiis impedit, maiores iure libero autem quos quis?",
    },
    {
      id: 16,
      category: "Diversos",
      image: DV4,
      Name: "Óculos de Realidade Virtual - Quest 2",
      Price: 2200.0,
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      FullDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, sint saepe quisquam aliquid repellendus iure similique adipisci harum nesciunt ex? Odio officiis impedit, maiores iure libero autem quos quis?",
    },
    {
      id: 17,
      category: "Diversos",
      image: DV5,
      Name: "Fantasia Pikachu",
      Price: 563.0,
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      FullDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, sint saepe quisquam aliquid repellendus iure similique adipisci harum nesciunt ex? Odio officiis impedit, maiores iure libero autem quos quis?",
    },
    {
      id: 18,
      category: "Diversos",
      image: DV6,
      Name: "Boneco Sonic",
      Price: 55.5,
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      FullDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, sint saepe quisquam aliquid repellendus iure similique adipisci harum nesciunt ex? Odio officiis impedit, maiores iure libero autem quos quis?",
    },
  ]);

  const [dailyOffers, setDailyOffers] = useState([
    {
      id: 1,
      category: "StarWars",
      image: SW1,
      Name: "Boneco Dart Maul",
      Price: 109.9,
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      FullDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, sint saepe quisquam aliquid repellendus iure similique adipisci harum nesciunt ex? Odio officiis impedit, maiores iure libero autem quos quis?",
    },
    {
      id: 5,
      category: "StarWars",
      image: SW5,
      Name: "Action Figure Yoda",
      Price: 95.2,
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      FullDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, sint saepe quisquam aliquid repellendus iure similique adipisci harum nesciunt ex? Odio officiis impedit, maiores iure libero autem quos quis?",
    },
    {
      id: 7,
      category: "Console",
      image: CS1,
      Name: "Manete Xbox One",
      Price: 367.9,
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      FullDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, sint saepe quisquam aliquid repellendus iure similique adipisci harum nesciunt ex? Odio officiis impedit, maiores iure libero autem quos quis?",
    },
    {
      id: 10,
      category: "Console",
      image: CS4,
      Name: "Manete Nintendo Switch",
      Price: 400.5,
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      FullDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, sint saepe quisquam aliquid repellendus iure similique adipisci harum nesciunt ex? Odio officiis impedit, maiores iure libero autem quos quis?",
    },
    {
      id: 14,
      category: "Diversos",
      image: DV2,
      Name: "Poster Atari",
      Price: 125.39,
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      FullDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, sint saepe quisquam aliquid repellendus iure similique adipisci harum nesciunt ex? Odio officiis impedit, maiores iure libero autem quos quis?",
    },
    {
      id: 17,
      category: "Diversos",
      image: DV5,
      Name: "Fantasia Pikachu",
      Price: 563.0,
      Desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      FullDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet, sint saepe quisquam aliquid repellendus iure similique adipisci harum nesciunt ex? Odio officiis impedit, maiores iure libero autem quos quis?",
    },
  ]);

  const random = (mn, mx) => {
    return Math.floor(Math.random() * (mx - mn) + mn);
  };

  const gerarid = (ids, id) => {
    if (ids.indexOf(id) === -1) {
      ids.push(id);
      return true;
    } else if (ids.indexOf(id) > -1) {
      id++;
    }
  };

  const dailyoffers = () => {
    setDailyOffers([]);

    for (let i = 0; i <= 5; i++) {
      gerarid(ids, Products[random(1, 18)].id);
    }

  };

  useEffect(() => {
    dailyoffers();

    for (let i = 0; i < ids.length; i++) {
      Products.map((item) => {
        if (item.id === ids[i]) {
          newDaily.push(item)
        }
      });  
    }

    setDailyOffers(newDaily);

  }, []);


  return (
    <>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Slider />
              <Payment />
              <Daily data={dailyOffers} />
              <Benefits />
              <BestStores />
            </>
          }
        />

        <Route
          path="StarWars"
          element={<Store category={"StarWars"} data={Products} />}
        />
        <Route
          exact
          path="Diversos"
          element={
            <>
              <Store category={"Diversos"} data={Products} />
            </>
          }
        />

        <Route
          exact
          path="Consoles"
          element={
            <>
              <Store category={"Console"} data={Products} />
            </>
          }
        />

        <Route path=":product" element={<FullProduct data={Products} />} />

        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
