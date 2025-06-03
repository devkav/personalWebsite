import Linkbar from 'components/Linkbar';
import '../style/AboutMe.css';

const AboutMe = () => {
  return (
    <div id="aboutMe">
      <div className="fit-content" id="about-me-content">
        <h2 className="fit-content">About Me</h2>
        <p>
          Hi, my name is Devan Kavalchek, I'm a passionate and detail oriented
          software engineer. I'm currently a software engineer at AMD working on 
          AI tools for hardware emulation.
        </p>
        <p>
          I'm extremely passionate about software and love expressing my
          creativity through it. I always strive to have an in-depth
          understanding of whatever language or framework I'm working with so
          that I can better optimize and style my code. I'm a fast learner and
          always looking for a new technology to learn.
        </p>
        <p>Keep scrolling to see what I've been working on!</p>

        <Linkbar/>
      </div>
    </div>
  );
};

export default AboutMe;
