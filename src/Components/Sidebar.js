import React, {useState} from 'react'
import "../App.css";
import {SidebarData} from "./Helpers/SidebarData";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Route } from 'react-router-dom';

function Sidebar() {

  const [sectionFlag, switchSection] = useState('/intro');

  return (
    <div className='Sidebar'>
      <div className='BasicInfoBloc'>
        <img id='image' src='/images/sidebar_b.jpg' />
        <p id='name'>Skoko Bože</p>
        <p>Mobile developer</p>
      </div>
    <ul className='SidebarList'>  
      {SidebarData.map((val, key) =>{
      return <li key={key}
      className="Row"
      id={sectionFlag == val.link ? "active" : ""}
      onClick ={() => {
        var componentId;
        console.log(sectionFlag);
        if(val.link === '/intro'){
          componentId = 'introId';
        } else if(val.link === '/mySkills'){
          componentId = 'mySkillsId';
        }  else if(val.link === '/projects'){
          componentId = 'projectsId';
        }  else if(val.link === '/aboutMe'){
          componentId = 'aboutMeId';
        }  else{
          componentId = 'contactId';
        }
        const anchor = document.getElementById(componentId);
        anchor.scrollIntoView({behavior:'smooth', block: 'center'});

        switchSection(val.link);
        }
        }>
        <div id='title'>{val.title}</div>
      </li>
    })}
    </ul>
    <div id='bottomIcons'>
    <GitHubIcon id='githubIcon' onClick = {() =>  window.open("https://github.com/Boze-noob", "_blank")}/>
    <LinkedInIcon id='linkedInIcon' onClick = {() => window.open("https://ba.linkedin.com/in/bo%C5%BEe-skoko-429170210")}/>
    </div>
    </div>
  )
}

export default Sidebar