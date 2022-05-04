import React, { Component } from "react";
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
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hairandbody" element={<HairandBody />} />
        <Route path="/lipstick" element={<Lipstick />} />
        <Route path="/makeup" element={<Makeup />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/bestseller" element={<Bestseller />} />
        <Route path="/login" element={<LoginandRegister />} />
        <Route path="/single" element={<Single />} />

        <Route
          path="/detailskinfoundation/:id"
          element={<DetailSkinFoundation />}
        />
        <Route
          path="/detailskinsomebymi/:id"
          element={<DetailSkinSomebyMi />}
        />
        <Route
          path="/detailskininnifree/:id"
          element={<DetailSkinInnifree />}
        />

        <Route
          path="/detailmakupfoundation/:id"
          element={<DetailMakeupFoun />}
        />
        <Route path="/detailmakupeyeshadow/:id" element={<DetailMakeupEye />} />
        <Route path="/detailmakuptwoway/:id" element={<DetailMakeupTwoway />} />

        <Route path="/detaillipfoundation/:id" element={<DetailLipFoun />} />
        <Route path="/detaillipchanel/:id" element={<DetailLipChanel />} />
        <Route path="/detailliploreal/:id" element={<DetailLipLoreal />} />

        <Route path="/detailhairfoundation/:id" element={<DetailHairFoun />} />
        <Route path="/detailhairlotion/:id" element={<DetailHairLotion />} />
        <Route path="/detailhairshower/:id" element={<DetailHairShower />} />

        <Route path="/detailbestseller/:id" element={<DetailBestseller />} />
      </Routes>
    </div>
  );
}

export default App;
