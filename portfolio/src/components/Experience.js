import React from "react";

export default function Experience({ experience }) {
  return (
    <div class="card">
      <div class="card-body">
        <div class="row">
          {experience.image !== undefined && <div class="col-2 d-flex align-items-center justify-content-center">
            <img
              src={"/images/" + experience.image}
              class="img w-100"
              alt={experience.name + " logo"}
            />
          </div>}
          <div class="col-auto">
            <h5 class="card-title">{experience.job_title}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">
              {experience.company}
            </h6>
          </div>
        </div>
        <div class="row">
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
        </div>
      </div>
    </div>
  );
}
