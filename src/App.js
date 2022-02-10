import './style/App.css';
import { Component } from 'react';
import { Col } from 'reactstrap';
import Linkbar from './components/Linkbar';
import WelcomePage from './pages/WelcomePage';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import MetaTags from 'react-meta-tags';

const darkModeBgColor = 'rgb(30, 30, 30)';
const darkModeTextColor = '#fff';
const darkModeCardColor = 'rgb(40, 40, 40)';

const lightModeBgColor = '#fff';
const lightModeTextColor = '#212529';
const lightModeCardColor = '#fff'

class App extends Component {
    toggleDarkMode = (enabled) => {
        document.documentElement.style.setProperty(
            '--bs-body-color', enabled ? darkModeTextColor : lightModeTextColor
        );
        document.documentElement.style.setProperty(
            '--bs-body-bg', enabled ? darkModeBgColor : lightModeBgColor
        );
        document.documentElement.style.setProperty(
            '--bs-card-color', enabled ? darkModeCardColor : lightModeCardColor
        );
    }

    render() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.toggleDarkMode(prefersDark)
        let themeColor = prefersDark ? darkModeBgColor : lightModeBgColor;

        return (
            <Col>
                <MetaTags>
                    <meta name="theme-color" content={themeColor} />
                </MetaTags>

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
