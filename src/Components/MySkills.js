import '../Css/MySkills.css';
import ProgressBar from './Progress';
import { motion } from 'framer-motion';

function MySkills() {
  return (
    <div className="MySkills" id='mySkillsId'>
      
      <div className='Title'>
      {
      "My Skills \nand Experience".split('\n').map(function(txt){
        return <motion.p transition={{ type: 'tween', duration: 0.3 }}
         whileHover={{ scale: 1.1, originX: -0.1, originY: -0.4, color: '#FD2155', }}>
           {txt}</motion.p>
      })
    }
      </div>
      <ProgressBar color={"#ff7979"} width={"150px"} value={20} max={100} />
    </div>
  );
}

export default MySkills;
