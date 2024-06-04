import '../style/App.css';
import {Col} from 'reactstrap';
import WelcomePage from './WelcomePage';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';
import Footer from '../components/Footer';

const SiteContent = () => {
  return (
    <Col>
      <WelcomePage />
      <AboutMe />
      <Experience />
      <Projects />
      <Footer />
    </Col>
  );
};

export default SiteContent;
