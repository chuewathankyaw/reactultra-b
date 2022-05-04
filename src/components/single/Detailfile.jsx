import React, { Component } from "react";
import "./detail.css";
import { shop } from "../shopdata2";
import { useParams } from "react-router-dom";
import { skin_fraijour } from "../shopdata";

function Detailfile() {
  const productid = useParams();
  console.log("prodcct id", productid.id);

  return (
    <div>
      {shop.map((item) =>
        item.id === 1
          ? item.skin_fraijour.map(
              (user) =>
                user.id == productid.id ? (
                  <div className="app">
                    <div className="details" key={user.id}>
                      <div className="big-img">
                        <img src={user.detail_image[0]} alt=" " />
                      </div>

                      <div className="box">
                        <div className="row">
                          <h2>{user.title}</h2>
                          <span>{user.price}</span>
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
                            <img src={img} alt="" />
                          ))}
                        </div>
                        <button className="cart">Add to cart</button>
                      </div>
                    </div>
                  </div>
                ) : (
                  " "
                )
              // user.id === productid.id
            )
          : ""
      )}
    </div>
  );
}

export default Detailfile;

// class Detailfile extends Component {
//   state = shop;

//   render() {
//     const products = this.state;
//     console.log(products);

//     return (
//       <div className="app">
//         {products.map((item) =>
//           item.id === 1
//             ? item.skin_fraijour.filter((user) => user.id === 3)
//               ? console.log("hello Hello tae tae i am  id 3")
//               : console.log(" i am error")
//             : " "
//         )}
//       </div>
//     );
//   }
// }

{
  /* .map( */
}
{
  /* (user) => console.log(user.colors) */
}
{
  /* 
        )}
      // </div>
    );
  }
} */
}

// export default Getid;
