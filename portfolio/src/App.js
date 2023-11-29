import React from "react";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  const [resumeData, updateResumeData] = React.useState({});

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
  let view = "home";

  return (
    <main>
      <NavBar />
      {view === "home" && <Home resume={resumeData} />}
      {view === "projects" && <Projects />}
    </main>
  );
}

export default App;
