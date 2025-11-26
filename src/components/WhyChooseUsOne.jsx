import React from "react";

const WhyChooseUsOne = () => {
  return (
    <div className="wcu-area-1 space-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">What we do</span>
              <h2 className="sec-title">
                Why Choose Checkit Research{" "}
                <img
                  className="title-bg-shape shape-center"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="Checkit Research"
                />
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-40 gx-60 align-items-center">
          <div className="col-xl-4 order-xl-2">
            <div className="wcu-thumb-1">
              <img src="/assets/New folder/researcher 3.jpg" alt="Checkit Research" />
            </div>
          </div>
          <div className="col-xl-4 col-md-6 order-xl-1">
            <div className="wcu-card-wrap right-wrap">
              <div className="wcu-card">
                <div className="icon">
                  <i className="fas fa-file-alt" style={{ fontSize: '30px', color: '#e8092e' }}></i>
                </div>
                <div className="wcu-card-details">
                  <h4 className="wcu-card-title">Professional Formatting</h4>
                  <p className="wcu-card-text">
                    Expert research paper formatting following APA, MLA, Chicago, Harvard, and other academic style guidelines to meet all requirements.
                  </p>
                </div>
              </div>
              <div className="wcu-card">
                <div className="icon">
                  <i className="fas fa-shield-alt" style={{ fontSize: '30px', color: '#e8092e' }}></i>
                </div>
                <div className="wcu-card-details">
                  <h4 className="wcu-card-title">Accredited Plagiarism Check</h4>
                  <p className="wcu-card-text">
                    Professional plagiarism detection using accredited tools to ensure your work maintains academic integrity and originality.
                  </p>
                </div>
              </div>
              <div className="wcu-card">
                <div className="icon">
                  <i className="fas fa-pen-fancy" style={{ fontSize: '30px', color: '#e8092e' }}></i>
                </div>
                <div className="wcu-card-details">
                  <h4 className="wcu-card-title">Expert Writing Services</h4>
                  <p className="wcu-card-text">
                    Professional manuscript writing, protocol development, and academic content creation by experienced researchers and writers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 order-xl-3">
            <div className="wcu-card">
              <div className="icon">
                <i className="fas fa-chart-bar" style={{ fontSize: '30px', color: '#e8092e' }}></i>
              </div>
              <div className="wcu-card-details">
                <h4 className="wcu-card-title">Statistical Analytics</h4>
                <p className="wcu-card-text">
                  Advanced statistical analysis and data interpretation services using professional software and methodologies for your research.
                </p>
              </div>
            </div>
            <div className="wcu-card">
              <div className="icon">
                <i className="fas fa-hands-helping" style={{ fontSize: '30px', color: '#e8092e' }}></i>
              </div>
              <div className="wcu-card-details">
                <h4 className="wcu-card-title">Comprehensive Support</h4>
                <p className="wcu-card-text">
                  From assignments and PowerPoint presentations to graduation projects, we cover all your academic needs.
                </p>
              </div>
            </div>
            <div className="wcu-card">
              <div className="icon">
                <i className="fas fa-clock" style={{ fontSize: '30px', color: '#e8092e' }}></i>
              </div>
              <div className="wcu-card-details">
                <h4 className="wcu-card-title">Timely Delivery</h4>
                <p className="wcu-card-text">
                  We deliver high-quality academic work on time, ensuring you meet all deadlines and requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsOne;
