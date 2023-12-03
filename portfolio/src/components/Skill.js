import React from "react";

export default function Skill({ skills }) {
  return (
    <div class="card col-md-6">
      <div class="card-body">
        <h5 class="card-title">{skills.name}</h5>
        <p class="card-text">
          <ul>
            {skills.list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </p>
      </div>
    </div>
  );
}
