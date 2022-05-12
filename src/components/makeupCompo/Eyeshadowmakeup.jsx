import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../shop.css";
import { shop } from "../shopdata2";

class EyeShadowmakeup extends Component {
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
    const addToCart = this.props.addToCart;
    const addToWish = this.props.addToWish;

    const x = this.state.divcontainer;
    const shopproducts = this.props.products;
    return (
      <section className="foundation-container container">
        <h3 className="foundation-title capital">Eye Shadow</h3>
        <div className="foundation-product-container container">
          {shopproducts.map((item) =>
            item.id == 5
              ? item.makeup_eyeshadow
                  .filter((user) => user.id < 69)
                  .map((user) => (
                    <article className="product">
                      <Link to={`/detailmakupeyeshadow/${user.id}`}>
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
                          <h4>{user.price}MMK</h4>
                        </div>
                      </Link>
                      <div className="wrapper">
                        <div className="icon">
                          <div className="tooltip right">Add to Cart</div>
                          <button
                            className="cart"
                            onClick={() => addToCart(user)}
                          >
                            <i className="fas fa-shopping-cart"></i>
                          </button>
                        </div>

                        <div className="icon">
                          <div className="tooltip top">Favoriate</div>
                          <button
                            className="product-wish"
                            onClick={() => addToWish(item, user)}
                          >
                            <i className="fa fa-heart "></i>
                          </button>
                        </div>
                      </div>
                    </article>
                  ))
              : ""
          )}
        </div>

        {x && (
          <div className="foundation-product-container container topgap">
            {shopproducts.map((item) =>
              item.id == 5
                ? item.makeup_eyeshadow
                    .filter((user) => user.id >= 69)
                    .map((user) => (
                      <article className="product">
                        <Link to={`/detailmakupeyeshadow/${user.id}`}>
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
                            <h4>{user.price}MMK</h4>
                          </div>
                        </Link>
                        <div className="wrapper">
                          <div className="icon">
                            <div className="tooltip right">Add to Cart</div>
                            <button
                              className="cart"
                              onClick={() => addToCart(user)}
                            >
                              <i className="fas fa-shopping-cart"></i>
                            </button>
                          </div>

                          <div className="icon">
                            <div className="tooltip top">Favoriate</div>
                            <button
                              className="product-wish"
                              onClick={() => addToWish(item, user)}
                            >
                              <i className="fa fa-heart "></i>
                            </button>
                          </div>
                        </div>
                      </article>
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
export default EyeShadowmakeup;
