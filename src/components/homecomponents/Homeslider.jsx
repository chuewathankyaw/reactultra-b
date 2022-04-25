import React from "react";
import "./homeproduct.css";

export default function Homeslider() {
  return (
    <section className="slider-section">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./images/slider.main.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <h2
                className="animated bounceInRight"
                style="animation-delay: 1s"
              >
                Ultra-B
              </h2>
              <p
                className="animated bounceInLeft d-none d-sm-block"
                style="animation-delay: 2s"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ab
                suscipit excepturi nemo voluptatibus obcaecati?
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./images/slider.chanal.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <h2
                className="animated bounceInRight"
                style="animation-delay: 1s"
              >
                CHANAL
              </h2>
              <p
                className="animated bounceInLeft d-none d-sm-block"
                style="animation-delay: 2s"
              >
                The only make up collection you need to look your most chic this
                Seaso-Emirats Woman
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./images/slider.somebymi.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <h2
                className="animated bounceInRight"
                style="animation-delay: 1s"
              >
                SOME BY MI
              </h2>
              <p
                className="animated bounceInLeft d-none d-sm-block"
                style="animation-delay: 2s"
              >
                A serum containing Yuzu extract and niacinamide to diminish the
                appearance of blemishes in 30 days.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./images/slider.franjour.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <h2
                className="animated bounceInRight"
                style="animation-delay: 1s"
              >
                Fraijour
              </h2>
              <p
                className="animated bounceInLeft d-none d-sm-block"
                style="animation-delay: 2s"
              >
                Original Herb Wormwood Calming Watery Cream. Wormwood extract of
                12,000 ppm to provide deep hydration.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./images/slider.innisfree.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <h2
                className="animated bounceInRight"
                style="animation-delay: 1s"
              >
                innisfree
              </h2>
              <p
                className="animated bounceInLeft d-none d-sm-block"
                style="animation-delay: 2s"
              >
                Natural Benefits from Jeju Island, Korea. The #1 beauty brand in
                Korea has officially arrived in the US
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./images/slider.maybelline.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <h2
                className="animated bounceInRight"
                style="animation-delay: 1s"
              >
                Maybelline
              </h2>
              <p
                className="animated bounceInLeft d-none d-sm-block"
                style="animation-delay: 2s"
              >
                Makeup Products, Makeup Tips & Beauty Trends by Maybelline New
                York.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
