import '../style/App.css';
import { Col } from 'reactstrap';
import Linkbar from '../components/Linkbar';
import WelcomePage from './WelcomePage';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';
import Footer from '../components/Footer';

function SiteContent(props) {
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

export default SiteContent;
