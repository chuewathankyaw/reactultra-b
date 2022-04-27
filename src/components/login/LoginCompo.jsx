import React, { useState } from "react";
import "./login.css";

const LoginCompo = (props) => {
  const [isContainerActive, setIsContainerActive] = useState(false);

  const signUpButton = () => {
    setIsContainerActive(true);
  };
  const signInButton = () => {
    setIsContainerActive(false);
  };

  return (
    <>
      <div
        className={
          "login-container " + (isContainerActive ? "signupmode" : " ")
        }
      >
        <div className="forms-container">
          <div className="signin-signup">
            {/* <!-- for sign in --> */}
            <form action="" className="sign-in-form">
              <h2 className="titlt">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="logbtn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
            {/* <!-- end of sign in --> */}

            {/* <!-- for sign up --> */}
            <form action="" className="sign-up-form">
              <h2 className="titlt">Sign Up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Sign Up" className="logbtn solid" />
              <p className="social-text">Or Sign Up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="login-content">
              <h3>New Here ?</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur veniam in et labore sequi, corporis nihil distinctio
                fugiat, quisquam vitae quidem consequuntur adipisci?
              </p>
              <button
                className="logbtn transparent"
                onClick={signUpButton}
                id="sign-up-btn"
              >
                Sign Up
              </button>
            </div>
            <img src="./images/login.svg" className="image" alt="" />
          </div>

          <div className="panel right-panel">
            <div className="login-content">
              <h3>One of Us ?</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur veniam in et labore sequi, corporis nihil distinctio
                fugiat, quisquam vitae quidem consequuntur adipisci?
              </p>
              <button
                className="logbtn transparent"
                id="sign-in-btn"
                onClick={signInButton}
              >
                Sign In
              </button>
            </div>
            <img src="./images/signup.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginCompo;
