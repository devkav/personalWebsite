import '../style/Projects.css';
import { Component } from 'react';
import ProjectView from '../components/ProjectView';
import ProjectCarousel from '../components/ProjectCarousel';

class Projects extends Component {
    render() {
        let projects = [
            {
                title: "myProject",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                tags: ["JavaScript", "Kotlin", "Dart", "Test of this"],
                githubLink: "https://www.google.com"
            }, {
                title: "Another project",
                description: "This is a description of a second project",
                tags: ["This"],
                githubLink: "https://kavalchek.dev"
            }, {
                title: "Final proj",
                description: "Nothing much to say",
                tags: [],
                githubLink: "https://github.com/devanturtle7"
            }
        ]

        return (
            <div id="projects" className="centered-col">
                <div className="projects-container">
                    <h2 id="projects-label">Projects</h2>
                    <ProjectCarousel projects={projects} />
                </div>
            </div>
        );
    }
}

export default Projects;