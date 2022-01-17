import '../style/WelcomePage.css';
import { Component } from 'react';
import { Container } from 'reactstrap';
import LearnMore from '../components/LearnMore';
import Navbar from '../components/Navbar';
import TitleText from '../components/TitleText';
import { isMobile } from 'react-device-detect';

class WelcomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mouseX: 0,
      mouseY: 0,
      loaded: false
    }
  }

  componentDidMount() {
    this.load()
    const welcome = document.getElementById("welcome")
    welcome.scrollIntoView()
  }

  load = async () => {
    await this.sleep(1000)
    this.setState({ loaded: true })
  }

  sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  onMouseMove = (e) => {
    if (!isMobile) {
      this.setState({ mouseX: e.clientX, mouseY: e.clientY })
    }
  }

  onClick = () => {
    const aboutMe = document.getElementById("aboutMe")
    aboutMe.scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    let className = this.state.loaded ? "fade-in-end" : "fade-in-start"

    return (
      <div className={"welcome-page " + className} onMouseMove={this.onMouseMove} id="welcome">
        <Navbar />

        <div className="header-col centered-col">
          <Container className="welcome-text-container">
            <h4 className="welcome-text">Hi, my name is</h4>
            <TitleText mouseX={this.state.mouseX} mouseY={this.state.mouseY} />
            <h4 className="welcome-text">A detail oriented software engineer.</h4>
          </Container>
        </div>

        <LearnMore onClick={this.onClick} />
      </div>
    );
  }
}

export default WelcomePage;