import React from "react";
import "./detail.css";
import Colors from "./Colors";
import DetailsThumb from "./DetailsThumb";

class Detail extends React.Component {
  state = {
    products: [
      {
        _id: "1",
        title: "MAY BELLINE",
        src: [
          "images/Lipstick/L9.png",
          "images/Lipstick/L21.png",
          "images/Lipstick/L22.png",
          "images/Lipstick/L23.png",
        ],
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 7000,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
    ],
    index: 0,
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const { products, index } = this.state;
    return (
      <div className="app">
        {products.map((item) => (
          <div className="details" key={item._id}>
            <div className="big-img">
              <img src={item.src[index]} alt="" />
              <DetailsThumb
                images={item.src}
                tab={this.handleTab}
                myRef={this.myRef}
              />
            </div>

            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>MMK{item.price}</span>
              </div>
              <Colors colors={item.colors} />
              <p>{item.description}</p>
              <p>{item.content}</p>
              <button className="cart2">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Detail;
