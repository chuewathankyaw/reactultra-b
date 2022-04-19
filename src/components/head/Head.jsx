import "./head.css";
import { Link } from "react-router-dom";

export default function Head() {
  return (
    <section class="nav-section">
      <nav>
        <div class="nav_container">
          <ul class="nav_menu">
            <li class="active">
              <Link to="/">Home</Link>
            </li>

            <li id="menu_sub">
              <a href="#">Shop</a>
              <div className="submenu">
                <ul>
                  <li>
                    <a href="/ForUltra-B/skin-care.html">SkinCare</a>
                  </li>
                  <li>
                    <a href="/ForUltra-B/makeup-page.html">Make-Up</a>
                  </li>
                  <li>
                    <a href="/ForUltra-B/Lipstick.html">Lip Stick</a>
                  </li>
                  <li>
                    <a href="/ForUltra-B/hair.html">Hair$Body</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/Bset-Seller">Bset-Seller</Link>
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
          <div class="logo1">
            <img src="images/01.png" alt="" />
          </div>
          <div class="btn">
            <button id="search">
              <i class="uil uil-search"></i>
            </button>
            <a class="login-nav" href="./signin-signup.html" id="login">
              <i class="uil uil-user"></i>
            </a>
            <button id="shopping">
              <i class="uil uil-shopping-bag"></i>
            </button>
          </div>
          <div class="btn2">
            <button id="open-menu-btn">
              <i class="uil uil-bars"></i>
            </button>
            <button id="close-menu-btn">
              <i class="uil uil-multiply"></i>
            </button>
          </div>
        </div>
        <div id="searchbox" class="search_warp hide">
          <div class="search_box">
            <input type="text" class="input" placeholder="Search..." />
            <div class="btn ">
              <i class="uil uil-search"></i>
            </div>
          </div>
        </div>

        {/* -- cart htoo lay --
        <div class="cart1">
          <h2 class="section-header">CART</h2>
          <div class="cart-row">
            <span class="cart-item cart-header cart-column">ITEM</span>
            <span class="cart-price cart-header cart-column">PRICE</span>
            <span class="cart-quantity cart-header cart-column">QUANTITY</span>
          </div>
          <div class="cart-items"></div>
          <div class="cart-total">
            <strong class="cart-total-title">Total</strong>
            <span class="cart-total-price">$0</span>
          </div>
          <button class="btn1 btn-primary1 btn-purchase" type="button">
            PURCHASE
          </button>
          <button id="close-cart">
            <i class="uil uil-multiply"></i>
          </button>
        </div> */}
      </nav>
    </section>
  );
}
