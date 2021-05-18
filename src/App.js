import Jumbotron from "./components/jumbotron";
import AboutMe from "./components/about-me";
import Project from "./components/project";
import "./App.css";
import "./assets/css/default.css";

function App() {
  return (
    <div className="App">
      <Jumbotron />

      <AboutMe />

      <Project />
    </div>
  );
}

export default App;
