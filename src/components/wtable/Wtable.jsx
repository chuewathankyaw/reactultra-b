import "./wtable.css";
import React from "react";

const Wtable = ({ wishItem, addToWish, decreaseQtyWish }) => {
  const totalprice = wishItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  return (
    // <>
    //   <section className="wish-header">
    //     <div className="wish-header">
    //       <h5>Products</h5>
    //       <h5>Name</h5>
    //       <h5>Price</h5>
    //       <h5>Remove</h5>
    //     </div>
    //   </section>
    //   <section className="wish-items">
    //     <div className="container d_flex">
    //       <div className="wish-details">
    //         {wishItem.length === 0 && (
    //           <h1 className="no-items product">No Items are add in Cart</h1>
    //         )}

    //         {wishItem.map((item) => {
    //           const wishQty = item.price * item.qty;
    //           return (
    //             <div className="wish-list product d_flex">
    //               <div className="wishimg">
    //                 <img src={item.product_image} alt="" />
    //               </div>
    //               <div className="wish-details">
    //                 <h3>{item.title}</h3>
    //                 <h4>
    //                   {item.price}.00 * {item.qty}
    //                   <span>${wishQty}.00</span>
    //                 </h4>
    //               </div>
    //               <div className="wish-items-function">
    //                 <div className="removeWish">
    //                   <button className="removeWish">
    //                     <i className="fa-solid fa-xmark"></i>
    //                   </button>
    //                 </div>

    //                 {/* <div className="wishControl d_flex">
    //                   <button
    //                     className="incCart"
    //                     onClick={() => addToWish(item)}
    //                   >
    //                     <i className="fa fa-plus"></i>
    //                   </button>
    //                   <button
    //                     className="incCart"
    //                     onClick={() => decreaseQty(item)}
    //                   >
    //                     <i className="fa fa-minus"></i>
    //                   </button>
    //                 </div> */}
    //               </div>
    //               <div className="wish-item-price"></div>
    //             </div>
    //           );
    //         })}
    //       </div>

    //       {/* <div className="widh-total product">
    //         <h2>Wish Summary</h2>
    //         <div className="d_flex">
    //           <h4>Total Price : </h4>
    //           <h3>${totalprice}.00</h3>
    //         </div>
    //       </div> */}
    //     </div>
    //   </section>
    // </>

    <>
      <div className="wish-details">
        {wishItem.length === 0 && (
          <h1 className="non">No Items are add in Wishlist</h1>
        )}

        <table className="wish-table">
          <thead className="wish-head">
            <tr className="head-row">
              <th className="product-img">Images</th>
              <th className="product-name">Name</th>
              <th className="product-price">Price</th>
              <th className="product-remove">Remove</th>
            </tr>
          </thead>

          {wishItem.map((item) => {
            const wishQty = item.price * item.qty;
            return (
              <tbody className="table-body">
                <tr className="body-row">
                  <td className="wish-img">
                    <img src={item.product_image} alt="" />
                  </td>
                  <td className="wish-title">{item.title}</td>
                  <td className="wish-price">{item.price}MMK</td>
                  <td className="xmart-icon">
                    <button onClick={() => decreaseQtyWish(item)}>
                      <i class="fa-solid fa-trash-can"></i>{" "}
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
};
export default Wtable;
