import { Swiper, SwiperSlide } from "swiper/react";

import "./swiperproduct.css";
import "swiper/css";
import React from "react";
import "../homeproduct.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";

// SwiperCore.use([Navigation, Pagination, Scrollbar]);
const promotiondata = [
  {
    id: 1,
    title: "Maybelline",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "130000MMK",
    image: "./images/skin-care/S6.png",
  },
  {
    id: 2,
    title: "Maybelline",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "180000MMK",
    image: "./images/skin-care/S4.png",
  },
  {
    id: 3,
    title: "Maybelline",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "240000MMK",
    image: "./images/skin-care/S3.png",
  },
  {
    id: 4,
    title: "Maybelline",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "330000MMK",
    image: "./images/skin-care/S1.png",
  },
  {
    id: 5,
    title: "Maybelline",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "190000MMK",
    image: "./images/skin-care/S5.png",
  },
  {
    id: 6,
    title: "Maybelline",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "130000MMK",
    image: "./images/skin-care/S7.png",
  },
  {
    id: 7,
    title: "Maybelline",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "130000MMK",
    image: "./images/skin-care/S8.png",
  },
  {
    id: 8,
    title: "Maybelline",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "130000MMK",
    image: "./images/skin-care/S6.png",
  },
  {
    id: 9,
    title: "Maybelline",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "130000MMK",
    image: "./images/skin-care/S9.png",
  },
  {
    id: 10,
    title: "Maybelline",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "170000MMK",
    image: "./images/skin-care/S10.png",
  },
  {
    id: 11,
    title: "Maybelline",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "430000MMK",
    image: "./images/skin-care/S11.png",
  },
  {
    id: 12,
    title: "Maybelline",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "53000MMK",
    image: "./images/skin-care/S12.png",
  },
  {
    id: 13,
    title: "Maybelline",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "230000MMK",
    image: "./images/skin-care/S13.png",
  },
  {
    id: 14,
    title: "Maybelline",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "120000MMK",
    image: "./images/skin-care/S14.png",
  },
  {
    id: 15,
    title: "Maybelline",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "110000MMK",
    image: "./images/skin-care/S14.png",
  },
  {
    id: 16,
    title: "Maybelline",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "70000MMK",
    image: "./images/skin-care/S16.png",
  },
];

const arrivaldata = [
  {
    id: 1,
    title: "Chanel",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "130000MMK",
    image: "./images/Lipstick/L6.png",
  },
  {
    id: 2,
    title: "Chanel",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "180000MMK",
    image: "./images/skin-care/S2.png",
  },
  {
    id: 3,
    title: "Chanel",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "240000MMK",
    image: "./images/skin-care/S3.png",
  },
  {
    id: 4,
    title: "Chanel",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "330000MMK",
    image: "./images/skin-care/S5.png",
  },
  {
    id: 5,
    title: "Chanel",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "190000MMK",
    image: "./images/skin-care/S5.png",
  },
  {
    id: 6,
    title: "Chanel",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "130000MMK",
    image: "./images/skin-care/S7.png",
  },
  {
    id: 7,
    title: "Chanel",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "130000MMK",
    image: "./images/skin-care/S8.png",
  },
  {
    id: 8,
    title: "Chanel",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "130000MMK",
    image: "./images/skin-care/S6.png",
  },
  {
    id: 9,
    title: "Chanel",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "130000MMK",
    image: "./images/skin-care/S9.png",
  },
  {
    id: 10,
    title: "Chanel",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "170000MMK",
    image: "./images/skin-care/S10.png",
  },
  {
    id: 11,
    title: "Chanel",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "430000MMK",
    image: "./images/skin-care/S11.png",
  },
  {
    id: 12,
    title: "Chanel",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "53000MMK",
    image: "./images/skin-care/S12.png",
  },
  {
    id: 13,
    title: "Chanel",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "230000MMK",
    image: "./images/skin-care/S13.png",
  },
  {
    id: 14,
    title: "Chanel",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "120000MMK",
    image: "./images/skin-care/S14.png",
  },
  {
    id: 15,
    title: "Chanel",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "110000MMK",
    image: "./images/skin-care/S14.png",
  },
  {
    id: 16,
    title: "Chanel",
    name: "Fraijour Original Herb Wormwood Calming Toner",
    price: "70000MMK",
    image: "./images/skin-care/S16.png",
  },
];

export default function Swiperproduct({ arrival }) {
  const PromotionSwiper = () => {
    return (
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={
          window.innerWidth > 921 ? 4 : window.innerWidth > 581 ? 3 : 2
        }
        // breakpoints={
        //   (window.innerWidth > 581((slidesPerView = [3])),
        //   window.innerWidth > 921((slidesPerView = [4])))
        // }
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {promotiondata.map((user) => (
          <SwiperSlide key={user.id}>
            <article className="producthome">
              <h4 className="producthome-brand">{user.title}</h4>
              <div className="producthome-img">
                <img src={user.image} alt="" />
              </div>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>

              <div className="producthome-info">
                <h5>{user.name}</h5>
                <h4>{user.price}</h4>
              </div>
              <div className="wrapperhome">
                <div className="iconhome">
                  <div className="tooltip righthome">Add to Cart</div>
                  <a href="#" className="carthome">
                    <i className="fas fa-shopping-cart"></i>
                  </a>
                </div>

                <div className="iconhome">
                  <div className="tooltip tophome">Favoriate</div>
                  <a href="#" className="producthome-wish">
                    <i className="fa fa-heart "></i>
                  </a>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  const NewarrivalSwiper = () => {
    return (
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={
          window.innerWidth > 921 ? 4 : window.innerWidth > 581 ? 3 : 2
        }
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {arrivaldata.map((user) => (
          <SwiperSlide key={user.id}>
            <article className="producthome">
              <h4 className="producthome-brand">{user.title}</h4>
              <div className="producthome-img">
                <img src={user.image} alt="" />
              </div>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>

              <div className="producthome-info">
                <h5>{user.name}</h5>
                <h4>{user.price}</h4>
              </div>
              <div className="wrapperhome">
                <div className="iconhome">
                  <div className="tooltip righthome">Add to Cart</div>
                  <a href="#" className="carthome">
                    <i className="fas fa-shopping-cart"></i>
                  </a>
                </div>

                <div className="iconhome">
                  <div className="tooltip tophome">Favoriate</div>
                  <a href="#" className="producthome-wish">
                    <i className="fa fa-heart "></i>
                  </a>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  return arrival ? <PromotionSwiper /> : <NewarrivalSwiper />;
}
