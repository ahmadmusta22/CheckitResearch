import React from "react";
import { Link } from "react-router-dom";

const FooterAreaTwo = () => {
  return (
    <footer
      className="footer-wrapper footer-layout2"
      style={{ backgroundImage: "url(assets/img/bg/footer-bg2-1.png)" }}
    >
      <div className="container">
        <div className="footer-top-2">
          <div className="footer-logo">
            <Link to="/">
              <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#fff' }}>Checkit Research</span>
            </Link>
          </div>
          <h3 className="footer-top-title text-white">
            Subscribe to our newsletter for research insights
          </h3>
          <form className="newsletter-form">
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Your Email Address"
                required=""
              />
            </div>
            <button type="submit" className="btn">
              <i className="fas fa-arrow-right" />
            </button>
          </form>
        </div>
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget widget-about">
                <h3 className="widget_title">About Us</h3>
                <p className="footer-text mb-30">
                  Checkit Research provides comprehensive academic and research support services including research paper formatting, plagiarism checking, manuscript writing, statistical analytics, protocol development, PowerPoint presentations, assignments, and graduation projects.
                </p>
                <div className="social-btn style3">
                  <a 
                    href="https://www.facebook.com/plagchecker101" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a 
                    href="https://wa.me/201090320117" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-whatsapp" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Company</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link to="#" onClick={(e) => e.preventDefault()}>About</Link>
                    </li>
                    <li>
                      <Link to="#" onClick={(e) => e.preventDefault()}>Team</Link>
                    </li>
                    <li>
                      <Link to="#" onClick={(e) => e.preventDefault()}>Faq</Link>
                    </li>
                    <li>
                      <Link to="#" onClick={(e) => e.preventDefault()}>Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Our Services</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link to="#" onClick={(e) => e.preventDefault()}>Research Paper Formatting</Link>
                    </li>
                    <li>
                      <Link to="#" onClick={(e) => e.preventDefault()}>Protocol / Study Proposal</Link>
                    </li>
                    <li>
                      <Link to="#" onClick={(e) => e.preventDefault()}>Plagiarism Checking</Link>
                    </li>
                    <li>
                      <Link to="#" onClick={(e) => e.preventDefault()}>Manuscript Writing</Link>
                    </li>
                    <li>
                      <Link to="#" onClick={(e) => e.preventDefault()}>Statistical Analytics</Link>
                    </li>
                    <li>
                      <Link to="#" onClick={(e) => e.preventDefault()}>PowerPoint Presentations</Link>
                    </li>
                    <li>
                      <Link to="#" onClick={(e) => e.preventDefault()}>Assignments</Link>
                    </li>
                    <li>
                      <Link to="#" onClick={(e) => e.preventDefault()}>Graduation Projects</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Contact</h3>
                <div className="widget-contact2">
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Phone Number</p>
                      <h6>
                        <Link to="tel:+2001090320117">+20 0109 032 0117</Link>
                        <p />
                      </h6>
                    </div>
                  </div>
                  <div className="widget-contact-grid">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="contact-grid-details">
                      <p>Email Address</p>
                      <h6>
                        <Link to="mailto:Checkitacademicservices@gmail.com">
                          Checkitacademicservices@gmail.com
                        </Link>
                        <p />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-3 justify-content-md-between justify-content-center">
            <div className="col-auto align-self-center">
              <p className="copyright-text text-center">
                © <Link to="#">Checkit Research</Link> 2024 | All Rights Reserved
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                <Link to="/contact">Tarms &amp; Condition</Link>
                <Link to="/contact">Privacy Policy</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAreaTwo;
