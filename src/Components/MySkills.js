import '../Css/MySkills.css';
import ProgressBar from './Progress';
import { motion } from 'framer-motion';
import {ProgressBarData} from "./Helpers/ProgressBarData.js"; 


function MySkills() {
  return (
    <div className="MySkills" id='mySkillsId'>

<div className="HoverItContainer">
  <h2>Hover me</h2>
<img src='/images/my_skills_arrow.jpg' />
</div>
      
      
      <div className='Title'>
      {
      "My Skills \nand Experience".split('\n').map(function(txt){
        return <motion.p transition={{ type: 'tween', duration: 0.3 }}
         whileHover={{ scale: 1.1, originX: -0.1, originY: -0.4, color: '#FD2155', }}>
           {txt}</motion.p>
      })
    }
      </div>
      <div className='Description'>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div className='ProgressBars'>
        {
          ProgressBarData.map((val, key) => {
            return <ProgressBar color={val.color} width={val.width} value={val.value} max={val.max} text={val.text} />
          })
        }
      </div>
    </div>
  );
}

export default MySkills;
