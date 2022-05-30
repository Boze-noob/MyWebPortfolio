import '../Css/Intro.css';
import Button from '../Components/Button.js';
import { motion } from 'framer-motion';

function Intro() {
  const titleTxt = 'Hi! \nI am Bože, \nmobile developer.';
  return (
    <div className="Intro">
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
  );
}

export default Intro;
