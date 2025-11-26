import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const FaqAreaTwo = () => {
  return (
    <section className="faq-area-2 space">
      <div className="container">
        <div className="row gx-60 flex-row-reverse">
          <div className="col-xl-6">
            <div className="faq-thumb2 mb-xl-0 mb-50">
              {/* <div className="about-counter-grid jump">
                <div className="media-right">
                  <h3 className="about-counter">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter-number">
                            <CountUp delay={0} start={0} end={500} />+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h3>
                  <h4 className="about-counter-text">Academic Services</h4>
                </div>
              </div> */}
              <img src="/assets/New%20folder/sarah-elizabeth-O3gOgPB4sRU-unsplash.jpg" alt="Checkit Research"/>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="title-area">
              <span className="sub-title">ask anything</span>
              <h2 className="sec-title">
                Frequently Asked Questions{" "}
                <img
                  className="title-bg-shape"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="Checkit Research"
                />
              </h2>
            </div>
            <div className="accordion-area accordion" id="faqAccordion">
              <div className="accordion-card style2 active">
                <div className="accordion-header" id="collapse-item-1">
                  <button
                    className="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                  >
                    {" "}
                    What academic services do you offer?
                  </button>
                </div>
                <div
                  id="collapse-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="collapse-item-1"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      We offer comprehensive academic services including research paper formatting, protocol/study proposal development, accredited plagiarism checking, manuscript writing, statistical analytics, PowerPoint presentations, assignments, and graduation projects. Each service is tailored to meet your specific academic needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card style2">
                <div className="accordion-header" id="collapse-item-2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    {" "}
                    How long does it take to complete a project?
                  </button>
                </div>
                <div
                  id="collapse-2"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-2"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Project timelines vary based on service type and complexity. Formatting and plagiarism checks typically take 1-3 days, while manuscript writing and graduation projects may take 1-4 weeks. We'll provide a detailed timeline when you submit your requirements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card style2">
                <div className="accordion-header" id="collapse-item-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    {" "}
                    What formatting styles do you support?
                  </button>
                </div>
                <div
                  id="collapse-3"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-3"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      We support all major academic formatting styles including APA, MLA, Chicago, Harvard, IEEE, Vancouver, and many others. We ensure your paper meets all formatting requirements and academic standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAreaTwo;
