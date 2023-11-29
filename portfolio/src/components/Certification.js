import React from "react";

export default function Certification({ certification }) {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{certification.name}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">
          {certification.issuer}
        </h6>
        <p class="card-text">{certification.date}</p>
        <a href={certification.link} class="card-link">
          link
        </a>
      </div>
    </div>
  );
}
