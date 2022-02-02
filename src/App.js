import './style/App.css';
import { Component } from 'react';
import { Col } from 'reactstrap';
import Linkbar from './components/Linkbar';
import WelcomePage from './pages/WelcomePage';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Footer from './components/Footer';

const darkModeBgColor = 'rgb(30, 30, 30)';
const darkModeTextColor = '#fff';

const lightModeBgColor = '#fff';
const lightModeTextColor = '#212529';

class App extends Component {
  toggleDarkMode = (enabled) => {
    document.documentElement.style.setProperty(
      '--bs-body-color', enabled ? darkModeTextColor : lightModeTextColor
    );
    document.documentElement.style.setProperty(
      '--bs-body-bg', enabled ? darkModeBgColor : lightModeBgColor
    );
  }

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
