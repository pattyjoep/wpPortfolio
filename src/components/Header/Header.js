import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faReact, faAngular, faHtml5, faCss3, faSass, faBootstrap, faJs, faNode, faNpm, faPython, faFontAwesome } from '@fortawesome/free-brands-svg-icons';

const Header = () => (
  <div className="header" data-testid="Header">
    <Navbar>
      <Container>
        <Navbar.Brand className="m-auto">Portfolio</Navbar.Brand>
        {/* <Nav className="me-auto">
          <Nav.Link>
            <FontAwesomeIcon icon={faReact} />
          </Nav.Link>
          <Nav.Link>
            <FontAwesomeIcon icon={faAngular} />
          </Nav.Link>
          <Nav.Link>
            <FontAwesomeIcon icon={faHtml5} />
          </Nav.Link>
          <Nav.Link>
            <FontAwesomeIcon icon={faCss3} />
          </Nav.Link>
          <Nav.Link>
            <FontAwesomeIcon icon={faSass} />
          </Nav.Link>
          <Nav.Link>
            <FontAwesomeIcon icon={faBootstrap} />
          </Nav.Link>
          <Nav.Link>
            <FontAwesomeIcon icon={faJs} />
          </Nav.Link>
          <Nav.Link>
            <FontAwesomeIcon icon={faNode} />
          </Nav.Link>
          <Nav.Link>
            <FontAwesomeIcon icon={faNpm} />
          </Nav.Link>
          <Nav.Link>
            <FontAwesomeIcon icon={faPython} />
          </Nav.Link>
        </Nav> */}
      </Container>
    </Navbar>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
