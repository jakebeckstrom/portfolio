import React from "react";

export default function Certification({ certification }) {
  return (
    <div class="col-lg-2 col-md-4 col-sm-6">
      <div class="card text-center">
        <img
          src={"/images/" + certification.image}
          class="card-img-top"
          width="100px"
          alt={certification.name + " logo"}
        />
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
    </div>
  );
}
