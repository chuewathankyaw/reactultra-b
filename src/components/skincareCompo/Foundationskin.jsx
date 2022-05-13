import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../shop.css";
import { skin_fraijour, skin_somebymi } from "../shopdata";
import { shop } from "../shopdata2";

// export const FoundationArea = () => {
class FoundationArea extends Component {
  // state = {
  //   divcontainer: false,
  // };
  constructor(props) {
    super(props);
    console.log("there are props of foundation", this.props.products);
    // console.log("there are props of foundation", this.props.addToCart);

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

    // console.log("The skincaer skincare argus1 is", addToCart);
    const x = this.state.divcontainer;
    const shopproducts = this.props.products;
    console.log(
      "shop data of foundation are inside rander id is asldkfsld",
      shopproducts
    );
    console.log("real shop data of foundation are inside rander 2", shop);
    return (
      <section className="foundation-container container">
        <h3 className="foundation-title capital">Fraijour</h3>
        <div className="foundation-product-container container">
          {shopproducts.map((item) =>
            item.id == 1
              ? item.skin_fraijour
                  .filter((user) => user.id < 9)
                  .map((user) => (
                    <article className="product" key={user.id}>
                      <Link to={`/detailskinfoundation/${user.id}`}>
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
                          <h4>{user.price} MMK</h4>
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
                            onClick={() => addToWish(user)}
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
              item.id == 1
                ? item.skin_fraijour
                    .filter((user) => user.id >= 9)
                    .map((user) => (
                      <article className="product">
                        <Link to={`/detailskinfoundation/${user.id}`}>
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
                            <h4>{user.price} MMK</h4>
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
                              onClick={() => addToWish(user)}
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

export default FoundationArea;
