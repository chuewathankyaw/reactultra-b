import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../shop.css";
import { shop } from "../shopdata2";

class Bodylotionhair extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divcontainer: false,
    };
  }
  Handlechange = (e) => {
    this.setState((state) => ({
      divcontainer: !state.divcontainer,
    }));
  };

  render() {
    const x = this.state.divcontainer;
    return (
      <section className="foundation-container container">
        <h3 className="foundation-title capital">Body Lotion</h3>
        <div className="foundation-product-container container">
          {shop.map((item) =>
            item.id == 11
              ? item.hair_bodylotion
                  .filter((user) => user.id < 5)
                  .map((user) => (
                    <Link to={`/detailfile/${user.id}`}>
                      <article className="product">
                        <h4 className="product-brand">{user.title}</h4>
                        <div className="product-img">
                          <img src={user.product_image} alt="" />
                        </div>
                        <div className="star">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>

                        <div className="product-info">
                          <h5>{user.name}</h5>
                          <h4>{user.price}</h4>
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
              item.id == 11
                ? item.hair_bodylotion
                    .filter((user) => user.id >= 5)
                    .map((user) => (
                      <Link to={`/detailfile/${user.id}`}>
                        <article className="product">
                          <h4 className="product-brand">{user.title}</h4>
                          <div className="product-img">
                            <img src={user.product_image} alt="" />
                          </div>
                          <div className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>

                          <div className="product-info">
                            <h5>{user.name}</h5>
                            <h4>{user.price}</h4>
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
export default Bodylotionhair;
