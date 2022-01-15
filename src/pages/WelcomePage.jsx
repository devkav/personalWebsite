import { Component } from 'react';
import { Container } from 'reactstrap';
import LearnMore from '../components/LearnMore';
import Navbar from '../components/Navbar';

class WelcomePage extends Component {
  render() {
    return (
      <div className="welcome-page">
        <Navbar />

        <div className="header-col centered-col">
          <Container className="welcome-text-container">
            <h3 className="welcome-text">Hi, my name is</h3>
            <h1 className="welcome-text">Devan<br />Kavalchek</h1>
            <h3 className="welcome-text">A detail oriented software engineer.</h3>
          </Container>
        </div>

        <LearnMore/>
      </div>
    );
  }
}

export default WelcomePage;