import React  from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

import "./ProdCard.css";

const ProdCard = ({ data }) => {
 

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
          {data.map(({ id, image, Name, Price, Desc }) => {
            return (
              <SwiperSlide key={id}>
                <a className="product-card" href={Name}>
                  <img src={image} alt="Boneco Star Wars" />
                  <div className="product-card-details">
                    <h1>
                      <strong>{Name}</strong>
                    </h1>
                    <small>R$ {Price.toFixed(2)}</small> <br />
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
        {data.map(({ id, image, Name, Price, Desc }) => {
          return (
            <a className="product-card" key={id} href={Name}>
              <img src={image} alt="Boneco Star Wars" />
              <div className="product-card-details">
                <h1>
                  <strong>{Name}</strong>
                </h1>
                <small>R$ {Price.toFixed(2)}</small> <br />
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
