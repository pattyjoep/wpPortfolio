import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './scss/App.scss';
import Info from './components/Info/Info'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="app">
      <Container fluid className="p-0 main-container">
        <Row className="main-row">
          <Col className="col-3 col-md-1">
            <Info></Info>
          </Col>
          <Col className="col-9 col-md-11 content">
            <Header></Header>
            <Projects></Projects>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
