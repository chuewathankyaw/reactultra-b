import React, { Component } from "react";

import { shop } from "../shopdata2";
import { useParams } from "react-router-dom";
import DetailForProduct from "./detailproduct/Detailforproduct";
import Head from "../head/Head";
import Footer from "../footer/Footer";

function DetailSkinFoundation() {
  const productid = useParams();
  console.log("prodcct id", productid.id);

  return (
    <>
      <Head />
      <div>
        {shop.map((item) =>
          item.id === 1
            ? item.skin_fraijour.map(
                (user) =>
                  user.id == productid.id ? (
                    <DetailForProduct key={user.id} product={user} />
                  ) : (
                    " "
                  )
                // user.id === productid.id
              )
            : ""
        )}
      </div>
      <Footer />
    </>
  );
}

export default DetailSkinFoundation;

//
<>{/* <h1>Hello i am prodict id of {user.id}</h1> */}</>;
// ) : (
// console.log(
//   " i am product id of true",
//   user.id,
//   user.detail_image
// )
// console.log("i am error of id ", user.id)
// );
// }
// user.id == productid.id
// <DetailForProduct key={user.id} product={user} />
// )
// : " "
//    if (item.id === 2) {
//     item.skin_somebymi.map((user) =>
//       user.id == productid.id ? (
//         <DetailForProduct key={user.id} product={user} />
//       ) : (
//         " "
//       )
//     );
//   } else if (item.id === 3) {
//     item.skin_innifree.map((user) =>
//       user.id == productid.id ? (
//         <DetailForProduct key={user.id} product={user} />
//       ) : (
//         " "
//       )
//     );
//   } else if (item.id === 4) {
//     item.makeup_foundation.map((user) =>
//       user.id == productid.id ? (
//         <DetailForProduct key={user.id} product={user} />
//       ) : (
//         " "
//       )
//     );
//   } else if (item.id === 5) {
//     item.makeup_eyeshadow.map((user) =>
//       user.id == productid.id ? (
//         <DetailForProduct key={user.id} product={user} />
//       ) : (
//         " "
//       )
//     );
//   } else if (item.id === 6) {
//     item.makeup_twoway.map((user) =>
//       user.id == productid.id ? (
//         <DetailForProduct key={user.id} product={user} />
//       ) : (
//         " "
//       )
//     );
//   } else if (item.id === 7) {
//     item.lipstick_foundation.map((user) =>
//       user.id == productid.id ? (
//         <DetailForProduct key={user.id} product={user} />
//       ) : (
//         " "
//       )
//     );
//   } else if (item.id === 8) {
//     item.lipstick_chanel.map((user) =>
//       user.id == productid.id ? (
//         <DetailForProduct key={user.id} product={user} />
//       ) : (
//         " "
//       )
//     );
//   } else if (item.id === 9) {
//     item.lipstick_loreal.map((user) =>
//       user.id == productid.id ? (
//         <DetailForProduct key={user.id} product={user} />
//       ) : (
//         " "
//       )
//     );
//   } else if (item.id === 10) {
//     item.hair_themixbysu.map((user) =>
//       user.id == productid.id ? (
//         <DetailForProduct key={user.id} product={user} />
//       ) : (
//         " "
//       )
//     );
//   } else if (item.id === 11) {
//     item.hair_bodylotion.map((user) =>
//       user.id == productid.id ? (
//         <DetailForProduct key={user.id} product={user} />
//       ) : (
//         " "
//       )
//     );
//   } else if (item.id === 12) {
//     item.hair_showergel.map((user) =>
//       user.id == productid.id ? (
//         <DetailForProduct key={user.id} product={user} />
//       ) : (
//         " "
//       )
//     );
//   }
// }

// item.id === 1
// ? item.skin_fraijour.map(
//     (user) =>
//       user.id == productid.id ? (
//         <DetailForProduct key={user.id} product={user} />
//       ) : (
//         " "
//       )

// user.id === productid.id
//       )
// : ""

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
