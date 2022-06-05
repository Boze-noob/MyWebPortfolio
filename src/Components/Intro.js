import '../Css/Intro.css';
import Button from '../Components/Button.js';
import { motion } from 'framer-motion';
import mySound from '../Audio/background_sound.mp3'
import React, {useState, useRef, useContext } from 'react';

import androidJetpackAnim from '../Animations/android_jetpack.json';
import programmingAnim from '../Animations/guy_programming.json';
import Lottie from 'react-lottie';
import {MusicFlag} from "../Components/Helpers/MusicContext.js"


function Intro() {
  const titleTxt = 'Hi! \nI am Bože, \nmobile developer.';
  const {musicFlagValue, setMusicFlagValue} = useContext(MusicFlag);
  const variants = {
    
    stop: { y: [0, -10, 0], rotate: [0, 20, 0], transition: { repeat: Infinity, repeatDelay: 1 } }
  };
  console.log(musicFlagValue);
  

  let audio = useRef(new Audio(mySound));
  audio.current.addEventListener('ended', function () {
    audio.current.currentTime = 0;
    audio.current.play();
  }, false);


  const start = () => {
    audio.current.play();
    setMusicFlagValue(false);
  }
  const pause = () => {
    audio.current.pause();
    setMusicFlagValue(true);
  }
  
  return (
    <motion.div initial={{opacity:0}} animate={{opacity: 1}}  className="Intro" id='introId'>
      <div id='arrow'>
      <h2 id='arrow_desc'>{musicFlagValue ? 'Turn on the music!' : 'Turn off the music!'}</h2>
      <img id='arrow_image' src='/images/arrow.jpg' />
      </div>
      <div id='music'>
      <motion.img variants={variants} animate={musicFlagValue ? 'rotate' : 'stop'} id='sound_image' src='/images/sound.jpg' />
      <motion.button whileHover={{ scale: 1.45}} transition={{duration: 0.4 }} onClick={musicFlagValue ? start : pause}>
       {musicFlagValue ? 'Play music' : 'Stop music'}
    </motion.button>
      </div>
      <div className='JetpackAnimation'>
      <Lottie 
     isPaused={musicFlagValue ? true : false}
      options={{
        animationData: androidJetpackAnim,
        loop: true,
        autoplay: false,
      }} />
      </div>
      

      <div id='description'>
      {
        titleTxt.split('\n').map(function(txt){
          return <motion.p transition={{ type: 'tween', duration: 0.3 }}
           whileHover={{ scale: 1.1, originX: -0.1, originY: -0.4, color: '#FD2155', }}
           id='title'>
             {txt}</motion.p>
        })
      }
      <p id='subTitle'>Android Native / Flutter</p>
      <div id='button'>
      <Button value = {'Contact me'} />
      </div>
      </div>
      
      <div className='ProgrammingAnim'>
      <Lottie 
      isPaused={musicFlagValue ? true : false}
      options={{
        animationData: programmingAnim,
        loop: true,
        autoplay: !musicFlagValue,
      }} />
      
      </div>
     
    </motion.div>
  );
}

export default Intro;
