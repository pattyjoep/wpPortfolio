import logo from './logo.svg';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './scss/App.scss';

import Info from './components/Info/Info'
import About from './components/About/About'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="app">
        <Container fluid className="p-0 main-container">
          <Row className="main-row">
            <Col className="col-3 col-md-1">
              <Info />
            </Col>
            <Col className="col-9 col-md-11 content">
              <Header />
              <Projects />
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
