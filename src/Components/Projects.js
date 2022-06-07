import '../Css/Projects.css';
import { useContext } from 'react';
import {motion} from 'framer-motion';
import {Grid} from '@material-ui/core';
import {ProjectsData} from "./Data/ProjectsData.js";
import {MusicFlag} from "./Data/MusicContext.js";
import { Link } from 'react-router-dom';

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
      <p>A small gallery of recent projects I’ve been involved in. Feel free to check them out.</p>
    </div>
    <div className='Grid'>
    <Grid container spacing={3}>
      {
        ProjectsData.map((val, key) => {
          return <Grid item>

       <div class="flip-card" onClick={() => window.open(val.link)}>
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src= {val.image}/>
    </div>
    <div class="flip-card-back">
      <h1>{val.title}</h1>
      <p>{val.description}</p>
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
