import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import PROMO1 from "../../Assets/promoStarWars.jpg";
import PROMO2 from "../../Assets/promoGaming.jpg";
import PROMO3 from "../../Assets/promoDiversos.jpg";

const Slider = () => {
  return (
    <>
      <div className="container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="container-swiper" id="first-swiper">
              <img src={PROMO1} alt="" />
              <h1>Promoção de Junho</h1>
              <h3>Todos os itens  de Star Wars com Frete Gratis!</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container-swiper" id="first-swiper">
              <img src={PROMO2} alt="" />
              <h1>Oferta Relampago</h1>
              <h3>10% de desconto nos Consoles!</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container-swiper" id="first-swiper">
              <img src={PROMO3} alt="" />
              <h1>Item do dia</h1>
              <h3>Funko Pop com R$5 de desconto!</h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
