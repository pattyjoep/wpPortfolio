import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.module.scss';


import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

const About = () => (
  <div className={styles.About} data-testid="About">
    About
  </div>
);

About.propTypes = {};

About.defaultProps = {};

export default About;
