import React from "react";
import { Link } from "react-router-dom";

const PricingPlanTwo = () => {
  return (
    <div className="pricing-area-2 space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-7">
            <div className="title-area text-center">
              <span className="sub-title">Service Packages</span>
              <h2 className="sec-title">
                Choose Your Service Package{" "}
                <img
                  className="title-bg-shape shape-center"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="Checkit Research"
                />
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="pricing-card style2">
              <div className="pricing-card-icon-wrap">
                <div className="pricing-card_icon">
                  <img src="assets/img/icon/picing-icon_2-1.svg" alt="Checkit Research" />
                </div>
                <h4 className="pricing-card_title">Basic Package</h4>
              </div>
              <div className="pricing-card-details">
                <h3 className="pricing-card_price">Starting at $50</h3>
                <h6 className="pricing-card_currency">Per Service</h6>
                <div className="checklist style2">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Paper Formatting
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Plagiarism Check
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Basic Editing
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Email Support
                    </li>
                  </ul>
                </div>
                <Link className="btn" to="/contact">
                  Get This Plan
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="pricing-card style2 pricing-card-active">
              <div className="pricing-card-icon-wrap">
                <div className="pricing-card_icon">
                  <img src="assets/img/icon/picing-icon_2-2.svg" alt="Checkit Research" />
                </div>
                <h4 className="pricing-card_title">Professional Package</h4>
              </div>
              <div className="pricing-card-details">
                <h3 className="pricing-card_price">Starting at $150</h3>
                <h6 className="pricing-card_currency">Per Service</h6>
                <div className="checklist style2">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Manuscript Writing
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Statistical Analytics
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Protocol Development
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Priority Support
                    </li>
                  </ul>
                </div>
                <Link className="btn" to="/contact">
                  Get This Plan
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="pricing-card style2">
              <div className="pricing-card-icon-wrap">
                <div className="pricing-card_icon">
                  <img src="assets/img/icon/picing-icon_2-3.svg" alt="Checkit Research" />
                </div>
                <h4 className="pricing-card_title">Premium Package</h4>
              </div>
              <div className="pricing-card-details">
                <h3 className="pricing-card_price">Custom Pricing</h3>
                <h6 className="pricing-card_currency">Contact Us</h6>
                <div className="checklist style2">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Graduation Projects
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Full Academic Support
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      PowerPoint Presentations
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      Dedicated Support
                    </li>
                  </ul>
                </div>
                <Link className="btn" to="/contact">
                  Get This Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlanTwo;
