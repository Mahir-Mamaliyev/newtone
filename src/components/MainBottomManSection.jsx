import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MainBottomManSection = () => {
  return (
    <>
        <div className="woman-section-wrap">
        <div className="swiper-wrapper">
          <div className="swiper-setup">
            <h3>Мужчины</h3>
            <p>Новинки</p>
          </div>
        </div>
        <Swiper
          slidesPerGroup={3}
          slidesPerView={3}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: {
              sliderPerView: 2,
              spaceBetween: 20,
            },
            768: {
              sliderPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              sliderPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper-slide-wrap">
              <img
                className="swiper-img"
                src={require("../img/second-swiper/firstpic.jpg")}
              />
              <h3>Трикотажная футболка из хлопка</h3>
              <p>2490 ₽</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-wrap">
              <img
                className="swiper-img"
                src={require("../img/second-swiper/secondpic.jpg")}
              />
              <h3>Футболка тай-дай relaxed fit</h3>
              <p>2480  ₽</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-wrap">
              <img
                className="swiper-img"
                src={require("../img/second-swiper/thirdpic.jpg")}
              />
              <h3>Стрейч-футболка из хлопка</h3>
              <p>1990  ₽</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-wrap">
              <img
                className="swiper-img"
                src={require("../img/second-swiper/fourthpic.jpg")}
              />
              <h3>Рубашка из фланели в клетку</h3>
              <p>4990  ₽</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-wrap">
              <img
                className="swiper-img"
                src={require("../img/second-swiper/fifthpic.jpg")}
              />
              <h3>Хлопковая рубашка с терморегуляцией</h3>
              <p>2590 ₽</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-wrap">
              <img
                className="swiper-img"
                src={require("../img/second-swiper/sixthpic.jpg")}
              />
              <h3>Рубашка relaxed-fit из хлопка</h3>
              <p>4990 ₽</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-wrap">
              <img
                className="swiper-img"
                src={require("../img/second-swiper/seventhpic.jpg")}
              />
              <h3>Непромокаемый тренч из нейлона</h3>
              <p>11990 ₽</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-wrap">
              <img
                className="swiper-img"
                src={require("../img/second-swiper/vosmoy.jpg")}
              />
              <h3>укороченные брюки-карго из хлопка</h3>
              <p>4690 ₽</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default MainBottomManSection