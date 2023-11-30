import React from "react";
import Experience from "./Experience";
import _ from "lodash";
import Skill from "./Skill";
import Education from "./Education";
import Certification from "./Certification";

export default function Home({ resume }) {
  return (
    <div>
      {_.isEmpty(resume) ? (
        <div></div>
      ) : (
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <h2>Experience</h2>
              {resume.experience.map((item) => (
                <Experience experience={item} />
              ))}
            </div>
            <div class="col-lg-4">
              <h2>Education</h2>
              <Education education={resume.education} />
              <h2>Skills</h2>
              {resume.skills.map((item) => (
                <Skill skills={item} />
              ))}
            </div>
          </div>
          <div class="row">
            <h2>Certifications</h2>
            {resume.certifications.map((item) => (
              <Certification certification={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
