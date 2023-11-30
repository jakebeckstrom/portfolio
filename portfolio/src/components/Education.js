import React from "react";

export default function Education({ education }) {
  return (
    <div class="card">
      <div class="row g-0">
        <div class="col-2 d-flex align-items-center justify-content-center">
          <img
            src={"/images/" + education.image}
            class="img w-100 rounded-start"
            alt="University of Minnesota Logo"
          />
        </div>
        <div class="col-sm-auto">
          <div class="card-body">
            <h5 class="card-title">{education.school}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">
              {education.degree}, {education.major}
            </h6>
            <p class="card-text">Graduated: {education.graduation_year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
