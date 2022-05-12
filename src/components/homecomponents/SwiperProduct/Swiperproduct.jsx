import { Swiper, SwiperSlide } from "swiper/react";

import "./swiperproduct.css";
import "swiper/css";
import React, { useState } from "react";
import "../homeproduct.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { shop } from "../../shopdata2";
import { Link } from "react-router-dom";

// SwiperCore.use([Navigation, Pagination, Scrollbar]);

export default function Swiperproduct({ addToCart, arrival }) {
  const PromotionSwiper = ({ addToCart }) => {
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
        {shop.map((item) =>
          item.id == 14
            ? item.promotiondata.map((user) => (
                <SwiperSlide key={user.id}>
                  <article className="producthome">
                    <Link to={`/detailpromotion/${user.id}`}>
                      <h4 className="producthome-brand">{user.title}</h4>
                      <div className="producthome-img">
                        <img src={user.product_image} alt="" />
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
                        <h4>{user.price}MMK</h4>
                      </div>
                    </Link>
                    <div className="wrapperhome">
                      <div className="iconhome">
                        <div className="tooltip righthome">Add to Cart</div>
                        <button
                          className="carthome"
                          onClick={() => addToCart(user)}
                        >
                          <i className="fas fa-shopping-cart"></i>
                        </button>
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
              ))
            : " "
        )}
      </Swiper>
    );
  };

  const NewarrivalSwiper = ({ addToCart }) => {
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
        {shop.map((item) =>
          item.id === 13
            ? item.arrivaldata.map((user) => (
                <SwiperSlide key={user.id}>
                  <article className="producthome">
                    <Link to={`/detailnewarrival/${user.id}`}>
                      <h4 className="producthome-brand">{user.title}</h4>
                      <div className="producthome-img">
                        <img src={user.product_image} alt="" />
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
                        <h4>{user.price}MMK</h4>
                      </div>
                    </Link>
                    <div className="wrapperhome">
                      <div className="iconhome">
                        <div className="tooltip righthome">Add to Cart</div>
                        <button
                          className="carthome"
                          onClick={() => addToCart(user)}
                        >
                          <i className="fas fa-shopping-cart"></i>
                        </button>
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
              ))
            : " "
        )}
      </Swiper>
    );
  };

  return arrival ? (
    <NewarrivalSwiper addToCart={addToCart} />
  ) : (
    <PromotionSwiper addToCart={addToCart} />
  );
}
