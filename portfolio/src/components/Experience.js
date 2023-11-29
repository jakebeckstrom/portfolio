import React from "react";

export default function Experience({ experience }) {
  // console.log("EXPERIENCE");
  // console.log(experience);
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{experience.job_title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">
          {experience.company}
        </h6>
        <p class="card-text">
          <ul>
            {experience.responsibilities.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </p>
        {/* <a href="#" class="card-link">
          Card link
        </a> */}
        {/* <a href="#" class="card-link">
          Another link
        </a> */}
      </div>
    </div>
  );
}
