import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div>
      <div id="hero" class="d-flex align-items-center">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 p-5 pt-2 pt-lg-2 order-2 order-lg-2 d-flex flex-column justify-content-center">
              <h1>
                Helping you to Learn and <br />
                Grow
              </h1>
              <ul>
                <li>
                  <i class="ri-check-line"></i> Dolorem ratione dolorum
                </li>
                <li>
                  <i class="ri-check-line"></i> Quo nihil natus ea non pariatur
                  optio occaecati
                </li>
                <li>
                  <i class="ri-check-line"></i> Duis aute irure dolor in
                  reprehenderit in
                </li>
              </ul>
              <div class="mt-3">
                <a href="#about" class="btn-get-started scrollto">
                  Get Started
                </a>
                <a href="" class="btn-get-quote">
                  Watch demo
                </a>
              </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2 hero-img" />
            <img src="assets/img/hero-img.png" class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
