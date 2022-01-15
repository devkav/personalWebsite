import './App.css';
import { Component } from 'react';
import { Col } from 'reactstrap';
import WelcomePage from './pages/WelcomePage';
import Linkbar from './components/Linkbar';

class App extends Component {
  render() {
    return (
      <Col>
        <Linkbar />
        <WelcomePage />
      </Col>
    );
  }
}

export default App;
