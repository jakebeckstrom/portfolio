import React from "react";

export default function ProjectItem({ project }) {
  return (
    <div class="card">
      {/* <div class="card-header">{project.name}</div> */}
      <div class="card-body">
        <h5 class="card-title">{project.name}</h5>
        {project.incomplete && (
          <span class="badge text-bg-warning">Incomplete</span>
        )}
        <p class="card-text">{project.design}</p>
        <p class="card-text">{project.deployment}</p>
        <div class="row">
          {project.technologies.map((tech) => (
            <p class="d-inline w-auto border rounded border-secondary m-1">
              {tech}
            </p>
          ))}
        </div>
        <a
          href={project.link}
          class="btn btn-primary p-2"
          target="_blank"
          rel="noreferrer"
        >
          Project
        </a>
        {project.github.map((item) => (
          <a
            href={item.link}
            class="btn btn-secondary p-2"
            target="_blank"
            rel="noreferrer"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
