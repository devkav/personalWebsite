import '../style/Experience.css';
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

function Experience(props) {
    const createChips = () => {
        let chips = []
        let numTechnologies = technologies.length

        for (let i = 0; i < numTechnologies; i++) {
            let current = technologies[i]
            chips.push(<Chip text={current} gradient={true} order={i} numItems={numTechnologies} key={i} />)
        }

        return chips
    }

    return (
        <div id="experience">
            <div className="centered-col">
                <h2 id="experience-label">Experience</h2>
                <div className="experience-container">
                    <div id="left-panel">
                        <div id="education" className="experience-section">
                            <h3>Education</h3>
                            <p>Lorem Ipsum</p>
                        </div>
                        <div id="work" className="experience-section">
                            <h3>Work</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                    <div id="right-panel" className="experience-section">
                        <div id="technologies" className="experience-section">
                            <h3>Technologies</h3>
                            <div className="chips-container">
                                {createChips()}
                            </div>
                        </div>
                        <div id="awards" className="experience-section">
                            <h3>Awards</h3>
                            <p><b>BrickHack7</b> - Best Usage of Google Cloud</p>
                            <p><b>ClayHack 2020</b> - Best Project Design</p>
                            <p><b>Meet & Hack 2022</b> - 2nd Place Commnunity Hack</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;