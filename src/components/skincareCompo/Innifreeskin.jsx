import React, { Component } from "react";
import { Link, useRoutes } from "react-router-dom";
import Skincare from "../../pages/shop/skincare/Skincare";
import "../shop.css";
import { shop, skin_innifree } from "../shopdata2";

class Innifreeskin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divcontainer: false,
    };
  }
  Handlechange = () => {
    this.setState((state) => ({
      divcontainer: !state.divcontainer,
    }));
  };

  render() {
    const x = this.state.divcontainer;

    return (
      <section className="foundation-container container">
        <h3 className="foundation-title capital">Innifree</h3>
        <div className="foundation-product-container container">
          {shop.map((item) =>
            item.id == 3
              ? item.skin_innifree
                  .filter((user) => user.id < 5)
                  .map((sub) => (
                    <Link
                      to={` 
                      /detailfile/${sub.id}
                      `}
                    >
                      <article className="product">
                        <h4 className="product-brand">{sub.title}</h4>
                        <div className="product-img">
                          <img src={sub.product_image} alt="" />
                        </div>
                        <div className="star">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>

                        <div className="product-info">
                          <h5>{sub.name}</h5>
                          <h4>{sub.price}</h4>
                        </div>
                        <div className="wrapper">
                          <div className="icon">
                            <div className="tooltip right">Add to Cart</div>
                            <a href="#" className="cart">
                              <i className="fas fa-shopping-cart"></i>
                            </a>
                          </div>

                          <div className="icon">
                            <div className="tooltip top">Favoriate</div>
                            <a href="#" className="product-wish">
                              <i className="fa fa-heart "></i>
                            </a>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))
              : ""
          )}
        </div>
        {x && (
          <div className="foundation-product-container container topgap">
            {shop.map((item) =>
              item.id == 3
                ? item.skin_innifree
                    .filter((user) => user.id >= 5)
                    .map((sub) => (
                      <Link
                        to={`
                      /detailfile/${sub.id}
                    `}
                      >
                        <article className="product">
                          <h4 className="product-brand">{sub.title}</h4>
                          <div className="product-img">
                            <img src={sub.product_image} alt="" />
                          </div>
                          <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>

                          <div className="product-info">
                            <h5>{sub.name}</h5>
                            <h4>{sub.price}</h4>
                          </div>
                          <div className="wrapper">
                            <div className="icon">
                              <div className="tooltip right">Add to Cart</div>
                              <a href="#" className="cart">
                                <i className="fas fa-shopping-cart"></i>
                              </a>
                            </div>

                            <div className="icon">
                              <div className="tooltip top">Favoriate</div>
                              <a href="#" className="product-wish">
                                <i className="fa fa-heart "></i>
                              </a>
                            </div>
                          </div>
                        </article>
                      </Link>
                    ))
                : ""
            )}
          </div>
        )}

        {/* See more Button */}

        <div
          className={"seemorebtn " + (x ? "faq_minus" : "")}
          onClick={this.Handlechange}
        >
          <div>
            <h4 className="seemore-text">{x ? "See Less" : "See More"}</h4>
          </div>
          <div className="faq_icon">
            <i
              className={x ? "uil uil-minus-circle" : "uil uil-plus-circle"}
            ></i>
          </div>
        </div>
      </section>
    );
  }
}
export default Innifreeskin;
