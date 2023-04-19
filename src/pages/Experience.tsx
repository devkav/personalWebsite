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
    company: 'Wayfair',
    title: 'Software Engineer',
    dates: 'July 2022 - December 2022',
    descriptions: [
      `Utilized ReactJS, TypeScript and Redux to fix, maintain and update internal marketing tools that are used to design and deliver billions of emails and push notifications every day.
      `,
      `Resolved the highest number of story points in a single month on the frontend notifications team for the year.`,
      `Improved code health by eliminating hundreds of code smells in the codebase.`,
      `Passed JavaScript and coding standards proficiency assessment.`,
      `Took ownership of OKR objective to migrate API endpoints from PHP Monolith to
      Java Spring Boot. Migrated existing SQL data into the new database.`,
      `Took complete ownership of a feature from idea to completion. Utilized algorithmic
      principles to design and implement it independently. Demoed the feature to stakeholders, keeping them updated with the progress. Received overwhelmingly positive feedback from stakeholders upon completion.`
    ]
  },
  {
    company: 'Rochester Institute of Technology',
    title: 'Course Assistant',
    dates: 'August 2021 - May 2022',
    descriptions: [
      `Assisted in teaching students the fundamentals of programming including data
            structures, algorithms, object oriented programming and test driven development
            using Python and Java.`,
      `Attended classes to assist with in class activities and problem solving activities.`,
      `Graded and provided feedback on over 130 assignments a week.`
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
          </div>

          <div id="right-panel">
            <div id="work" className="experience-section">
              <h3>Work</h3>
              <div className="work-content">
                {work.map(({company, title, dates, descriptions}) => (
                  <div className="work-item">
                    <p>
                      <b>{company}</b>
                    </p>
                    <p>
                      <i>{title}</i>
                    </p>
                    <p>{dates}</p>
                    <ul>
                      {descriptions.map((description) => (
                        <li>{description}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
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
                    key={i}
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
