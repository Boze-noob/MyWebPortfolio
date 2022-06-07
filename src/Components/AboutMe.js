import '../Css/AboutMe.css';
import {useContext} from 'react';
import {motion} from 'framer-motion';
import Lottie from 'react-lottie';
import aboutMeAnim from '../Animations/about_me.json';
import {MusicFlag} from './Data/MusicContext';


function AboutMe() {

  const {musicFlagValue, setMusicFlagValue} = useContext(MusicFlag);
  const description = 'I have always loved spending time in front of  my computer, programming and playing video games, that love later grew into a career. On third year of college me and my team won second place on mobile development tournament and since than I am making mobile apps.\nCurrently studying backend(Node.js). At free time I like to workout, play sports, hang out with my dog, watch netflix and ofc code.\n\nInterested in the entire mobile development spectrum and working on ambitious projects with positive people.';

  return (
    <div className="AboutMe" id='aboutMeId'>

<div className='Animation'>
      <Lottie 
      isPaused={musicFlagValue ? true : false}
      options={{
        animationData: aboutMeAnim,
        loop: true,
        autoplay: false,
      }} />
      </div>

       <div className='Title'>
      <motion.p transition={{ type: 'tween', duration: 0.3 }}
         whileHover={{ scale: 1.1, originX: -0.1, originY: -0.4, color: '#FD2155', }}>
           About me</motion.p>
    </div>
    <div className='Description'>
        <p>{description}</p>
        <a href='#contactId' style={{color:"#21b6ae" ,fontWeight: "400", fontSize: "large"}}>Lets make something special!</a>
      </div>
    </div>
    )}

export default AboutMe;
