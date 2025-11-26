import React from "react";
import { Link } from "react-router-dom";

const ServiceAreaTwo = () => {
  return (
    <div className="service-area-2 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Our Services</span>
              <h2 className="sec-title">
                Our Academic & Research Services{" "}
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
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: `url("/assets/New folder/8.jpg")`,
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <i className="fas fa-file-alt" style={{ fontSize: '40px', color: '#fff' }}></i>
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="#" onClick={(e) => e.preventDefault()}>Research Paper Formatting</Link>
                  </h4>
                  <p className="service-card_text">
                    Professional formatting services for research papers following APA, MLA, Chicago, Harvard, and other academic style guidelines. We ensure your paper meets all formatting requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: `url("/assets/New folder/3.png")`,
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <i className="fas fa-shield-check" style={{ fontSize: '40px', color: '#fff' }}></i>
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="#" onClick={(e) => e.preventDefault()}>Accredited Plagiarism Checking</Link>
                  </h4>
                  <p className="service-card_text">
                    Professional plagiarism detection using accredited tools to ensure your work is original. We provide detailed reports and help you maintain academic integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: `url("/assets/New folder/4.jpeg")`,
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <i className="fas fa-pen-fancy" style={{ fontSize: '40px', color: '#fff' }}></i>
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="#" onClick={(e) => e.preventDefault()}>Manuscript Writing</Link>
                  </h4>
                  <p className="service-card_text">
                    Expert manuscript writing services for research papers, theses, dissertations, and academic publications. We help you craft well-structured, scholarly content.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: `url("/assets/New folder/5.png")`,
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <i className="fas fa-clipboard-list" style={{ fontSize: '40px', color: '#fff' }}></i>
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="#" onClick={(e) => e.preventDefault()}>Protocol / Study Proposal</Link>
                  </h4>
                  <p className="service-card_text">
                    Professional development of research protocols and study proposals. We help you create comprehensive, well-structured proposals that meet academic and institutional standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: `url("/assets/New folder/6.webp")`,
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <i className="fas fa-chart-bar" style={{ fontSize: '40px', color: '#fff' }}></i>
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="#" onClick={(e) => e.preventDefault()}>Statistical Analytics</Link>
                  </h4>
                  <p className="service-card_text">
                    Advanced statistical analysis services for your research data. We provide data analysis, interpretation, and visualization using professional statistical software and methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-card style2">
              <div
                className="service-card_content"
                style={{
                  backgroundImage: `url("/assets/New folder/7.jpg")`,
                }}
              >
                <div>
                  <div className="service-card_icon">
                    <i className="fas fa-file-powerpoint" style={{ fontSize: '40px', color: '#fff' }}></i>
                  </div>
                  <h4 className="service-card_title h5">
                    <Link to="#" onClick={(e) => e.preventDefault()}>PowerPoint Presentations</Link>
                  </h4>
                  <p className="service-card_text">
                    Professional PowerPoint presentation design for academic defenses, conferences, and research presentations. We create visually appealing, well-structured slides that effectively communicate your research.
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

export default ServiceAreaTwo;
