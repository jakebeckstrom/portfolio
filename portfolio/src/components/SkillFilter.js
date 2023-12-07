import React from "react";

export default function SkillFilter({
  technologies,
  techFilters,
  updateTechFilters,
}) {
  const handleClick = (event) => {
    if (techFilters.includes(event.target.id)) {
      let newFilters = techFilters.filter((item) => {
        return item !== event.target.id;
      });
      updateTechFilters(newFilters);
    } else {
      updateTechFilters([...techFilters, event.target.id]);
    }
  };

  return (
    <div class="row">
      <h5>Click on any of the following buttons to filter the list.</h5>
      {technologies.map((item) =>
        techFilters.includes(item) ? (
          <button
            id={item}
            class="btn btn-primary w-auto p-2 m-2"
            onClick={handleClick}
          >
            {item}
          </button>
        ) : (
          <button
            id={item}
            class="btn btn-outline-primary w-auto p-2 m-2"
            onClick={handleClick}
          >
            {item}
          </button>
        )
      )}
    </div>
  );
}
