import '../style/Experience.css';
import Chip from '../components/Chip';
import Resume from '../assets/docs/Devan Kavalchek Resume.pdf';
import { HiOutlineExternalLink } from 'react-icons/hi';


interface WorkTerm {
  title: string;
  dates: string;
  descriptions: string[];
}

interface Work {
  company: string;
  terms: WorkTerm[];
}

const technologies: string[] = [
  'ReactJS',
  'JavaScript',
  'TypeScript',
  'Python',
  'Perl',
  'Java',
  'SQL',
  'Dart',
  'Flutter',
  'Kotlin',
  'Flask',
  'Firebase',
  'AWS',
  'HTML',
  'CSS',
];

const work: Work[] = [
  {
    company: 'AMD',
    terms: [
      {
        title: 'Software Engineer 1',
        dates: 'June 2025 - Present',
        descriptions: [
          'Building AI tools for hardware emulation'
        ]
      },
      {
        title: 'Software Engineer Co-op',
        dates: 'May 2024 - August 2024',
        descriptions: [
            `Built a custom AI chatbot that assists silicon engineers in debugging failed emulation jobs.`,
            `Utilized LlamaIndex and GPT-4 to build a ReAct agent, allowing the chatbot to make decisions and dynamically fetch data to answer questions.`,
            `Utilized DeepEval to create a custom runtime metrics tracker and unit test suite for LLMs, allowing us to analyze the agent’s performance, usage, and accuracy over time.`
        ]
      },
      {
        title: 'Software Engineer Co-op',
        dates: 'August 2023 - December 2023',
        descriptions: [
          `Enhanced flask web server to display new metrics and improve user workflows.`,
          `Created a program to periodically log metrics that were used to optimize emulator scheduling and usage.`,
          `Created a maintenance web app that allows the infrastructure team to easily turn emulator resources on or off.`
        ]
      }
    ]
  },
  {
    company: 'Phoenicia Labs',
    terms: [
      {
        title: 'Mobile & Full Stack Engineer Co-op',
        dates: 'June 2023 - August 2023',
        descriptions: [
          `Utilized Flutter to build a client banking mobile application from the ground up.`,
          `Helped quickly build a MVP payroll system that raised $1.1 million from investors.`,
          `Worked around constantly shifting requirements and deadlines on a small, fast-paced team.`
        ]
      }
    ]
  },
  {
    company: 'Wayfair',
    terms: [
      {
        title: 'Full Stack Engineer Co-op',
        dates: 'July 2022 - December 2022',
        descriptions: [
          `Utilized ReactJS, TypeScript and Redux to fix, maintain and update internal marketing tools that are used to design and deliver billions of emails and push notifications every day.`,
          `Took ownership of the objective to migrate SQL tables and API endpoints from outdated PHP Monolith to Java Spring Boot.`
        ]
      }
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
                {work.map(({company, terms}, i) => (
                  <div className="work-item" key={`workItem${i}`}>
                    <p>
                      <b>{company}</b>
                    </p>
                    {terms.map(({title, dates, descriptions}) => (
                      <div>
                        <p>
                          <i>{title}</i>
                        </p>
                        <p className="job-dates">{dates}</p>
                        <ul>
                          {descriptions.map((description, i) => (
                            <li key={`expDesc${i}`}>{description}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}

                <a id="resume-link" target="_blank" rel="noreferrer" href={Resume}>
                    View Full Resume
                    <HiOutlineExternalLink className="ms-1" />
                </a>
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
                    <p>Graduated Magna Cum Laude</p>
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
