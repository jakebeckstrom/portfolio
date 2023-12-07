import React from "react";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  const [resumeData, updateResumeData] = React.useState({});
  const [projectData, updateProjectData] = React.useState({});
  const [view, updateView] = React.useState("home");

  // const currentURL = window.location.href;
  const currentURL = "https://jacob-beckstrom.com/";
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
      <div class="row text-center">
        {currentURL === "https://jacob-beckstrom.com/" && (
          <p p-2 m-2>
            You are currently viewing the official version of this webiste.
            Check out{" "}
            <a href="http://beckstrom-portfolio-site-stage.s3-website.us-east-2.amazonaws.com">
              this link
            </a>{" "}
            to see the beta version with the newest features.
          </p>
        )}
        {currentURL ===
          "http://beckstrom-portfolio-site-stage.s3-website.us-east-2.amazonaws.com/" && (
          <p p-2 m-2>
            You are currently viewing the beta version of this webiste. Check
            out <a href="https://jacob-beckstrom.com">this link</a> to see the
            official version with only stable features.
          </p>
        )}
      </div>
      {view === "home" && <Home resume={resumeData} />}
      {view === "projects" && <Projects projects={projectData} />}
    </main>
  );
}

export default App;
