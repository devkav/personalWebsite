import '../style/Projects.css';
import ProjectCarousel from '../components/ProjectCarousel';
import ProjectDisplay from '../components/ProjectDisplay';

const highlightedProjects = [
  {
    title: 'Artist Portfolio',
    image: 'xsjScreenshot.png',
    description: [
      `This project is a website and digital portfolio that I built for a 
            friend of mine. The design of the site was a collaborative effort, with 
            most of the main decisions being made by them. The site is designed to 
            display art work in a unique and customizable way. I built an admin page 
            that allows the artist to upload and edit the content of the site at 
            any time.`,
      `The site was built using React for the front end. The back end uses 
            Firebase to store image metadata and Amazon Web Service’s S3 to host the 
            images.`,
    ],
    tags: ['React', 'Redux', 'Firebase', 'AWS S3', 'Web Development'],
    githubLink: 'https://github.com/DevanTurtle7/xavier-portfolio',
    link: 'https://xaviersylviajackson.com/',
  },
  {
    title: 'Corner Clerk',
    image: 'clayhackScreenshot.png',
    shadow: true,
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
            multiple version to Android users.`,
    ],
    tags: ['Flutter', 'Firestore', 'Mobile Development'],
    githubLink: 'https://github.com/DevanTurtle7/clayHack2020',
  },
  {
    title: 'Genetic Algorithm',
    image: 'geneticAlgorithmScreenshot.png',
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
        to difficult problems.`,
    ],
    tags: ['Python', 'Machine Learning', 'Test Driven Development'],
    githubLink: 'https://github.com/DevanTurtle7/geneticAlgorithm',
  },
];

const otherProjects = [
  {
    title: 'Full Stack Chat',
    description: [
      `The full stack chat is a project that I started to further refine 
            my full stack development skills. The program allows users to send 
            and receive messages through a web application.`,
      `I built the front end with React. While designing the front end, 
            I focused on the details and tried to improve my UI/UX design 
            skills. The back end is composed of a Flask REST API that 
            communicates with a PostgreSQL server. When designing the API, I 
            utilized test driven development to ensure it was functioning as 
            intended.`,
    ],
    tags: [
      'React',
      'Python',
      'PostgreSQL',
      'Flask',
      'REST APIs',
      'Test Driven Development',
    ],
    githubLink: 'https://github.com/DevanTurtle7/full-stack-chat',
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
            this is a long term passion project and still under development.`,
    ],
    tags: ['Java', 'REST APIs', 'Android Development'],
    githubLink: 'https://github.com/DevanTurtle7/SpotifyHueAndroid',
  },
  {
    title: 'Minesweeper',
    description: [
      `I enjoy playing minesweeper, so I decided to build it myself. I 
            used React to build the game. While working on this project I struggled 
            with optimization and keeping track of the games state. Every time the 
            player was clicking a tile, the entire board had to rerender. I fixed 
            this by using the model view controller design pattern. Through this 
            process, I learned how to properly encapsulate classes in Javascript.`,
    ],
    tags: ['React', 'Object Oriented Programming'],
    githubLink: 'https://github.com/DevanTurtle7/react-minesweeper',
    link: 'https://devanturtle7.github.io/react-minesweeper/',
  },
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
            colleagues. I focused on building the front end with React, while my teammates 
            built a custom database and API. I helped keep the team together in the face of 
            the major bug. My full stack experience allowed me to help fix the error in the 
            backend and get us back on track.`,
    ],
    tags: ['React'],
    githubLink: 'https://github.com/DevanTurtle7/twotor',
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
            Twitter and Instagram.`,
    ],
    tags: ['React Native', 'Mobile Development'],
    githubLink: 'https://github.com/DevanTurtle7/WUPHF-Weather',
  },
  {
    title: 'Tempo',
    description: [
      `Tempo is a web application that syncs users’ Spotify 
            accounts to listen together at the same time. This project was built 
            during a 24 hour hackathon in collaboration with two colleagues.`,
      `This project is a great example of my ability to push the limits 
            of whatever technology I’m using to achieve my vision of the 
            project. I created this project before I knew React, so we 
            used vanilla HTML and JavaScript which made it difficult to build 
            a dynamic web application. Additionally, we had to find workarounds 
            in the Spotify API to implement the functionality we were looking 
            for. The app uses Firestore as the back end, which allows users 
            to sync their songs, add new ones to the queue, and even vote to 
            skip songs they dislike.`,
    ],
    tags: ['JavaScript', 'HTML', 'Firestore', 'REST APIs'],
    githubLink: 'https://github.com/DevanTurtle7/BrickHack7',
    link: 'https://devanturtle7.github.io/BrickHack7/',
  },
];

function Projects(props) {
  const createProjectDisplays = () => {
    let projectDisplays = [];
    let imagePrefix = 'images/';

    for (let i = 0; i < highlightedProjects.length; i++) {
      let current = highlightedProjects[i];
      let title = current.title;
      let description = current.description;
      let tags = current.tags;
      let githubLink = current.githubLink;
      let link = current.link;
      let image = imagePrefix + current.image;
      let flipped = i % 2 !== 0;
      let shadow = current.shadow === true;

      projectDisplays.push(
        <ProjectDisplay
          title={title}
          description={description}
          tags={tags}
          githubLink={githubLink}
          link={link}
          img={image}
          flipped={flipped}
          shadow={shadow}
          key={i}
        />
      );
    }

    return projectDisplays;
  };

  return (
    <div id='projects' className='centered-col'>
      <div className='projects-container'>
        <h2 id='projects-label'>Projects</h2>
        {createProjectDisplays()}

        <h3 id='other-projects-label'>Other Projects</h3>
        <ProjectCarousel projects={otherProjects} />
      </div>
    </div>
  );
}

export default Projects;
