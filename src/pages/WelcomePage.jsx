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
      mouseY: 0
    }
  }

  onMouseMove = (e) => {
    this.setState({mouseX: e.clientX, mouseY: e.clientY})
  }

  render() {
    return (
      <div className="welcome-page" onMouseMove={this.onMouseMove}>
        <Navbar />

        <div className="header-col centered-col">
          <Container className="welcome-text-container">
            <h3 className="welcome-text">Hi, my name is</h3>
            <TitleText mouseX={this.state.mouseX} mouseY = {this.state.mouseY}/>
            <h3 className="welcome-text">A detail oriented software engineer.</h3>
          </Container>
        </div>

        <LearnMore />
      </div>
    );
  }
}

export default WelcomePage;