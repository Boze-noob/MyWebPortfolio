import '../Css/Contact.css';
import {motion} from 'framer-motion';
import ContactForm from './ContactForm.js';
import GoogleMap from '../Components/GoogleMap.js';
import {useContext} from 'react';
import {MusicFlag} from "../Components/Data/MusicContext.js";


function Contact() {
  const {musicFlagValue, setMusicFlagValue} = useContext(MusicFlag);
  const variants = {
    stop: { x: [0, -10, 0], y: [0, 10, 0], transition: { repeat: Infinity, repeatDelay: 1 }, },
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
        <p>I’m interested in freelance opportunities – especially medium or large projects. However, if you have other request or question, don’t hesitate to use the form.</p>
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

