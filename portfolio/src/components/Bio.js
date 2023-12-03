import React from "react";

export default function Bio() {
  return (
    <div class="card mb-3 border-0 p-2">
      <div class="row g-0">
        <div class="col-lg-2 col-md-6  d-flex align-items-center justify-content-center">
          <img
            src="/images/me.jpeg"
            class="img-fluid rounded-circle"
            alt="Profile"
          />
        </div>
        <div class="col-lg-10 col-md-6">
          <div class="card-body">
            <h5 class="card-title">Hi There!</h5>
            <p class="card-text">
              I am a passionate and results-driven software developer who has a
              broad experience in DevOps and cloud technologies including 3
              years working in AWS DevOps and Python, designing and developing
              automation and deployment solutions for a variety of application
              teams. Throughout my work, I commit to the core values of Fault
              tolerance, high availability, Cost optimization, Security and
              writing clear, well-documented code. In addition, I have a year of
              technical support experience in which I developed excellent
              written and verbal communication skills, as well as advanced
              troubleshooting skills. I thrive in a fast-paced environment, and
              I welcome the opportunity to assume a wide range of
              responsibilities. My tenacity and work ethic make me an asset that
              can contribute to the success of your product.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
