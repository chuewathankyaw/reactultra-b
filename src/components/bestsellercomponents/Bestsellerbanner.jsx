import "./bestseller.css";
// import { AiFillStar } from "react-icons/ai";

export default function Bestsellerbanner() {
  return (
    <div className="best">
      <div className="img1">
        <img src="/images/bestseller.banner.jpg" alt="" />
      </div>
      <div className="best-detail">
        <h2 className="bss">The best seller set for this week</h2>
        <img src="/images/some-by-mi-logo.png" alt="" />
        <h3>aha-bha-pha</h3>
        <h3>30 days miracle sets</h3>
        <span>toner/body cleanser/serum</span>
        <h2 className="price">125000 MMK</h2>

        <div className="star1">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <button className="normal">Buy Now</button>
      </div>
    </div>
  );
}
