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
import Detailfile from "./components/single/Detailfile";
import { shop } from "./components/shopdata2";
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
        <Route path="/detailfile/:id" element={<Detailfile />} />
      </Routes>
    </div>
  );
}

export default App;
