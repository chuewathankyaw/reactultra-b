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
import DetailNewArrival from "./components/single/DetailNewArrival";
function App() {
  // const { skincareData } = shop.map((item)=> item.skin_fraijour);
  const shopdata = shop;
  const [cartItems, setCartItems] = useState([]);
  const [wishItem, setWishItem] = useState([]);

  const addToCart = (product) => {
    const productExit = cartItems.find((item) => item.id === product.id);

    console.log("productExit", productExit);
    console.log("productExit in", cartItems);

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

  const addToWish = (parent, wishproduct) => {
    const wishlistExit = wishItem.find((item) =>
      item.id == parent.id
        ? wishItem.find((pid) => pid === wishproduct.id)
        : console.log("no item here", wishItem)
    );

    if (wishlistExit) {
      setWishItem(
        wishItem.map((item) =>
          item.id === wishproduct.id
            ? { ...wishlistExit, qty: wishlistExit.qty + 1 }
            : item
        )
      );
    } else {
      setWishItem([...wishItem, { ...wishproduct, qty: 1 }]);
    }
  };

  const decreaseQtyWish = (wishproduct) => {
    const wishlistExit2 = wishItem.find((item) => item.id === wishproduct.id);

    if (wishlistExit2.qty === 1) {
      setWishItem(wishItem.filter((item) => item.id !== wishproduct.id));
    } else {
      setWishItem(
        wishItem.map((item) =>
          item.id === wishproduct.id
            ? { ...wishlistExit2, qty: wishlistExit2.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <div className="App">
      <Head cartItems={cartItems} wishItem={wishItem} />
      <Routes>
        <Route
          path="/"
          element={<Home addToCart={addToCart} addToWish={addToWish} />}
        />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishItem={wishItem}
              addToWish={addToWish}
              decreaseQtyWish={decreaseQtyWish}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/hairandbody"
          element={
            <HairandBody
              shopdata={shopdata}
              addToCart={addToCart}
              addToWish={addToWish}
            />
          }
        />
        <Route
          path="/lipstick"
          element={
            <Lipstick
              shopdata={shopdata}
              addToCart={addToCart}
              addToWish={addToWish}
            />
          }
        />
        <Route
          path="/makeup"
          element={
            <Makeup
              shopdata={shopdata}
              addToCart={addToCart}
              addToWish={addToWish}
            />
          }
        />
        <Route
          path="/skincare"
          element={
            <Skincare
              shopdata={shopdata}
              addToCart={addToCart}
              addToWish={addToWish}
            />
          }
        />
        <Route
          path="/bestseller"
          element={<Bestseller addToCart={addToCart} addToWish={addToWish} />}
        />
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
          element={
            <DetailSkinFoundation shopdata={shopdata} addToCart={addToCart} />
          }
        />
        <Route
          path="/detailskinsomebymi/:id"
          element={
            <DetailSkinSomebyMi shopdata={shopdata} addToCart={addToCart} />
          }
        />
        <Route
          path="/detailskininnifree/:id"
          element={
            <DetailSkinInnifree shopdata={shopdata} addToCart={addToCart} />
          }
        />

        <Route
          path="/detailmakupfoundation/:id"
          element={
            <DetailMakeupFoun shopdata={shopdata} addToCart={addToCart} />
          }
        />
        <Route
          path="/detailmakupeyeshadow/:id"
          element={
            <DetailMakeupEye shopdata={shopdata} addToCart={addToCart} />
          }
        />
        <Route
          path="/detailmakuptwoway/:id"
          element={
            <DetailMakeupTwoway shopdata={shopdata} addToCart={addToCart} />
          }
        />

        <Route
          path="/detaillipfoundation/:id"
          element={<DetailLipFoun shopdata={shopdata} addToCart={addToCart} />}
        />
        <Route
          path="/detaillipchanel/:id"
          element={
            <DetailLipChanel shopdata={shopdata} addToCart={addToCart} />
          }
        />
        <Route
          path="/detailliploreal/:id"
          element={
            <DetailLipLoreal shopdata={shopdata} addToCart={addToCart} />
          }
        />

        <Route
          path="/detailhairfoundation/:id"
          element={<DetailHairFoun shopdata={shopdata} addToCart={addToCart} />}
        />
        <Route
          path="/detailhairlotion/:id"
          element={
            <DetailHairLotion shopdata={shopdata} addToCart={addToCart} />
          }
        />
        <Route
          path="/detailhairshower/:id"
          element={
            <DetailHairShower shopdata={shopdata} addToCart={addToCart} />
          }
        />

        <Route
          path="/detailbestseller/:id"
          element={
            <DetailBestseller shopdata={shopdata} addToCart={addToCart} />
          }
        />

        <Route
          path="/detailpromotion/:id"
          element={<DetailPromotion addToCart={addToCart} />}
        />

        <Route
          path="/detailnewarrival/:id"
          element={<DetailNewArrival addToCart={addToCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
