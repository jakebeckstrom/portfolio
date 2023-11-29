import React from "react";
import Contact from "./Contact";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <Contact />
      <div class="container-fluid">
        <button class="navbar-brand">Jacob Beckstrom</button>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            {/* <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">
                Projects
              </a>
            </li> */}
            <li>
              <button
                class="btn btn-outline-success align-self-end"
                data-bs-toggle="modal"
                data-bs-target="#contact"
              >
                Contact
              </button>
              <button class="btn btn-outline-success align-self-end">
                Download Resume
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
