import React from 'react';
import PropTypes from 'prop-types';

import styles from './Info.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, SubMenu, Menu, MenuItem } from 'react-pro-sidebar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFileArrowDown, faUser, faLaptopCode, faExpand, faEye } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn, faReact, faAngular, faHtml5, faCss3, faSass, faBootstrap, faJs, faNode, faNpm, faPython, faFontAwesome } from '@fortawesome/free-brands-svg-icons';

import headshot from './images/headshot.png';
import resume from './documents/PatrickJPetroResume.pdf'

const Info = () => (
  <div className="info" data-testid="Info">
    <ProSidebar id="sidebar" className="sidebar" collapsed="true">
      <SidebarHeader>
        <Menu iconShape="circle">
          <MenuItem icon={<img src={headshot} className="headshot" alt="Headshot"></img>}>Patrick Petro<br />
              <small>Full Stack Web Developer</small>
          </MenuItem>
        </Menu>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<FontAwesomeIcon icon={faLaptopCode} />}>Portfolio</MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faGithub} />} onClick={routeGithub}>Github</MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faLinkedinIn} />} onClick={routeLinkedin}>LinkedIn</MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faEnvelope} />} onClick={sendEmail}>Email</MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faFileArrowDown} />} onClick={downloadResume}>Resume</MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter>
        <Menu iconShape="circle">
          <MenuItem icon={<FontAwesomeIcon icon={faExpand} />} onClick={sidebarToggle}> Collapse</MenuItem>
        </Menu>
        
       
        
      </SidebarFooter>
    </ProSidebar>
  </div>
);

Info.propTypes = {};

Info.defaultProps = {};

function routeGithub() {
  const githubLink = "https://github.com/pjpetro";
  window.open(githubLink, "_blank");    
}

function routeLinkedin() {
  const linkedInLink = "https://www.linkedin.com/in/patrickjpetro/";
  window.open(linkedInLink, "_blank");    
}

function sendEmail() {
  const mailto = "mailto:patrickjpetro@icloud.com?subject=Hello!";
  window.location.href = mailto;
}

function downloadResume() {
  window.open(resume, "_blank");   
}

function sidebarToggle() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.classList.contains("collapsed")) {
    sidebar.classList.remove("collapsed");
  } else {
    sidebar.classList.add("collapsed");
  }
}

export default Info;
