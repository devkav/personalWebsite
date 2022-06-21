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

const work = [
    {
        title: "Software Engineer",
        company: "Wayfair",
        dates: "July 2022 - Present",
        descriptions: []
    },
    {
        title: "Course Assistant",
        company: "Rochester Institute of Technology",
        dates: "August 2021 - May 2022",
        descriptions: [
            `Assisted in teaching students the fundamentals of programming including data
            structures, algorithms, object oriented programming and test driven development
            using Python and Java`,
            `Attended classes to assist with in class activities and problem solving activities`,
            `Graded and provided feedback on over 130 assignments a week`
        ]
    }
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

    const createWork = () => {
        let elements = []
        let numWork = work.length

        for (let i = 0; i < numWork; i++) {
            let current = work[i];
            let descriptions = []
            let numDescriptions = current.descriptions.length

            for (let j = 0; j < numDescriptions; j++) {
                descriptions.push(<li>{current.descriptions[j]}</li>)
            }

            elements.push(
                <div className="work-item">
                    <p><b>{current.title}</b></p>
                    <p><i>{current.company}</i></p>
                    <p>{current.dates}</p>
                    <ul>
                        {descriptions}
                    </ul>
                </div>
            )
        }

        return elements
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
                                    <li><p>Expected Graduation: May 2025 (5 year program)</p></li>
                                    <li><p><b>Deans List</b> Spring 2021 to Present</p></li>
                                    <li><p>Member of Society of Software Engineers</p></li>
                                </ul>
                            </div>
                        </div>
                        <div id="awards" className="experience-section">
                            <h3>Awards</h3>
                            <p><b>BrickHack7</b> - Best Usage of Google Cloud</p>
                            <p><b>ClayHack 2020</b> - Best Project Design</p>
                            <p><b>Meet & Hack 2022</b> - 2nd Place Community Hack</p>
                        </div>
                    </div>

                    <div id="right-panel">
                        <div id="work" className="experience-section">
                            <h3>Work</h3>
                            <div className='work-content'>
                                {createWork()}
                            </div>
                        </div>
                        <div id="technologies" className="experience-section">
                            <h3>Technologies</h3>
                            <div className="chips-container">
                                {createChips()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;