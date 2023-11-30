import React from "react";
import Contact from "./Contact";

export default function NavBar() {
  const toggleDarkMode = () => {
    if (document.documentElement.getAttribute("data-bs-theme") === "dark") {
      document.documentElement.setAttribute("data-bs-theme", "light");
    } else {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    }
  };

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <Contact />
      <div class="container-fluid">
        <button class="btn navbar-brand">Jacob Beckstrom</button>
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
          <ul class="navbar-nav d-flex">
            {/* <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li> */}
            {/* <li class="nav-item mr-auto">
              <a class="nav-link" href="#projects">
                Projects
              </a>
            </li> */}
          </ul>
          <ul class="navbar-nav d-flex justify-content-end w-100">
            <li class="nav-item p-2">
              <button
                class="btn btn-outline-success"
                data-bs-toggle="modal"
                data-bs-target="#contact"
              >
                Contact
              </button>
            </li>
            <li class="nav-item p-2">
              <a
                class="btn btn-outline-success"
                href="/static/jacob_beckstrom_resume.docx"
                download
              >
                Download Resume
              </a>
            </li>
            <li class="nav-item p-2">
              <button class="btn btn-outline" onClick={toggleDarkMode}>
                <span class="bi bi-brightness-high-fill"></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
