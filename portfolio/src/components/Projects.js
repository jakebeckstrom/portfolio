import React from "react";
import ProjectItem from "./ProjectItem";
import SkillFilter from "./SkillFilter";

export default function Projects({ projects }) {
  const [techFilters, updateTechFilters] = React.useState([]);
  const [technologies, updateTechnologies] = React.useState([]);
  const [filteredProjects, updateFilteredProjects] = React.useState([]);
  React.useEffect(() => {
    let all_technologies = [];
    projects.project_list.forEach((project) => {
      project.technologies.forEach((tech) => {
        if (!all_technologies.includes(tech)) {
          all_technologies.push(tech);
        }
      });
    });
    updateTechnologies(all_technologies);
  }, [projects.project_list]);

  React.useEffect(() => {
    console.log(techFilters);
    if (techFilters.length > 0) {
      let newProjectList = projects.project_list.filter((project) => {
        let found = false;
        project.technologies.forEach((item) => {
          console.log(item, techFilters);
          console.log(techFilters.includes(item));
          if (techFilters.includes(item)) {
            found = true;
          }
        });
        return found;
      });
      console.log("new projects", newProjectList);
      updateFilteredProjects(newProjectList);
    } else {
      console.log(techFilters.length);
      updateFilteredProjects(projects.project_list);
    }
  }, [techFilters, projects]);

  return (
    <div class="container">
      <div class="row">
        <h4>Side Projects</h4>
        <p>
          The following are projects that I have worked on in my spare time.
          While these have varying degrees of completeness, I explain my
          reasoning for each project and the next steps if I had more time to
          work on it.
        </p>
      </div>
      <div class="row">
        <SkillFilter
          technologies={technologies}
          techFilters={techFilters}
          updateTechFilters={updateTechFilters}
        />
      </div>
      <div class="row">
        <div class="col-12">
          {filteredProjects.map((project) => (
            <ProjectItem project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
