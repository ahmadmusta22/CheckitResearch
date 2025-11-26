import React from "react";
import { Link } from "react-router-dom";

const HeroTwo = () => {
  return (
    <div
      className="hero-wrapper hero-2"
      id="hero"
      style={{ backgroundImage: `url("/assets/New folder/1.jpg")` }}
    >
      <div className="hero-shape2-1">
        <span className="hero-shape2-2" />
      </div>
      <div className="hero-shape2-right">
        <span className="hero-shape2-right-2" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-6 col-xl-5 col-lg-8">
            <div className="hero-style2">
              <span className="sub-title text-white">Academic & Research Services</span>
              <h1 className="hero-title text-white">
                Professional{" "}
                <span>
                  <img src="assets/img/hero/hero_shape_2.png" alt="Checkit Research" />
                  Research
                </span>{" "}
                Support for Academic Excellence
              </h1>
              <p className="hero-text text-white">
                Checkit Research provides comprehensive academic support including research paper formatting, plagiarism checking, manuscript writing, statistical analytics, and more. We help students and researchers achieve their academic goals.
              </p>
              <div className="btn-group">
                <a 
                  href="https://www.facebook.com/plagchecker101" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn"
                >
                  View Our Services
                </a>
                <div className="call-media-wrap">
                  <div className="icon">
                    <img src="assets/img/icon/phone-1.svg" alt="Checkit Research" />
                  </div>
                  <div className="media-body">
                    <h6 className="title text-white">Contact Us:</h6>
                    <h4 className="link">
                      <a 
                        className="text-white" 
                        href="https://wa.me/201090320117"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Started
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
