import './App.css';
import {useState} from 'react';
import Sidebar from "./Components/Sidebar";
import Intro from "./Components/Intro";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import MySkills from "./Components/MySkills";
import Contact from "./Components/Contact";
import { MusicFlag } from "./Components/Helpers/MusicContext";

function App() {

  const [musicFlagValue, setMusicFlagValue] = useState(true);
  return (
    <div className="App">
      <MusicFlag.Provider value={{musicFlagValue, setMusicFlagValue}}>
      <Sidebar/>
      <Intro />
      <MySkills />
      <Projects />
      <AboutMe />
      <Contact />
      </MusicFlag.Provider>
      <h3>Made by Boze-noob</h3>
    </div>
  );
}

export default App;
