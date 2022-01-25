import '../style/Projects.css';
import { Component } from 'react';
import ProjectCarousel from '../components/ProjectCarousel';

class Projects extends Component {
    constructor(props) {
        super(props)

        this.highlightedProjects = [
            {
                title: "Corner Clerk",
                image: "clayhackScreenshot.png",
                description: "Desc",
                tags: ["Flutter", "Firestore", "Mobile Development"],
                githubLink: "https://github.com/DevanTurtle7/clayHack2020"
            }, {
                title: "Genetic Algorithm",
                image: "geneticAlgorithmScreenshot.png",
                description: "Desc",
                tags: ["Python", "Machine Learning", "Test Driven Development"],
                githubLink: "https://github.com/DevanTurtle7/geneticAlgorithm"
            }, {
                title: "Artist Portfolio",
                image: "xsjScreenshot.png",
                description: "Desc",
                tags: ["ReactJS", "Firebase", "Web Development"],
                githubLink: "https://github.com/DevanTurtle7/xavier-portfolio"
            }
        ]

        this.otherProjects = [
            {
                title: "Full Stack Chat",
                description: "Desc",
                tags: ["ReactJS", "Python", "JavaScript", "PostgreSQL", "Flask", "REST APIs", "Test Driven Development"],
                githubLink: "https://github.com/DevanTurtle7/full-stack-chat"
            }, {
                title: "Spotify Hue",
                description: "Desc",
                tags: ["Java", "REST APIs", "Android Development"],
                githubLink: "https://github.com/DevanTurtle7/SpotifyHueAndroid"
            }, {
                title: "Tempo",
                description: "Desc",
                tags: ["JavaScript", "HTML", "Firestore", "REST APIs"],
                githubLink: "https://github.com/DevanTurtle7/BrickHack7"
            }
        ]
    }

    render() {
        return (
            <div id="projects" className="centered-col">
                <div className="projects-container">
                    <h2 id="projects-label">Projects</h2>
                    <ProjectCarousel projects={this.otherProjects} />
                </div>
            </div>
        );
    }
}

export default Projects;