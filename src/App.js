import './style/App.css';
import { Component } from 'react';
import { Col } from 'reactstrap';
import Linkbar from './components/Linkbar';
import WelcomePage from './pages/WelcomePage';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Col>
        <Linkbar />
        <WelcomePage />
        <AboutMe />
        <Experience />
        <Projects />
        <Footer />
      </Col>
    );
  }
}

export default App;
