import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const AboutTwo = () => {
  return (
    <div className="space-top about-section-wrapper">
      <div className="container">
        <div className="row gx-4 gy-4">
          <div className="col-xxl-7 col-xl-6">
            <div className="about-thumb2">
              <div className="about-img-1">
                <img 
                  src="/assets/New%20folder/researcher%201.jpg" 
                  alt="Checkit Research"
                />
              </div>
              <div className="about-img-2">
                <img 
                  src="/assets/New%20folder/researcher%202.jpg" 
                  alt="Checkit Research"
                />
              </div>
              <div className="about-counter-wrap jump-reverse">
                <img src="assets/img/icon/about_icon2-1.svg" alt="Checkit Research" />
                <h3 className="about-counter">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          <CountUp delay={0} start={0} end={500} />
                          +
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h3>
                <h4 className="about-counter-text">Completed Projects</h4>
              </div>
              <div className="about-year-wrap2 movingX">
                <div className="about-year-grid-wrap">
                  <div className="icon">
                    <img src="assets/img/icon/about_icon2-2.png" alt="Checkit Research" />
                  </div>
                  <h3 className="about-counter">
                    <span className="counter-number">8</span>+
                  </h3>
                </div>
                <h4 className="about-year-text">Years Of Experience</h4>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6">
            <div className="about-content-wrap">
              <div className="title-area">
                <span className="sub-title">Know About Us</span>
                <h2 className="sec-title">
                  Your Trusted Academic Research Partner{" "}
                  <img
                    className="title-bg-shape shape-center"
                    src="assets/img/bg/title-bg-shape.png"
                    alt="Checkit Research"
                  />
                </h2>
                <p className="sec-text">
                  Checkit Research provides comprehensive academic and research support services including research paper formatting, plagiarism checking, manuscript writing, statistical analytics, protocol development, PowerPoint presentations, assignments, and graduation projects. We help students and researchers achieve academic excellence.
                </p>
              </div>
              <div className="about-feature-wrap style-shadow">
                <div className="about-feature-wrap-details">
                  <h5 className="about-feature-title">
                    Academic Excellence
                  </h5>
                  <p className="about-feature-text">
                    We provide professional academic support services including research paper formatting, plagiarism checking, and manuscript writing to help you succeed.
                  </p>
                </div>
              </div>
              <div className="about-feature-wrap style-shadow">
                <div className="about-feature-wrap-details">
                  <h5 className="about-feature-title">Comprehensive Support</h5>
                  <p className="about-feature-text">
                    From protocol development and statistical analytics to PowerPoint presentations and graduation projects, we cover all your academic needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
