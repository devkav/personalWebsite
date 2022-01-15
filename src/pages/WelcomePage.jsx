import { Component } from 'react';
import { Container } from 'reactstrap';
import LearnMore from '../components/LearnMore';
import Navbar from '../components/Navbar';

class WelcomePage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      degrees: 0
    }
  }

  onMouseMove = (e) => {
    let centerX = window.innerWidth / 2
    let centerY = window.innerHeight / 2
    let currentX = e.screenX
    let currentY = e.screenY
    let rise = centerY + (centerY - currentY)
    let run = currentX - centerX

    let radians = Math.atan(rise / run)
    let degrees = radians * (180 / Math.PI)

    if (run >= 0) {
      if (rise <= 0) {
        degrees += 360
      }
    } else {
        degrees += 180
    }

    degrees = Math.round(degrees)

    if (this.state.degrees !== degrees) {
      this.setState({degrees: degrees})
    }
  }
  render() {
    return (
      <div className="welcome-page" onMouseMove={this.onMouseMove}>
        <Navbar />

        <div className="header-col centered-col">
          <Container className="welcome-text-container">
            <h3 className="welcome-text">Hi, my name is</h3>
            <h1 className="welcome-text" style={{
              "backgroundImage": "-webkit-linear-gradient(" + this.state.degrees + "deg, #7E3FF2, #f23fb3)",
              "backgroundClip": "text",
              "WebkitTextFillColor": "transparent"
            }}>Devan<br />Kavalchek</h1>
            <h3 className="welcome-text">A detail oriented software engineer.</h3>
          </Container>
        </div>

        <LearnMore />
      </div>
    );
  }
}

export default WelcomePage;