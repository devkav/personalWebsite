import { Component } from 'react';
import { Col, Container } from 'reactstrap';

class WelcomePage extends Component {
  render() {
    return (
      <div className="centered-col welcome-page">
        <Container className="welcome-text-container">
          <p className="welcome-text">Hi, my name is</p>
          <h1 className="welcome-text">Devan<br />Kavalchek</h1>
          <p className="welcome-text">A detail oriented software engineer.</p>
        </Container>
      </div>
    );
  }
}

export default WelcomePage;