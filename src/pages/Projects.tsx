import '../style/Projects.css';
import ProjectCarousel from '../components/ProjectCarousel';
import ProjectDisplay from '../components/ProjectDisplay';

import froggyScreenshot from 'assets/images/froggyScreenshot.png';
import geneticAlgorithmScreenshot from 'assets/images/geneticAlgorithmScreenshot.png';
import mathFlowScreenshot from 'assets/images/mathFlowScreenshot.png';
import redpointScreenshot from 'assets/images/redpointScreenshot.png';
import xsjScreenshot from 'assets/images/xsjScreenshot.png';

export interface Project {
  title: string;
  image?: any;
  description: string[];
  tags: string[];
  githubLink: string;
  link?: string;
}

const highlightedProjects: Project[] = [
  {
    title: 'froggy.app',
    image: froggyScreenshot,
    description: [
      `froggy is a project centered around learning and the love of programming. froggy is a link shortener built with a colleague of mine. Our goal is to push ourselves technically and creatively to build a full-fledged web application from the ground up. This project gives us a space to practice technologies we used in industry, want to learn, or just love using.`,
      `We use a SCRUM development lifecycle to track progress. Additionally, we have written documentation and coding standards to keep the codebase clear and consistent.`,
      `froggy uses a custom component library, lilypad, built and designed by me. This lets me fine-tune the look of the interface while also learning more about npm packages. I use Storybook to prototype components and npm to publish.
      The majority of my development work is on the frontend, where I use ReactJS, Redux and Typescript. However, I also learned Go, Docker and Google Cloud Platform to help my colleague develop our API on the backend.`
    ],
    tags: [
      'ReactJS',
      'Redux',
      'TypeScript',
      'SASS',
      'Go',
      'SQL',
      'Storybook',
      'Web Development'
    ],
    githubLink: 'https://github.com/froggy-app',
  },
  {
    title: 'Artist Portfolio',
    image: xsjScreenshot,
    description: [
      `This project is a website and digital portfolio that I built for a 
            friend of mine. The design of the site was a collaborative effort, with 
            most of the main decisions being made by them. The site is designed to 
            display art work in a unique and customizable way. I built an admin page 
            that allows the artist to upload and edit the content of the site at 
            any time.`,
      `The site was built using ReactJS for the front end. The back end uses 
            Firebase to store image metadata and Amazon Web Service’s S3 to host the 
            images.`
    ],
    tags: ['ReactJS', 'Redux', 'Firebase', 'AWS S3', 'Web Development'],
    githubLink: 'https://github.com/devkav/xavier-portfolio',
  },
  {
    title: 'MathFlow',
    image: mathFlowScreenshot,
    description: [
      `MathFlow makes math intuitive by turning math problems into interactive puzzles. I had this idea for a while, 
      but was always scared of the implementation. The idea of building a drag-and-drop workspace that obeyed the rules 
      of math always seemed too complicated. But, when BrickHack 9 came, my friend and I decided to commit to the idea. 
      We are both very happy with how it came out and how much we were able to accomplish in the little time we had. 
      `,
      `We built MathFlow during a 24 hour hackathon using React and TypeScript. I utilized vanilla TypeScript classes 
      to model the different data types that were necessary for the application. We also used a React drag and drop 
      library which was difficult to learn and gave us some unique bugs. However, we were able to build a working 
      prototype with lots of functionality that surpassed our goals.`
    ],
    tags: ['ReactJS', 'Web Development'],
    githubLink: 'https://github.com/MathFlow-tech/mathflow-tech.github.io',
    link: 'https://mathflow-tech.github.io/'
  },
  {
    title: 'Redpoint',
    image: redpointScreenshot,
    description: [
      `Redpoint is an Android and iOS application for tracking rock climbing progress. The goal of
      the app is to encourage healthy progression through reflection.`,
      `This project is a collaboration with a friend. Throughout development, we have both
      been able to practice the skills that we have been learning in the industry. 
      To keep our code clean and consistent we created a document to keep track of development standards 
      such as stylistic 
      conventions and best practices. Additionally, we agreed on a Scrum-like development methodology that 
      keeps us productive even with our asynchronous schedule.`,
      `This project has been a great outlet for me to refine my UI design skills. I've been having lots of
      fun designing the app from the ground up to be minimal and highly functional.`
    ],
    tags: ['Flutter', 'Dart', 'Mobile Development'],
    githubLink: 'https://github.com/Redpoint-app/Redpoint'
  },
  {
    title: 'Genetic Algorithm',
    image: geneticAlgorithmScreenshot,
    description: [
      `This genetic algorithm is a python program. I was inspired to
        build this program after watching a lecture on genetic algorithms from
        Fullstack Academy. This project uses object oriented concepts in python,
        allowing for easy expansion in the future.`,
      `The algorithm works by using evolutionary concepts found in nature such as
        survival of the fittest. Each “organism” has their own unique DNA, which they
        inherit from their parents. Each generation the “fittest” organisms breed,
        creating a new organism with a mix of their DNA. Over several generations,
        the population grows more and more fit until it reaches the goal. This
        algorithm serves as a quick and efficient alternative to brute force solutions
        to difficult problems.`
    ],
    tags: ['Python', 'Machine Learning', 'Test Driven Development'],
    githubLink: 'https://github.com/devkav/geneticAlgorithm'
  }
];

const otherProjects: Project[] = [
  {
    title: 'Twotor',
    description: [
      `Twotor is a web application that connect students in real time. Twotor 
            creates a learning community that addresses problems with the outdated tutoring 
            methods. In person tutoring can be hard for students to find time and online 
            forums take too long to get a response. Twotor solves this by providing instant 
            matchmaking and messaging. It creates a symbiotic relationship between students. 
            Users can get help with a subject they struggle in and provide tutoring for 
            subjects they excel in.`,
      `This project was built during a 24 hour hackathon in collaboration with two 
            colleagues. I focused on building the front end with ReactJS, while my teammates 
            built a custom database and API. I helped keep the team together in the face of 
            the major bug. My full stack experience allowed me to help fix the error in the 
            backend and get us back on track.`
    ],
    tags: ['ReactJS', 'Web Development'],
    githubLink: 'https://github.com/devkav/twotor'
  },
  {
    title: 'Minesweeper',
    description: [
      `I enjoy playing minesweeper, so I decided to build it myself. This gave me a good excuse to get more familiar with Redux and TypeScript, which I was using on my co-op at the time. `
    ],
    tags: ['ReactJS', 'Redux', 'TypeScript', 'Web Development'],
    githubLink: 'https://github.com/devkav/react-minesweeper',
    link: 'https://devkav.github.io/react-minesweeper/'
  },
  {
    title: 'Full Stack Chat',
    description: [
      `The full stack chat is a project that I started to further refine 
            my full stack development skills. The program allows users to send 
            and receive messages through a web application.`,
      `I built the front end with ReactJS. While designing the front end, 
            I focused on the details and tried to improve my UI/UX design 
            skills. The back end is composed of a Flask REST API that 
            communicates with a PostgreSQL server. When designing the API, I 
            utilized test driven development to ensure it was functioning as 
            intended.`
    ],
    tags: [
      'ReactJS',
      'Python',
      'PostgreSQL',
      'Flask',
      'REST APIs',
      'Test Driven Development'
    ],
    githubLink: 'https://github.com/devkav/full-stack-chat'
  },
  {
    title: 'Spotify Hue',
    description: [
      `Spotify Hue has been an ongoing project of mine throughout the 
            years. This particular iteration is an android application. The 
            app syncs Philips Hue smart lights with the color of the current 
            song’s album art on Spotify to deliver a unique and immersive 
            listening experience to the user. The front end is very much 
            incomplete, but the functionality meets my criteria for the 
            minimum viable product.`,
      `The app is written in Java, but I hope to convert to Kotlin as 
            I continue to learn it. As with almost all of my other work, 
            this is a long term passion project and still under development.`
    ],
    tags: ['Java', 'REST APIs', 'Android Development'],
    githubLink: 'https://github.com/devkav/SpotifyHueAndroid'
  },
  {
    title: 'WUPHF Weather',
    description: [
      `For BrickHack 8, my teammates and I wanted to explore new technologies 
            and just have fun. I proposed the idea of recreating the WUPHF app from the 
            show, The Office. This allowed my teammates to explore new backend technologies 
            such as CockroachDB and Twilio, while I explored React Native. I had never 
            worked with React Native before, but I was proficient with React and had worked 
            with several mobile frameworks in the past. Over the course of 24 hours, I was 
            able to build and deploy a working app that utilized the custom API built by my 
            teammates.`,
      `The app sends weather notifications to you on every platform possible. It 
            calls, texts, and emails you. If time permitted, we would have loved to 
            work with other APIs and expand the list of supported platforms such as 
            Twitter and Instagram.`
    ],
    tags: ['React Native', 'Mobile Development'],
    githubLink: 'https://github.com/devkav/WUPHF-Weather'
  },
  {
    title: 'Rope Physics Simulator',
    description: [
      `This project was inspired Day #9 from the 2022 Advent of Code. This problem required you to simulate the physics of a rope being dragged along a surface. This problem was very interesting and engaging for me. After writing my solution in Python, I wanted to visualize it so that I could interact with the rope. I translated my Python solution into TypeScript and built a website where you could interact with the Rope yourself.`
    ],
    tags: ['ReactJS', 'TypeScript', 'Web Development'],
    githubLink: 'https://github.com/devkav/rope-physics',
    link: 'https://devkav.github.io/rope-physics/'
  },
  {
    title: 'Corner Clerk',
    description: [
      `Corner Clerk is an Android and iOS app that was developed to
            make grocery shopping more convenient for college students. The app
            displays a list of all the available products at RIT's corner store and
            their price. Users can add items to their cart, while the app keeps track
            of how much money they have left. The app converts meal swipes into
            dollars, making it much easier to keep track of spending.`,
      `The app was developed during a hackathon with a colleague. We chose to
            build the app using Flutter, because it allowed us rapidly design and test
            the app for both Android and iOS. After the hackathon, we shipped
            multiple version to Android users.`
    ],
    tags: ['Flutter', 'Dart', 'Firestore', 'Mobile Development'],
    githubLink: 'https://github.com/devkav/clayHack2020'
  },
  {
    title: 'Tempo',
    description: [
      `Tempo is a web application that syncs users’ Spotify 
            accounts to listen together at the same time. This project was built 
            during a 24 hour hackathon in collaboration with two colleagues.`,
      `This project is a great example of my ability to push the limits 
            of whatever technology I’m using to achieve my vision of the 
            project. I created this project before I knew ReactJS, so we 
            used vanilla HTML and JavaScript which made it difficult to build 
            a dynamic web application. Additionally, we had to find workarounds 
            in the Spotify API to implement the functionality we were looking 
            for. The app uses Firestore as the back end, which allows users 
            to sync their songs, add new ones to the queue, and even vote to 
            skip songs they dislike.`
    ],
    tags: ['JavaScript', 'HTML', 'Firestore', 'REST APIs', 'Web Development'],
    githubLink: 'https://github.com/devkav/BrickHack7',
    link: 'https://devkav.github.io/BrickHack7/'
  }
];

const Projects = () => {
  return (
    <div id="projects" className="centered-col">
      <div className="projects-container">
        <h2 id="projects-label">Projects</h2>
        {highlightedProjects.map(
          ({title, description, tags, githubLink, link, image}, i) => (
            <ProjectDisplay
              title={title}
              description={description}
              tags={tags}
              githubLink={githubLink}
              link={link}
              image={image}
              flipped={i % 2 !== 0}
              shadow={false}
              key={`projDisp${i}`}
            />
          )
        )}

        <h3 id="other-projects-label">Other Projects</h3>
        <ProjectCarousel projects={otherProjects} />
      </div>
    </div>
  );
};

export default Projects;
