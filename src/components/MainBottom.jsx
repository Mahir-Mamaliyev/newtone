import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MainBottom = () => {
  return (
    <>
      <div className="woman-section-wrap">
        <div className="swiper-wrapper">
          <div className="swiper-setup">
            <h3>Женщины</h3>
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
                src={require("../img/first-swiper/firstPic.jpg")}
              />
              <h3>Повседневная хлопковая футболка</h3>
              <p>990 ₽</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-wrap">
              <img
                className="swiper-img"
                src={require("../img/first-swiper/secondPic.jpg")}
              />
              <h3>Твидовый кардиган из хлопка</h3>
              <p>7490  ₽</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-wrap">
              <img
                className="swiper-img"
                src={require("../img/first-swiper/thirdPic.jpg")}
              />
              <h3>Бежевый плащ</h3>
              <p>4990  ₽</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-wrap">
              <img
                className="swiper-img"
                src={require("../img/first-swiper/fourthPic.jpg")}
              />
              <h3>Жилет из трикотажа</h3>
              <p>3290  ₽</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-wrap">
              <img
                className="swiper-img"
                src={require("../img/first-swiper/fifthPic.jpg")}
              />
              <h3>Хлопковая рубашка в полоску</h3>
              <p>3590 ₽</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-wrap">
              <img
                className="swiper-img"
                src={require("../img/first-swiper/sixthPic.jpg")}
              />
              <h3>Объемная рубашка в клетку</h3>
              <p>3790 ₽</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-wrap">
              <img
                className="swiper-img"
                src={require("../img/first-swiper/seventhPic.jpg")}
              />
              <h3>Джинсы с завышенной талией Wideleg</h3>
              <p>3590 ₽</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-wrap">
              <img
                className="swiper-img"
                src={require("../img/first-swiper/eigthPic.jpg")}
              />
              <h3>Джинсы с завышенной талией Wideleg</h3>
              <p>1690 ₽</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default MainBottom;
