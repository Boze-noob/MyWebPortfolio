import '../Css/Contact.css';
import {motion} from 'framer-motion';
import ContactForm from './ContactForm.js';
import GoogleMap from '../Components/GoogleMap.js';
import {useContext} from 'react';
import {MusicFlag} from "../Components/Helpers/MusicContext.js";


function Contact() {
  const {musicFlagValue, setMusicFlagValue} = useContext(MusicFlag);
  const variants = {
    
    stop: { x: [0, -100, 0], y: [0, 50, 0], transition: { repeat: Infinity, repeatDelay: 1 } }
  };


  return (
    <div className="Contact" id='contactId'>
      <motion.img variants={variants} animate={musicFlagValue ? 'rotate' : 'stop'} src='/images/contact_me_arrow.jpg' />
      <div className='Title'>
      <motion.p transition={{ type: 'tween', duration: 0.3 }}
         whileHover={{ scale: 1.1, originX: 1.1, originY: -0.4, color: '#FD2155', }}>
           Contact me</motion.p>
    </div>
    <div className='Description'>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
      </div>
      <div className='ContactForm'>
      <ContactForm />
      </div>
      <div className='GoogleMap'>
      <GoogleMap />
      </div>
    </div>
  );
}

export default Contact;

