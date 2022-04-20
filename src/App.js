import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Blog from "./pages/blog/Blog";
import Wishlist from "./pages/wishlist/Wishlist";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
