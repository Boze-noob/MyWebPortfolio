import '../Css/Intro.css';
import Button from '../Components/Button.js';
import { motion } from 'framer-motion';
import mySound from '../Audio/background_sound.mp3'
import React, {useState, useRef } from 'react';

import animationData from '../Animations/android_jetpack.json';
import Lottie from 'lottie-react-web';


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
    <div className="Intro">
      <div id='arrow'>
      <h2 id='arrow_desc'>Turn on the music!</h2>
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
      options={{
        animationData: animationData,
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
     
    </div>
  );
}

export default Intro;
