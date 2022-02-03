import '../style/Experience.css';
import { Component } from 'react';
import Chip from '../components/Chip';

const technologies = [
    "Python",
    "Dart",
    "Java",
    "JavaScript",
    "JQuery",
    "PostgreSQL",
    "Kotlin",
    "HTML & CSS",
    "ReactJS",
    "Flutter",
    "Spark Java",
    "Flask",
    "Firebase"
]

class Experience extends Component {

    render() {
        let chips = []
        let numTechnologies = technologies.length

        for (let i = 0; i < numTechnologies; i++) {
            let current = technologies[i]
            chips.push(<Chip text={current} gradient={true} order={i} numItems={numTechnologies} key={i} />)
        }

        return (
            <div id="experience">
                <div className="centered-col">
                    <h2 id="experience-label">Experience</h2>
                    <div className="experience-container">
                        <div id="work" className="experience-section">
                            <h3>Work</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div id="technologies" className="experience-section">
                            <h3>Technologies</h3>
                            <div className="chips-container">
                                {chips}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;