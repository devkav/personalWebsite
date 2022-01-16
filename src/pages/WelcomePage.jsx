import '../style/WelcomePage.css';
import { Component } from 'react';
import { Container } from 'reactstrap';
import LearnMore from '../components/LearnMore';
import Navbar from '../components/Navbar';
import TitleText from '../components/TitleText';

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
  }

  load = async () => {
    await this.sleep(1000)
    this.setState({ loaded: true })
  }

  sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  onMouseMove = (e) => {
    this.setState({ mouseX: e.clientX, mouseY: e.clientY })
  }

  onClick = () => {
    const aboutMe = document.getElementById("aboutMe")
    aboutMe.scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    let className = this.state.loaded ? "fade-in-end" : "fade-in-start"

    return (
      <div className={"welcome-page " + className} onMouseMove={this.onMouseMove}>
        <Navbar />

        <div className="header-col centered-col">
          <Container className="welcome-text-container">
            <h3 className="welcome-text">Hi, my name is</h3>
            <TitleText mouseX={this.state.mouseX} mouseY={this.state.mouseY} />
            <h3 className="welcome-text">A detail oriented software engineer.</h3>
          </Container>
        </div>

        <LearnMore onClick={this.onClick} />
      </div>
    );
  }
}

export default WelcomePage;