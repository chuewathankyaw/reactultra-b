import React, { Component, useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bestseller from "./pages/bestseller/Bestseller";

import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";

import Wishlist from "./pages/wishlist/Wishlist";
import { HairandBody } from "./pages/shop/hairandbody/HairandBody";
import Lipstick from "./pages/shop/lipstick/Lipstick";
import Makeup from "./pages/shop/makeup/Makeup";
import Skincare from "./pages/shop/skincare/Skincare";
import LoginandRegister from "./pages/loginlogout/LoginandRegister";
import Single from "./pages/single/Single";

import DetailSkinFoundation from "./components/single/DetailSkinFoundation";
import DetailSkinSomebyMi from "./components/single/DetailSkinSomebyMi";
import DetailSkinInnifree from "./components/single/DetailSkinInnifree";
import DetailMakeupFoun from "./components/single/DetailMakeupFoun";
import DetailMakeupEye from "./components/single/DetailMakeupEye";
import DetailMakeupTwoway from "./components/single/DetailMakeupTwoway";
import DetailLipFoun from "./components/single/DetailLipFoun";
import DetailLipChanel from "./components/single/DetailLipChanel";
import DetailLipLoreal from "./components/single/DetailLipLoreal";
import DetailHairFoun from "./components/single/DetailHairFoun";
import DetailHairLotion from "./components/single/DetailHairLotion";
import DetailHairShower from "./components/single/DetailHairShower";
import DetailBestseller from "./components/single/DetailBestseller";
import Search from "./components/searchbox/Search";

import { shop } from "./components/shopdata2";
import Head from "./components/head/Head";
import { skin_fraijour } from "./components/shopdata";

import CartPage1 from "./pages/cart/CartPage";
import DetailPromotion from "./components/single/DetailPromotion";
function App() {
  // const { skincareData } = shop.map((item)=> item.skin_fraijour);
  const shopdata = shop;
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (parent, product) => {
    // const productExit = cartItems
    //   .filter((item) => item.id === parent.id)
    //   .find((pid) => pid.id === product.id);

    const productExit = cartItems.find((item) =>
      item.id == parent.id
        ? cartItems.find((pid) => pid == product.id)
        : console.log("no item here product exit", cartItems)
    );

    console.log("productExit", productExit);
    console.log("productExit in", cartItems);

    console.log("parent id exits is", parent.id);

    console.log("product exits is", product.id);

    if (productExit) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit2 = cartItems.find((item) => item.id === product.id);

    // if product is exit and its qty is 1 then we will run a fun  setCartItem
    // inside  setCartItem we will run filter to check if item.id is match to product.id
    // if the item.id is doesnt match to product.id then that items are display in cart
    // else
    if (productExit2.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      // if product is exit and qty  of that produt is not equal to 1
      // then will run function call setCartItem
      // inside setCartItem we will run map method
      // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExit2, qty: productExit2.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <div className="App">
      <Head cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/hairandbody"
          element={<HairandBody shopdata={shopdata} addToCart={addToCart} />}
        />
        <Route
          path="/lipstick"
          element={<Lipstick shopdata={shopdata} addToCart={addToCart} />}
        />
        <Route
          path="/makeup"
          element={<Makeup shopdata={shopdata} addToCart={addToCart} />}
        />
        <Route
          path="/skincare"
          element={<Skincare shopdata={shopdata} addToCart={addToCart} />}
        />
        <Route path="/bestseller" element={<Bestseller />} />
        <Route path="/login" element={<LoginandRegister />} />
        <Route path="/single" element={<Single />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/shoppingcart"
          element={
            <CartPage1
              cartItems={cartItems}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
            />
          }
        />

        <Route
          path="/detailskinfoundation/:id"
          element={<DetailSkinFoundation shopdata={shopdata} />}
        />
        <Route
          path="/detailskinsomebymi/:id"
          element={<DetailSkinSomebyMi shopdata={shopdata} />}
        />
        <Route
          path="/detailskininnifree/:id"
          element={<DetailSkinInnifree shopdata={shopdata} />}
        />

        <Route
          path="/detailmakupfoundation/:id"
          element={<DetailMakeupFoun shopdata={shopdata} />}
        />
        <Route
          path="/detailmakupeyeshadow/:id"
          element={<DetailMakeupEye shopdata={shopdata} />}
        />
        <Route
          path="/detailmakuptwoway/:id"
          element={<DetailMakeupTwoway shopdata={shopdata} />}
        />

        <Route
          path="/detaillipfoundation/:id"
          element={<DetailLipFoun shopdata={shopdata} />}
        />
        <Route
          path="/detaillipchanel/:id"
          element={<DetailLipChanel shopdata={shopdata} />}
        />
        <Route
          path="/detailliploreal/:id"
          element={<DetailLipLoreal shopdata={shopdata} />}
        />

        <Route
          path="/detailhairfoundation/:id"
          element={<DetailHairFoun shopdata={shopdata} />}
        />
        <Route
          path="/detailhairlotion/:id"
          element={<DetailHairLotion shopdata={shopdata} />}
        />
        <Route
          path="/detailhairshower/:id"
          element={<DetailHairShower shopdata={shopdata} />}
        />

        <Route
          path="/detailbestseller/:id"
          element={<DetailBestseller shopdata={shopdata} />}
        />

        <Route
          path="/detailpromotion/:id"
          element={<DetailPromotion />}
        />
      </Routes>
    </div>
  );
}

export default App;
