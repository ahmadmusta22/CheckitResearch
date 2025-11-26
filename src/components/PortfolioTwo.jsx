import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade } from "swiper";
import { Link } from "react-router-dom";
const PortfolioTwo = () => {
  return (
    <div className="portfolio-area-1 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-between align-items-end">
          <div className="col-xl-5 col-lg-6">
            <div className="title-area">
              <span className="sub-title">Our Portfolio</span>
              <h2 className="sec-title">
                Our Academic Services Portfolio{" "}
                <img
                  className="title-bg-shape"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="Checkit Research"
                />
              </h2>
            </div>
          </div>
          <div className="col-sm-auto">
            <div className="title-area">
              <div className="icon-box">
                <button className="slick-arrow default portfolio-button-prev">
                  <i className="fas fa-arrow-left" />
                </button>
                <button className="slick-arrow default portfolio-button-next">
                  <i className="fas fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <div className="row global-carousel gx-30 portfolio-slider1">
          <Swiper
            loop={true}
            navigation={{
              nextEl: ".portfolio-button-next",
              prevEl: ".portfolio-button-prev",
            }}
            spaceBetween={30}
            centeredSlides
            slidesPerView={1}
            slidesPerGroup={1}
            speed={2000}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000 }}
            className="mySwiper"
            modules={[FreeMode, Navigation, Thumbs, EffectFade]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div>
                <div className="portfolio-card style2">
                  <div className="portfolio-card-thumb">
                    <img src="/assets/New%20folder/paper%20format.png" alt="Checkit Research" />
                  </div>
                  <div className="portfolio-card-details">
                    <div className="media-left">
                      <h4 className="portfolio-card-details_title">
                        <Link to="#" onClick={(e) => e.preventDefault()}>Research Paper Formatting</Link>
                      </h4>
                      <span className="portfolio-card-details_subtitle">
                        Academic Formatting
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="portfolio-card style2">
                  <div className="portfolio-card-thumb">
                    <img src="/assets/New folder/plag.png" alt="Checkit Research" />
                  </div>
                  <div className="portfolio-card-details">
                    <div className="media-left">
                      <h4 className="portfolio-card-details_title">
                        <Link to="#" onClick={(e) => e.preventDefault()}>Plagiarism Checking Service</Link>
                      </h4>
                      <span className="portfolio-card-details_subtitle">
                        Quality Assurance
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="portfolio-card style2">
                  <div className="portfolio-card-thumb">
                    <img src="/assets/New folder/manu.jpg" alt="Checkit Research" />
                  </div>
                  <div className="portfolio-card-details">
                    <div className="media-left">
                      <h4 className="portfolio-card-details_title">
                        <Link to="#" onClick={(e) => e.preventDefault()}>Manuscript Writing</Link>
                      </h4>
                      <span className="portfolio-card-details_subtitle">
                        Academic Writing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="portfolio-card style2">
                  <div className="portfolio-card-thumb">
                    <img src="/assets/New folder/statis.jpg" alt="Checkit Research" />
                  </div>
                  <div className="portfolio-card-details">
                    <div className="media-left">
                      <h4 className="portfolio-card-details_title">
                        <Link to="#" onClick={(e) => e.preventDefault()}>Statistical Analytics</Link>
                      </h4>
                      <span className="portfolio-card-details_subtitle">
                        Data Analysis
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="portfolio-card style2">
                  <div className="portfolio-card-thumb">
                    <img src="/assets/New folder/grad.jpg" alt="Checkit Research" />
                  </div>
                  <div className="portfolio-card-details">
                    <div className="media-left">
                      <h4 className="portfolio-card-details_title">
                        <Link to="#" onClick={(e) => e.preventDefault()}>Graduation Projects</Link>
                      </h4>
                      <span className="portfolio-card-details_subtitle">
                        Academic Projects
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTwo;
