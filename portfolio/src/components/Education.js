import React from "react";

export default function Education({ education }) {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{education.school}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">
          {education.degree}, {education.major}
        </h6>
        <p class="card-text">Graduated: {education.graduation_year}</p>
      </div>
    </div>
  );
}
