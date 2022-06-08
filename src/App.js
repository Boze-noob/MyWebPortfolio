import './App.css';
import {useState} from 'react';
import Sidebar from "./Components/Sidebar";
import Intro from "./Components/Intro";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import MySkills from "./Components/MySkills";
import Contact from "./Components/Contact";
import { MusicFlag } from "./Components/Data/MusicContext";
import {isMobile} from 'react-device-detect';

function App() {

  const [musicFlagValue, setMusicFlagValue] = useState(true);
  if(isMobile) {
    return (
        <div className='Alert'>Portfolio is only avaliable using desktop!</div>
    )
}
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
    </div>
  );
}

export default App;
