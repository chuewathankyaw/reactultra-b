import "./head.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

export default function Head({ cartItems }) {
  const [MobileMenu, setMobileMenu] = useState(false);

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
                    <Link to="/skincare">Skincare</Link>
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
              <img src="../images/01.png" alt="" />
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
            <Link to="/search" id="search">
              <i class="uil uil-search"></i>
            </Link>
            <Link to="/login" className="login-nav" id="login">
              <i className="uil uil-user "></i>
            </Link>
            <Link to="/shoppingcart" id="shopping" className="shoppingcart">
              <span>
                <i class="uil uil-shopping-bag"></i>
              </span>
              <span>{cartItems.length === 0 ? "0" : cartItems.length}</span>
            </Link>
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

        {/* -- cart htoo lay -- */}
      </nav>
    </section>
  );
}
