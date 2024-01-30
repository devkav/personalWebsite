import '../style/Experience.css';
import Chip from '../components/Chip';

interface Work {
  company: string;
  title: string;
  dates: string;
  descriptions: string[];
}

const technologies: string[] = [
  'ReactJS',
  'JavaScript',
  'TypeScript',
  'Java',
  'Python',
  'SQL',
  'Dart',
  'Flutter',
  'Kotlin',
  'Flask',
  'Firebase',
  'HTML',
  'CSS',
  'SASS'
];

const work: Work[] = [
  {
    company: 'AMD',
    title: 'Software Engineer Co-op',
    dates: 'August 2023 - December 2023',
    descriptions: [
      `Enhanced flask web server to display new metrics and improve user workflows.`,
      `Created a program to periodically log metrics that were used to optimize emulator scheduling and usage.`
    ]
  },
  {
    company: 'Phoenicia Labs',
    title: 'Mobile & Full Stack Engineer Co-op',
    dates: 'June 2023 - August 2023',
    descriptions: [
      `Utilized Flutter to build a client banking mobile application from the ground up.`,
      `Helped quickly build a MVP payroll system that raised $1.1 million from investors.`,
      `Worked around constantly shifting requirements and deadlines on a small, fast-paced team.`
    ]
  },
  {
    company: 'Wayfair',
    title: 'Full Stack Engineer Co-op',
    dates: 'July 2022 - December 2022',
    descriptions: [
      `Utilized ReactJS, TypeScript and Redux to fix, maintain and update internal marketing tools that are used to design and deliver billions of emails and push notifications every day.`,
      `Took ownership of the objective to migrate SQL tables and API endpoints from outdated PHP Monolith to Java Spring Boot.`
    ]
  }
];

const Experience = () => {
  return (
    <div id="experience">
      <div className="centered-col">
        <h2 id="experience-label">Experience</h2>
        <div className="experience-container">
          <div id="left-panel">
            <div id="work" className="experience-section">
              <h3>Work</h3>
              <div className="work-content">
                {work.map(({company, title, dates, descriptions}, i) => (
                  <div className="work-item" key={`workItem${i}`}>
                    <p>
                      <b>{company}</b>
                    </p>
                    <p>
                      <i>{title}</i>
                    </p>
                    <p>{dates}</p>
                    <ul>
                      {descriptions.map((description, i) => (
                        <li key={`expDesc${i}`}>{description}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="right-panel">
            <div id="education" className="experience-section">
              <h3>Education</h3>
              <div className="education-container">
                <p className="education-label">
                  <b>Rochester Institute of Technology</b>
                  <br />
                </p>
                <ul>
                  <li>
                    <p>B.S. in Software Engineering</p>
                  </li>
                  <li>
                    <p>Expected Graduation: May 2025 (5 year program)</p>
                  </li>
                  <li>
                    <p>
                      <b>Deans List</b> Spring 2021 to Present
                    </p>
                  </li>
                  <li>
                    <p>Member of Society of Software Engineers</p>
                  </li>
                </ul>
              </div>
            </div>
            <div id="awards" className="experience-section">
              <h3>Awards</h3>
              <p>
                <b>BrickHack7</b> - Best Usage of Google Cloud
              </p>
              <p>
                <b>ClayHack 2020</b> - Best Project Design
              </p>
              <p>
                <b>Meet & Hack 2022</b> - 2nd Place Community Hack
              </p>
            </div>
            <div id="technologies" className="experience-section">
              <h3>Technologies</h3>
              <div className="chips-container">
                {technologies.map((technology, i) => (
                  <Chip
                    text={technology}
                    gradient={true}
                    order={i}
                    numItems={technologies.length}
                    key={`tech${i}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
