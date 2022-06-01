import '../Css/Intro.css';
import Button from '../Components/Button.js';
import { motion } from 'framer-motion';
import mySound from '../Audio/background_sound.mp3'
import React, {useState, useRef } from 'react';

import androidJetpackAnim from '../Animations/android_jetpack.json';
import programmingAnim from '../Animations/guy_programming.json';
import Lottie from 'react-lottie';


function Intro() {
  const titleTxt = 'Hi! \nI am Bože, \nmobile developer.';
  const [musicFlag, switchMusic] = useState(true);
  

  let audio = useRef(new Audio(mySound));
  audio.current.addEventListener('ended', function () {
    audio.current.currentTime = 0;
    audio.current.play();
  }, false);


  const start = () => {
    audio.current.play();
    switchMusic(false);
  }
  const pause = () => {
    audio.current.pause();
    switchMusic(true);
  }
  
  return (
    <motion.div initial={{opacity:0}} animate={{opacity: 1}}  className="Intro">
      <div id='arrow'>
      <h2 id='arrow_desc'>{musicFlag ? 'Turn on the music!' : 'Turn off the music!'}</h2>
      <img id='arrow_image' src='/images/arrow.jpg' />
      </div>
      <div id='music'>
      <img id='sound_image' src='/images/sound.jpg' />
      <motion.button whileHover={{ scale: 1.45}} transition={{duration: 0.4 }} onClick={musicFlag ? start : pause}>
       {musicFlag ? 'Play music' : 'Stop music'}
    </motion.button>
      </div>
      <div className='JetpackAnimation'>
      <Lottie 
     isPaused={musicFlag ? true : false}
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
      isPaused={musicFlag ? true : false}
      options={{
        animationData: programmingAnim,
        loop: true,
        autoplay: !musicFlag,
      }} />
      
      </div>
     
    </motion.div>
  );
}

export default Intro;
