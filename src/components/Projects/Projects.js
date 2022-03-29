import React from 'react';
import PropTypes from 'prop-types';
import styles from './Projects.module.scss';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn, faReact, faAngular, faHtml5, faCss3, faSass, faBootstrap, faJs, faNode, faNpm, faPython, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

import matrixioScreenshot from './images/MatrixioScreenshot.png'
import dayPlannerScreenshot from './images/DayPlannerScreenshot.png'
import diplomacyScreenshot from './images/DiplomacyScreenshot.png'
import noteTakerScreenshot from './images/NoteTakerScreenshot.png'
import passwordGenScreenshot from './images/PasswordGeneratorScreenshot.png'
import weatherDashScreenshot from './images/WeatherDashScreenshot.png'

import matrixioLogoSolo from "./images/logos/MatrixioLogoSolo.png"
import codeBlockLogo from "./images/logos/CodeBlockLogo.png"
import stichLogo from "./images/logos/StichLogoSolo.png"
import timeVeilLogo from "./images/logos/TimeVeilSoloBlue.png"
import wizardTreeLogoWhite from "./images/logos/WizardTreeLogoWhite.png"

const Projects = () => (
  <div className="projects" data-testid="Projects">
    <Container className="mt-2 mb-2">
        <Row>
          <h5>Websites & Applications:</h5> 
          <Col sm={12} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={matrixioScreenshot} />
              <Card.Body>
                <Card.Title>Matrixio</Card.Title>
                <Card.Text>
                  M.E.R.N stack application to conduct matrix training exercises online. Create an account, add a student, start a matrix.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col>
                    <Card.Link href="https://github.com/pjpetro/Matrixio" target="_blank">
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                    </Card.Link>
                  </Col>
                  <Col>
                    <Card.Link href="https://serene-river-18393.herokuapp.com/" target="_blank">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
                    </Card.Link>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm={12} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={dayPlannerScreenshot} />
              <Card.Body>
                <Card.Title>Task Manager</Card.Title>
                <Card.Text>
                  Kanban style task manager with a drag and drop UI to update the staus of tasks, keeping all your "to-do's" nice and tidy.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col>
                    <Card.Link href="https://github.com/pjpetro/DayPlanner" target="_blank">
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                    </Card.Link>
                  </Col>
                  <Col>
                    <Card.Link href="https://pjpetro.github.io/DayPlanner" target="_blank">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
                    </Card.Link>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm={12} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={noteTakerScreenshot} />
              <Card.Body>
                <Card.Title>Note Taker</Card.Title>
                <Card.Text>
                  Add something to your shopping list or just a reminder for later using this note taking application.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col>
                    <Card.Link href="https://github.com/pjpetro/NoteTaker" target="_blank">
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                    </Card.Link>
                  </Col>
                  <Col>
                    <Card.Link href="https://pjp-notetaker.herokuapp.com/" target="_blank">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
                    </Card.Link>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm={12} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={passwordGenScreenshot} />
              <Card.Body>
                <Card.Title>Password Generator</Card.Title>
                <Card.Text>
                  Need a password, but can't think of anything to use? Generate a secure password here with the click of a button!
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col>
                    <Card.Link href="https://github.com/pjpetro/PasswordGenerator" target="_blank">
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                    </Card.Link>
                  </Col>
                  <Col>
                    <Card.Link href="https://pjpetro.github.io/PasswordGenerator/" target="_blank">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
                    </Card.Link>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm={12} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={diplomacyScreenshot} />
              <Card.Body>
                <Card.Title>Diplomacy</Card.Title>
                <Card.Text>
                  Keep track of and trade resources while playing the board game, <em>Diplomacy</em>, with this website. More features to come!
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col>
                    <Card.Link href="https://github.com/pjpetro/Diplomacy" target="_blank">
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                    </Card.Link>
                  </Col>
                  <Col>
                    <Card.Link href="https://pjpetro.github.io/Diplomacy/" target="_blank">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
                    </Card.Link>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm={12} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={weatherDashScreenshot} />
              <Card.Body>
                <Card.Title>Weather Dashbord</Card.Title>
                <Card.Text>
                  Look up the weather of a specific city with this weather dashboard and see the 5 day forecast.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col>
                    <Card.Link href="https://github.com/pjpetro/WeatherDash" target="_blank">
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                    </Card.Link>
                  </Col>
                  <Col>
                    <Card.Link href="https://pjpetro.github.io/WeatherDash" target="_blank">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
                    </Card.Link>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        </Row>    
        {/* <Row>
          <h5>Graphics & Logos:</h5>
          <Col>
            <Row className="mt-3 logo-row">
              <Col sm={12} lg={3} className="text-center mb-3 mx-auto">
                <img src={wizardTreeLogoWhite} class="logo" alt="WizardTree Logo"></img>
              </Col>
              <Col sm={12} lg={9} className="text-center mb-3 mx-auto">
                <p>I created this logo for the Connecticut based company, <em><a href="https://www.wizardtreephotography.com/" target="_blank">WizardTree Photography</a></em>.</p>
              </Col>
            </Row>
            <Row className="mt-3 logo-row">
              <Col sm={12} lg={3} className="text-center mb-3 mx-auto">
                <img src={matrixioLogoSolo} class="logo" alt="Matrixio Logo"></img>
              </Col>
              <Col sm={12} lg={9} className="text-center mt-3 mb-3 mx-auto">
                <p>I created this logo for my final project, <em>Matrixio</em>, during my time in the Full Stack Web Development program at UCONN.</p>
              </Col>
            </Row>
            <Row className="mt-3 logo-row">
              <Col sm={12} lg={3} className="text-center mb-3 mx-auto">
                <img src={timeVeilLogo} class="logo" alt="Time Veil Logo"></img>
              </Col>
              <Col sm={12} lg={9} className="text-center mb-3 mx-auto">
                <p>I created this logo for one of my earlier projects during my time in the Full Stack Web Development program at UCONN.</p>
              </Col>
            </Row>
          </Col>
        </Row> */}
    </Container>
  </div>
);

Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
