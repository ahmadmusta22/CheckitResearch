import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const CounterTwo = () => {
  return (
    <div className="container">
      <div className="counter-area-2 bg-theme">
        <div className="row gy-40 justify-content-between">
          <div className="col-sm-6 col-lg-auto">
            <div className="counter-card style2">
              <div className="counter-card_icon">
                <i className="fas fa-project-diagram" style={{ fontSize: '50px', color: '#e8092e' }}></i>
              </div>
              <div className="media-body">
                <h2 className="counter-card_number">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          <CountUp delay={0} start={0} end={500} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className="counter-card_text">Completed Projects</p>
              </div>
            </div>
          </div>
          <div className="col-xl-auto d-xl-block d-none">
            <div className="counter-divider" />
          </div>
          <div className="col-sm-6 col-lg-auto">
            <div className="counter-card style2">
              <div className="counter-card_icon">
                <i className="fas fa-user-graduate" style={{ fontSize: '50px', color: '#e8092e' }}></i>
              </div>
              <div className="media-body">
                <h2 className="counter-card_number">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          <CountUp delay={0} start={0} end={150} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className="counter-card_text">Satisfied Students</p>
              </div>
            </div>
          </div>
          <div className="col-xl-auto d-xl-block d-none">
            <div className="counter-divider" />
          </div>
          <div className="col-sm-6 col-lg-auto">
            <div className="counter-card style2">
              <div className="counter-card_icon">
                <i className="fas fa-calendar-alt" style={{ fontSize: '50px', color: '#e8092e' }}></i>
              </div>
              <div className="media-body">
                <h2 className="counter-card_number">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          <CountUp delay={0} start={0} end={8} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className="counter-card_text">Years Experience</p>
              </div>
            </div>
          </div>
          <div className="col-xl-auto d-xl-block d-none">
            <div className="counter-divider" />
          </div>
          <div className="col-sm-6 col-lg-auto">
            <div className="counter-card style2">
              <div className="counter-card_icon">
                <i className="fas fa-file-alt" style={{ fontSize: '50px', color: '#e8092e' }}></i>
              </div>
              <div className="media-body">
                <h2 className="counter-card_number">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          <CountUp delay={0} start={0} end={200} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className="counter-card_text">Papers Formatted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterTwo;
