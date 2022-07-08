import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";
import SW1 from "../../Assets/StarWars/SW1.png";
import DV2 from "../../Assets/Diversos/DV2.png";
import CS3 from "../../Assets/Console/CS3.png";
import SW5 from "../../Assets/StarWars/SW5.png";
import DV6 from "../../Assets/Diversos/DV6.png";
import CS1 from "../../Assets/Console/CS1.png";
import "./ProdCard.css";

const ProdCard = () => {
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
      Name: "GameBoy Color",
      Price: "R$ 125,20",
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
    },
  ];

  return (
    <>
      <div className="container product-card-container">
        <Swiper
          slidesPerView={3}
          spaceBetween={60}
          slidesPerGroup={3}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {Data.map(({ id, image, Name, Price, Desc }) => {
            return (
              <SwiperSlide>
                <a className="product-card" key={id} href={Name}>
                  <img src={image} alt="Boneco Star Wars" />
                  <div className="product-card-details">
                    <h1>
                      <strong>{Name}</strong>
                    </h1>
                    <small>{Price}</small> <br />
                    <small>{Desc}</small> <br />
                    <button className="btn btn-primary">Comprar</button>
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="container product-card-container-sf">
          {Data.map(({ id, image, Name, Price, Desc }) => {
            return (
                <a className="product-card" key={id} href={Name}>
                  <img src={image} alt="Boneco Star Wars" />
                  <div className="product-card-details">
                    <h1>
                      <strong>{Name}</strong>
                    </h1>
                    <small>{Price}</small> <br />
                    <small>{Desc}</small> <br />
                    <button className="btn btn-primary">Comprar</button>
                  </div>
                </a>
            );
          })}
      </div>
    </>
  );
};

export default ProdCard;
