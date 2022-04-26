import React, { Component } from "react";
import "../shop.css";

class Innifreeskin extends Component {
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
        <h3 className="foundation-title capital">Innisfree</h3>
        <div className="foundation-product-container container">
          <article className="product">
            <h4 className="product-brand">Maybelline</h4>
            <div className="product-img">
              <img src="./images/Makeup/mk12.png" alt="" />
            </div>

            <div className="product-info">
              <h5>Fraijour Original Herb Wormwood Calming Toner</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>23000MMK</h4>
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
                  <i className="fa fa-heart"></i>
                </a>
              </div>
            </div>
          </article>

          <article className="product">
            <h4 className="product-brand">3CE</h4>
            <div className="product-img">
              <img src="./images/Makeup/mk13.png" alt="" />
            </div>

            <div className="product-info">
              <h5>Fraijour Original Herb Wormwood Calming Toner</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>9700MMK</h4>
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
                  <i className="fa fa-heart"></i>
                </a>
              </div>
            </div>
          </article>

          <article className="product">
            <h4 className="product-brand">Maybelline</h4>
            <div className="product-img">
              <img src="./images/Makeup/mk10.png" alt="" />
            </div>

            <div className="product-info">
              <h5>Fraijour Original Herb Wormwood Calming Toner</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>100000MMK</h4>
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
                  <i className="fa fa-heart"></i>
                </a>
              </div>
            </div>
          </article>

          <article className="product">
            <h4 className="product-brand">Maybelline</h4>
            <div className="product-img">
              <img src="./images/Makeup/mk1.png" alt="" />
            </div>

            <div className="product-info">
              <h5>Fraijour Original Herb Wormwood Calming Toner</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>130000MMK</h4>
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
                  <i className="fa fa-heart"></i>
                </a>
              </div>
            </div>
          </article>
        </div>
        {x && (
          <div className="foundation-product-container container topgap">
            <article className="product">
              <h4 className="product-brand">Maybelline</h4>
              <div className="product-img">
                <img src="./images/Makeup/mk12.png" alt="" />
              </div>

              <div className="product-info">
                <h5>
                  Fraijour Original Herb Wormwood Calming Toner asdfasdfsadfsa
                  asf
                </h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>130000MMK</h4>
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
                    <i className="fa fa-heart"></i>
                  </a>
                </div>
              </div>
            </article>

            <article className="product">
              <h4 className="product-brand">Maybelline</h4>
              <div className="product-img">
                <img src="./images/Makeup/mk14.png" alt="" />
              </div>

              <div className="product-info">
                <h5>Herb Wormwood Calming Toner</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>130000MMK</h4>
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
                    <i className="fa fa-heart"></i>
                  </a>
                </div>
              </div>
            </article>

            <article className="product">
              <h4 className="product-brand">Maybelline</h4>
              <div className="product-img">
                <img src="./images/Makeup/mk13.png" alt="" />
              </div>

              <div className="product-info">
                <h5>Fraijour Original Herb Wormwood Calming Toner</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>130000MMK</h4>
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
                    <i className="fa fa-heart"></i>
                  </a>
                </div>
              </div>
            </article>

            <article className="product">
              <h4 className="product-brand">Maybelline</h4>
              <div className="product-img">
                <img src="./images/Makeup/mk2.png" alt="" />
              </div>

              <div className="product-info">
                <h5>Fraijour Original Herb Wormwood Calming Toner</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>130000MMK</h4>
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
                    <i className="fa fa-heart"></i>
                  </a>
                </div>
              </div>
            </article>

            <article className="product">
              <h4 className="product-brand">Maybelline</h4>
              <div className="product-img">
                <img src="./images/Makeup/mk8.png" alt="" />
              </div>

              <div className="product-info">
                <h5>Herb Wormwood Calming Toner</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>

                <h4>130000MMK</h4>
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
                    <i className="fa fa-heart"></i>
                  </a>
                </div>
              </div>
            </article>

            <article className="product">
              <h4 className="product-brand">Maybelline</h4>
              <div className="product-img">
                <img src="./images/Makeup/n2.png" alt="" />
              </div>

              <div className="product-info">
                <h5>Fraijour Original Herb Wormwood Calming Toner</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>130000MMK</h4>
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
                    <i className="fa fa-heart"></i>
                  </a>
                </div>
              </div>
            </article>

            <article className="product">
              <h4 className="product-brand">Maybelline</h4>
              <div className="product-img">
                <img src="./images/Makeup/mk4.png" alt="" />
              </div>

              <div className="product-info">
                <h5>Fraijour Original Herb Wormwood Calming Toner</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>130000MMK</h4>
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
                    <i className="fa fa-heart"></i>
                  </a>
                </div>
              </div>
            </article>

            <article className="product">
              <h4 className="product-brand">Maybelline</h4>
              <div className="product-img">
                <img src="./images/Makeup/mk3.png" alt="" />
              </div>

              <div className="product-info">
                <h5>Fraijour Original Herb Wormwood Calming Toner</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>130000MMK</h4>
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
                    <i className="fa fa-heart"></i>
                  </a>
                </div>
              </div>
            </article>
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
