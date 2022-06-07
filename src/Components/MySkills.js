import '../Css/MySkills.css';
import {useContext} from 'react';
import ProgressBar from './Progress';
import { motion } from 'framer-motion';
import {ProgressBarData} from "./Data/ProgressBarData.js"; 
import {MusicFlag} from "../Components/Data/MusicContext.js";

function MySkills() {
  const {musicFlagValue, setMusicFlagValue} = useContext(MusicFlag);
  const githubLink = <a href='https://github.com/Boze-noob'>github</a>;
  const contactMeLink = <a href='#contactId'>contact me</a>;
  const variants = {
    
    stop: { y: [0, -20, 0], rotate: [10, 15, 0], transition: { repeat: Infinity, repeatDelay: 1 } }
  };

  return (
    <div className="MySkills" id='mySkillsId'>

<div className="HoverItContainer">
  <motion.h2 variants={variants} animate={musicFlagValue ? 'rotate' : 'stop'}>Hover me</motion.h2>
<img src='/images/my_skills_arrow.jpg' />
</div>
      
      
      <div className='Title'>
      {
      "My Skills \nand Experience".split('\n').map(function(txt){
        return <motion.p transition={{ type: 'tween', duration: 0.3 }}
         whileHover={{ scale: 1.1, originX: -0.1, originY: -0.4, color: '#FD2155', }}>
           {txt}</motion.p>
      })
    }
      </div>
      <div className='Description'>
        <p>Since beginning of my journey as mobile developer 2 years ago, I made two bigger and ten smaller, less complex mobile apps/games which generated over 10 000 downloads on Google Play. Apps has been build with good practices which makes them easy to refactor and expand. Languages that I mostly used were Java and XML besides that, Kotlin and Dart. I have experience using most popular platforms and libraries for app development and distribution as Bloc, GetX, Jetpack compose, Glide, Firebase, OneSignal, Google Play and much more! Also I have little experience in developing mobile games and web applications using Unreal Engine/ Flutter and React. I made few static web sites using pure HTML/CSS and WordPress which had very complex UI.\n\nVisit my {githubLink} profile for little more details or just {contactMeLink}.</p>
      </div>
      <div className='ProgressBars'>
        {
          ProgressBarData.map((val, key) => {
            return <ProgressBar color={val.color} width={val.width} value={val.value} max={val.max} text={val.text} />
          })
        }
      </div>
    </div>
  );
}

export default MySkills;
