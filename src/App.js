import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bestseller from "./pages/bestseller/Bestseller";

import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Hairbody from "./pages/shop/Hairbody";
import Lipstick from "./pages/shop/Lipstick";
import Makeup from "./pages/shop/Makeup";
import Skincare from "./pages/shop/Skincare";
import Wishlist from "./pages/wishlist/Wishlist";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/hairbody" element={<Hairbody />} />
        <Route path="/lipstick" element={<Lipstick />} />
        <Route path="/makeup" element={<Makeup />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/bestseller" element={<Bestseller />} />
      </Routes>
    </div>
  );
}

export default App;
