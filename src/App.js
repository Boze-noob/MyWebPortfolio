import './App.css';
import Sidebar from "./Components/Sidebar";
import Intro from "./Components/Intro";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import MySkills from "./Components/MySkills";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Intro />
      <MySkills />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
