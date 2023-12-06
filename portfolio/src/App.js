import React from "react";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  const [resumeData, updateResumeData] = React.useState({});
  const [projectData, updateProjectData] = React.useState({});
  const [view, updateView] = React.useState("home");

  React.useEffect(() => {
    fetch("/static/resume_data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        updateResumeData(myJson);
      });
  }, []);
  React.useEffect(() => {
    fetch("/static/projects.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        updateProjectData(myJson);
      });
  }, []);

  return (
    <main class="gradient-custom">
      <NavBar updateView={updateView} />
      {view === "home" && <Home resume={resumeData} />}
      {view === "projects" && <Projects projects={projectData} />}
    </main>
  );
}

export default App;
