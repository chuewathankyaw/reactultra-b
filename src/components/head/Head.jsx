import "./head.css";
import { Link } from "react-router-dom";

export default function Head() {
  return (
    <section className="nav-section">
      <nav>
        <div className="nav_container">
          <ul className="nav_menu">
            <li className="active">
              <Link to="/">Home</Link>
            </li>

            <li id="menu_sub">
              <a href="#">Shop</a>
              <div className="submenu">
                <ul>
                  <li>
                    <Link to="/skincare">SkinCare</Link>
                  </li>
                  <li>
                    <Link to="/makeup">Make-up</Link>
                  </li>
                  <li>
                    <Link to="/lipstick">Lip Stick</Link>
                  </li>
                  <li>
                    <Link to="/hairandbody">Hair & body</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/bestseller">Best-Seller</Link>
            </li>
            <li>
              <img src="images/01.png" alt="" />
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="logo1">
            <img src="images/01.png" alt="" />
          </div>
          <div className="btn">
            <button id="search">
              <i className="uil uil-search"></i>
            </button>
            {/* <a className="login-nav" link id="login"> */}
            <Link to="/login" className="login-nav" id="login">
              <i className="uil uil-user "></i>
            </Link>

            <button id="shopping">
              <i className="uil uil-shopping-bag"></i>
            </button>
          </div>
          <div className="btn2">
            <button id="open-menu-btn">
              <i className="uil uil-bars"></i>
            </button>
            <button id="close-menu-btn">
              <i className="uil uil-multiply"></i>
            </button>
          </div>
        </div>
        <div id="searchbox" className="search_warp hide">
          <div className="search_box">
            <input type="text" className="input" placeholder="Search..." />
            <div className="btn ">
              <i className="uil uil-search"></i>
            </div>
          </div>
        </div>

        {/* -- cart htoo lay --
        <div className="cart1">
          <h2 className="section-header">CART</h2>
          <div className="cart-row">
            <span className="cart-item cart-header cart-column">ITEM</span>
            <span className="cart-price cart-header cart-column">PRICE</span>
            <span className="cart-quantity cart-header cart-column">QUANTITY</span>
          </div>
          <div className="cart-items"></div>
          <div className="cart-total">
            <strong className="cart-total-title">Total</strong>
            <span className="cart-total-price">$0</span>
          </div>
          <button className="btn1 btn-primary1 btn-purchase" type="button">
            PURCHASE
          </button>
          <button id="close-cart">
            <i className="uil uil-multiply"></i>
          </button>
        </div> */}
      </nav>
    </section>
  );
}
