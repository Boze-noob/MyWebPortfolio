import '../Css/Projects.css';
import { useContext } from 'react';
import {motion} from 'framer-motion';
import {Grid} from '@material-ui/core';
import {ProjectsData} from "./Helpers/ProjectsData.js";
import {MusicFlag} from "../Components/Helpers/MusicContext.js";

function Projects() {
  const {musicFlagValue, setMusicFlagValue} = useContext(MusicFlag);
  const variants = {
    stop: { y: [0, 20, 0], transition: { repeat: Infinity, repeatDelay: 3, }}
  };


  return (
    <div className="Projects" id='projectsId'>
      <div className='Arrow'>
        <img src='/images/projects_arrow.jpg'/>
        <motion.h2 variants={variants} animate={musicFlagValue ? 'rotate' : 'stop'}>Hover and click me!</motion.h2>
      </div>
      <div className='Title'>
       <motion.p transition={{ type: 'tween', duration: 0.3 }}
         whileHover={{ scale: 1.1, originX: 1.1, originY: -0.4, color: '#FD2155', }}>
           Projects</motion.p>
    </div>
    <div className='Description'>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    <div className='Grid'>
    <Grid container spacing={3}>
      {
        ProjectsData.map((val, key) => {
          return <Grid item>
         <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src='/images/sidebar_b.jpg' />
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
          </Grid> 
        }
        )
      }
</Grid>
    </div>
    </div>
  );
}

export default Projects;
