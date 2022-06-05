import '../Css/AboutMe.css';
import {useContext} from 'react';
import {motion} from 'framer-motion';
import Lottie from 'react-lottie';
import aboutMeAnim from '../Animations/about_me.json';
import {MusicFlag} from '../Components/Helpers/MusicContext';


function AboutMe() {

  const {musicFlagValue, setMusicFlagValue} = useContext(MusicFlag);

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
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
    )}

export default AboutMe;
