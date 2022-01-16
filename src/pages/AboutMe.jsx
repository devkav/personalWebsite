import '../style/AboutMe.css';
import { Component } from 'react';

class AboutMe extends Component {
    render() {
        return (
            <div id="aboutMe">
                <div className="fit-content" id="about-me-par">
                    <h2 className="fit-content">About Me</h2>
                    <p>Hi, My name is Devan Kavalchek. I'm a passionate and detail oriented
                        software engineer. Currently, I'm pursuing a bachelors in software engineering
                        at the Rochester Institute of Technology.</p>
                    <p>Lorem ipsum</p>
                </div>
            </div>
        );
    }
}

export default AboutMe;