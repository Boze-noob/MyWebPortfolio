import '../Css/Projects.css';
import {motion} from 'framer-motion';
import {Grid} from '@material-ui/core';
import {ProjectsData} from "./Helpers/ProjectsData.js";

function Projects() {

  return (
    <div className="Projects" id='projectsId'>
      <div className='Title'>
       <motion.p transition={{ type: 'tween', duration: 0.3 }}
         whileHover={{ scale: 1.1, originX: 1.1, originY: -0.4, color: '#FD2155', }}>
           Projects</motion.p>
    </div>
    <div className='Description'>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    <div className='Grid'>
    <Grid container spacing={2}>
      {
        ProjectsData.map((val, key) => {
          return <Grid item xs={2}>
          <div className='Card'>
            <p>{val.title}</p>
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
