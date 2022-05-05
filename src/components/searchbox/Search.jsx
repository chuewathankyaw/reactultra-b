import "./search.css";
import { skin_fraijour } from "../shopdata";
import React, { useState } from "react";
import { shop } from "../shopdata2";
import "../shop.css";
import { Link } from "react-router-dom";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="searchboxcontainer">
        <div className="searchcontainer">
          <Link to="/" className="logo1s">
            <img src="images/01.png" alt="" />
          </Link>
          <input
            id="searchInput"
            type="text"
            placeholder="search...."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <section className="container">
          <div className="foundation-product-container container">
            {
              skin_fraijour
                .filter((val) => {
                  if (searchTerm == "") {
                    return val;
                  } else if (
                    val.title.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })

                .map((user) => {
                  return (
                    <article className="product">
                      <h4 className="product-brand">{user.title}</h4>
                      <div className="product-img">
                        <img src={user.image} alt="" />
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
                  );
                })

              // .map((val) =>
              //   val.id === 1
              //     ? val.skin_fraijour.map((val) => (
              //         <div className="searchproduct">
              //           <article className="producthome">
              //             <h4 className="producthome-brand">{val.title}</h4>
              //             <div className="producthome-img">
              //               <img src={val.product_image} alt="" />
              //             </div>
              //             <div className="star">
              //               <i className="fas fa-star"></i>
              //               <i className="fas fa-star"></i>
              //               <i className="fas fa-star"></i>
              //               <i className="fas fa-star"></i>
              //               <i className="fas fa-star"></i>
              //             </div>

              //             <div className="producthome-info">
              //               <h5>{val.name}</h5>
              //               <h4>{val.price}</h4>
              //             </div>
              //             <div className="wrapperhome">
              //               <div className="iconhome">
              //                 <div className="tooltip righthome">Add to Cart</div>
              //                 <a href="#" className="carthome">
              //                   <i className="fas fa-shopping-cart"></i>
              //                 </a>
              //               </div>

              //               <div className="iconhome">
              //                 <div className="tooltip tophome">Favoriate</div>
              //                 <a href="#" className="producthome-wish">
              //                   <i className="fa fa-heart "></i>
              //                 </a>
              //               </div>
              //             </div>
              //           </article>
              //         </div>
              //       ))
              //     : " "
            }
          </div>
        </section>
      </div>
    </>
  );
}
export default Search;
