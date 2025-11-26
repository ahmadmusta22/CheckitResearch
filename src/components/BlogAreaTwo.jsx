import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
const BlogAreaTwo = () => {
  return (
    <section className="blog-area space-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Blog</span>
              <h2 className="sec-title">
                Academic Writing Tips & Research Resources
              </h2>
            </div>
          </div>
        </div>
        <div className="row global-carousel blog-slider slider-shadow">
          <Swiper
            loop={true}
            navigation={{
              nextEl: ".testimonialOne-button-next",
              prevEl: ".testimonialOne-button-prev",
            }}
            spaceBetween={20}
            slidesPerGroup={1}
            speed={1000}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000 }}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
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
                <div className="blog-card style2">
                  <div className="blog-img">
                    <img 
                      src="/assets/New%20folder/format%20paper%20correctly.png" 
                      alt="How to Format Your Research Paper Correctly" 
                      className="format-paper-image"
                    />
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title">
                      <Link to="/blog-details">
                        How to Format Your Research Paper Correctly
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="blog-card style2">
                  <div className="blog-img">
                    <img 
                      src="/assets/New%20folder/Academic-Integrity.png" 
                      alt="Understanding Plagiarism and Academic Integrity" 
                      className="format-paper-image"
                    />
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title">
                      <Link to="/blog-details">
                        Understanding Plagiarism and Academic Integrity
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="blog-card style2">
                  <div className="blog-img">
                    <img 
                      src="/assets/New%20folder/Statistical-Methods.jpg" 
                      alt="Statistical Analysis Methods for Research" 
                      className="format-paper-image"
                    />
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title">
                      <Link to="/blog-details">
                        Statistical Analysis Methods for Research
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="blog-card style2">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_s2_1.png" alt="Checkit Research" />
                    <div className="blog-date">
                      <Link to="/blog">
                        <span>17</span>Feb
                      </Link>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <Link to="/blog">
                        <i className="fas fa-user" />
                        By admin
                      </Link>
                      <Link to="/blog">
                        <i className="fas fa-comments" />
                        Comments (05)
                      </Link>
                    </div>
                    <h3 className="blog-title">
                      <Link to="/blog-details">
                        How to Format Your Research Paper Correctly
                      </Link>
                    </h3>
                    <Link className="link-btn style3" to="/blog-details">
                      Read More <i className="fas fa-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="blog-card style2">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_s2_2.png" alt="Checkit Research" />
                    <div className="blog-date">
                      <Link to="/blog">
                        <span>17</span>Feb
                      </Link>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <Link to="/blog">
                        <i className="fas fa-user" />
                        By admin
                      </Link>
                      <Link to="/blog">
                        <i className="fas fa-comments" />
                        Comments (05)
                      </Link>
                    </div>
                    <h3 className="blog-title">
                      <Link to="/blog-details">
                        Understanding Plagiarism and Academic Integrity
                      </Link>
                    </h3>
                    <Link className="link-btn style3" to="/blog-details">
                      Read More <i className="fas fa-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="blog-card style2">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_s2_3.png" alt="Checkit Research" />
                    <div className="blog-date">
                      <Link to="/blog">
                        <span>17</span>Feb
                      </Link>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <Link to="/blog">
                        <i className="fas fa-user" />
                        By admin
                      </Link>
                      <Link to="/blog">
                        <i className="fas fa-comments" />
                        Comments (05)
                      </Link>
                    </div>
                    <h3 className="blog-title">
                      <Link to="/blog-details">
                        Statistical Analysis Methods for Research
                      </Link>
                    </h3>
                    <Link className="link-btn style3" to="/blog-details">
                      Read More <i className="fas fa-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BlogAreaTwo;
