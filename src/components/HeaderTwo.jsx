import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderTwo = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    // Mobile menu navigation removed - only button remains
    // Keeping scroll handler only
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenu = () => {
    setActive(!active);
  };
  return (
    <header className="nav-header header-layout3">
      <div className="header-top">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
            <div className="col-auto d-none d-lg-block">
              <div className="header-links">
                <ul>
                  <li>
                    <i className="fas fa-envelope" />
                    <Link to="mailto:Checkitacademicservices@gmail.com">Checkitacademicservices@gmail.com</Link>
                  </li>
                  {/* <li>
                    <i className="fas fa-map-marker-alt" />
                    6391 Elgin St. Celina, 10299
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-auto">
              <div className="header-links ps-0">
                <ul>
                  <li>
                    <div className="social-links">
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
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`sticky-wrapper ${scroll && "sticky"}`}>
        {/* Main Menu Area */}
        <div className="menu-area">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="header-logo">
                  <Link to="/home-2">
                    <img 
                      src="/assets/New%20folder/Checkit1.png" 
                      alt="Checkit Research" 
                      className="header-logo-img"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-auto">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul>
                    {/* <li className="menu-item-has-children">
                      <Link to="#">Home</Link>
                      <ul className="sub-menu">
                        <li>
                          <NavLink
                            to="/"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Home 01
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/home-2"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Home 02
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/home-3"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Home 03
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/home-4"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Home 04
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/home-5"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Home 05
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/home-6"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Home 06
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink
                        to="/about"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#">Services</Link>
                      <ul className="sub-menu">
                        <li>
                          <NavLink
                            to="/service"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Service
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/service-details"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Service Details
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#">Projects</Link>
                      <ul className="sub-menu">
                        <li>
                          <NavLink
                            to="/project"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Projects
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/project-details"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Projects Details
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#">Blog</Link>
                      <ul className="sub-menu">
                        <li>
                          <NavLink
                            to="/blog"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Blog
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-details"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Blog Details
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="#">Pages</Link>
                      <ul className="sub-menu">
                        <li>
                          <NavLink
                            to="/team"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Team Page
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/team-details"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Team Details
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/shop"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Shop Page
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/shop-details"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Shop Details
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/cart"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Cart
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/checkout"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Checkout
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/wishlist"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Wishlist
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Contact
                      </NavLink>
                    </li> */}
                    {/* <li className="menu-item-has-children">
                      <Link to="#">Home</Link>
                      <ul className="sub-menu">
                        <li>
                          <NavLink
                            to="/"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Home 01
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/home-2"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Home 02
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/home-3"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Home 03
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/home-4"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Home 04
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/home-5"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Home 05
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/home-6"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Home 06
                          </NavLink>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li>
                      <NavLink
                        to="/about"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        About Us
                      </NavLink>
                    </li> */}
                    {/* <li className="menu-item-has-children">
                      <Link to="#">Services</Link>
                      <ul className="sub-menu">
                        <li>
                          <NavLink
                            to="/service"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Service
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/service-details"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Service Details
                          </NavLink>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li className="menu-item-has-children">
                      <Link to="#">Projects</Link>
                      <ul className="sub-menu">
                        <li>
                          <NavLink
                            to="/project"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Projects
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/project-details"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Projects Details
                          </NavLink>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li className="menu-item-has-children">
                      <Link to="#">Blog</Link>
                      <ul className="sub-menu">
                        <li>
                          <NavLink
                            to="/blog"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Blog
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/blog-details"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Blog Details
                          </NavLink>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li className="menu-item-has-children">
                      <Link to="#">Pages</Link>
                      <ul className="sub-menu">
                        <li>
                          <NavLink
                            to="/team"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Team Page
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/team-details"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Team Details
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/shop"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Shop Page
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/shop-details"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Shop Details
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/cart"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Cart
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/checkout"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Checkout
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/wishlist"
                            className={(navData) =>
                              navData.isActive ? "active" : ""
                            }
                          >
                            Wishlist
                          </NavLink>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li>
                      <NavLink
                        to="/contact"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Contact
                      </NavLink>
                    </li> */}
                  </ul>
                </nav>
                <div className="navbar-right d-inline-flex d-lg-none">
                  <button
                    type="button"
                    className="menu-toggle icon-btn"
                    onClick={mobileMenu}
                  >
                    <i className="fas fa-bars" />
                  </button>
                </div>
              </div>
              <div className="col-auto d-xl-block d-none">
                <div className="header-button">
                  <Link to="https://wa.me/201090320117" target="_blank" rel="noopener noreferrer" className="btn style2">
                    Get Academic Support <i className="fas fa-arrow-right ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu-wrapper  ${active && "body-visible"}`}>
          <div className="mobile-menu-area">
            <div className="mobile-logo">
              <Link to="/home-2">
                <img 
                  src="/assets/New%20folder/Checkit1.png" 
                  alt="Checkit Research" 
                />
              </Link>
              <button className="menu-toggle" onClick={mobileMenu}>
                <i className="fa fa-times" />
              </button>
            </div>
            <div className="mobile-menu">
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                minHeight: '60vh',
                padding: '20px'
              }}>
                <a 
                  href="https://wa.me/201090320117" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn"
                  style={{
                    fontSize: '16px',
                    padding: '14px 32px',
                    whiteSpace: 'nowrap',
                    backgroundColor: '#ffffff',
                    color: '#e8092e',
                    border: '2px solid #ffffff'
                  }}
                >
                  Get Academic Support <i className="fas fa-arrow-right ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;
