import "./head.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

export default function Head() {
  const [MobileMenu, setMobileMenu] = useState(false);
  const [show, setSearch] = useState(false);
  const [show1, setCart] = useState(false);
  return (
    <section className="nav-section">
      <nav>
        <div className="nav_container">
          <ul
            className={MobileMenu ? "nav-links-MobileMenu" : "link "}
            onClick={() => setMobileMenu(false)}
          >
            <li>
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
              <Link to="/BsetSeller">Bset-Seller</Link>
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
            <button id="search" onClick={() => setSearch(!show)}>
              <i class="uil uil-search"></i>
            </button>
            <a class="login-nav" href="./signin-signup.html" id="login">
              <i class="uil uil-user"></i>
            </a>
            <button id="shopping" onClick={() => setCart(!show1)}>
              <i class="uil uil-shopping-bag"></i>
            </button>
          </div>
          <div className="btn2">
            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <i className="uil uil-multiply"></i>
              ) : (
                <i className="uil uil-bars"></i>
              )}
            </button>
          </div>
        </div>
        {show ? (
          <div id="searchbox" className="search_warp hide">
            <div class="search_box">
              <input type="text" className="input" placeholder="Search..." />
              <div className="btn ">
                <i class="uil uil-search"></i>
              </div>
            </div>
          </div>
        ) : null}
        {/* -- cart htoo lay -- */}
        {show1 ? (
          <div className="cart1">
            <h2 className="section-header">CART</h2>
            <div className="cart-row">
              <span className="cart-item cart-header cart-column">ITEM</span>
              <span className="cart-price cart-header cart-column">PRICE</span>
              <span className="cart-quantity cart-header cart-column">
                QUANTITY
              </span>
            </div>
            <div className="cart-items"></div>
            <div className="cart-total">
              <strong className="cart-total-title">Total</strong>
              <span className="cart-total-price">$0</span>
            </div>
            <button class="btn1 btn-primary1 btn-purchase" type="button">
              PURCHASE
            </button>
            <button id="close-cart" onClick={() => setCart(!show1)}>
              <i class="uil uil-multiply"></i>
            </button>
          </div>
        ) : null}
      </nav>
    </section>
  );
}
