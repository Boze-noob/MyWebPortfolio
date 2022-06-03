import '../Css/Contact.css';
import {motion} from 'framer-motion';


function Contact() {
  return (
    <div className="Contact" id='contactId'>
      <div className='Title'>
      <motion.p transition={{ type: 'tween', duration: 0.3 }}
         whileHover={{ scale: 1.1, originX: -0.1, originY: -0.4, color: '#FD2155', }}>
           Contact me</motion.p>
    </div>
    <div className='Description'>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
      </div>
    </div>
  );
}

export default Contact;
