import React, { Component } from "react";
import "./detail.css";
import { shop } from "../shopdata2";

export class Detailfile extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = shop;
  //   }

  state = shop;

  //   handleTab = (index) => {
  //     alert(index);
  //   };
  render() {
    // console.log(this.state);
    const products = this.state;
    // console.log(products);

    return (
      <div className="app">
        {products.map(
          (item) =>
            item.id == 1
              ? item.skin_fraijour.map((user) => (
                  <div className="details">
                    <div className="big-img">
                      <img src={user.detail_image[0]} alt=" " />
                    </div>

                    <div className="box">
                      <div className="row">
                        <h2>{user.title}</h2>
                        <span>${user.price}</span>
                      </div>

                      <div className="colors">
                        {user.colors.map((color) => (
                          <button style={{ background: color }}></button>
                        ))}
                      </div>
                      <p>{user.description}</p>
                      <p>{user.content}</p>

                      <div className="thumb">
                        {user.detail_image.map((img) => (
                          <img
                            src={img}
                            alt=""
                            // key={index}
                            // onClick={() => this.handleTab(index)}
                          />
                        ))}
                      </div>
                      <button className="cart">Add to cart</button>
                    </div>
                  </div>
                ))
              : ""
          // console.log(user.detail_image[1])
        )}
      </div>
    );
  }
}

export default Detailfile;
