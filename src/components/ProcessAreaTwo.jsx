import React from "react";

const ProcessAreaTwo = () => {
  return (
    <div
      className="process-area-2 space-top"
      style={{ backgroundImage: "url(/assets/New%20folder/process2-bg.png)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-7">
            <div className="title-area text-center">
              <h3 className="sub-title"> work process</h3>
              <h2 className="sec-title text-white">
                Our Service Process{" "}
                <img
                  className="title-bg-shape shape-center"
                  src="assets/img/bg/title-bg-shape2.png"
                  alt="Checkit Research"
                />
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 gx-90 justify-content-center">
          <div className="col-lg-4 col-md-6 process-card-wrap2">
            <div className="process-card style2">
              <div className="process-card-number">STEP 1</div>
              <h4 className="process-card-title">Submit Your Requirements</h4>
              <p className="process-card-text">
                Share your academic project details, requirements, and deadlines. We review your needs and provide a customized service plan.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 process-card-wrap2">
            <div className="process-card style2">
              <div className="process-card-number">STEP 2</div>
              <h4 className="process-card-title">Professional Processing</h4>
              <p className="process-card-text">
                Our expert team works on your project using professional tools and methodologies, ensuring quality and academic standards.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 process-card-wrap2">
            <div className="process-card style2">
              <div className="process-card-number">STEP 3</div>
              <h4 className="process-card-title">Quality Review & Delivery</h4>
              <p className="process-card-text">
                We conduct thorough quality checks, plagiarism verification, and deliver your completed work on time with revisions if needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessAreaTwo;
