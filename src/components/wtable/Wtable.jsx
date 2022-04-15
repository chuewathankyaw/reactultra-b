import "./wtable.css";

export default function Wtable() {
  return (
    <div>
      <div className="header-wishlist">
        <h2>My Wishlist on Ultra-B Website</h2>
      </div>
      <div className="table container">
        <div className="first-tab">
          <h4>Products</h4>
          <h4>Unit Price</h4>
          <h4>Stock Status</h4>
        </div>
        <div className="sec-tab">
          <h4>No products added to the wishlist</h4>
        </div>
      </div>
    </div>
  );
}
