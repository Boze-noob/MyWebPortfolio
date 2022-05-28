import React from 'react'
import "../App.css";
import {SidebarData} from "./Helpers/SidebarData";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Sidebar() {
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
      id={window.location.pathname == val.link ? "active" : ""}
      onClick ={() => {
        window.location.pathname = val.link
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