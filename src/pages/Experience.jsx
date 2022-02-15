import '../style/Experience.css';
import Chip from '../components/Chip';

const technologies = [
    "Java",
    "Python",
    "JavaScript",
    "Kotlin",
    "React",
    "PostgreSQL",
    "Dart",
    "Flutter",
    "Flask",
    "JQuery",
    "Firebase",
    "HTML & CSS",
    "Spark Java",
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
                            <div className='education-container'>
                                <p className='education-label'>
                                    <b>Rochester Institute of Technology</b><br />
                                </p>
                                <ul>
                                    <li><p>B.S. in Software Engineering</p></li>
                                    <li><p><b>Deans List</b> Spring 2021 to Present</p></li>
                                    <li><p>Expected Graduation: May 2025 (5 year program)</p></li>
                                </ul>
                            </div>
                        </div>
                        <div id="work" className="experience-section">
                            <h3>Work</h3>
                            <div className='work-content'>
                                <p><b>Course Assistant</b></p>
                                <p><i>Rochester Institute of Technology</i></p>
                                <p>August 2021 - Present</p>
                                <ul>
                                    <li>
                                        Assisted in teaching students the fundamentals of programming including data
                                        structures, algorithms, object oriented programming and test driven development
                                        using Python and Java
                                    </li>
                                    <li>
                                        Attended classes to assist with in class activities and problem solving activities
                                    </li>
                                    <li>
                                        Graded and provided feedback on over 130 assignments a week
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="right-panel">
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
                            <p><b>Meet & Hack 2022</b> - 2nd Place Community Hack</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;