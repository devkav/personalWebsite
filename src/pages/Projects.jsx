import '../style/Projects.css';
import { Component } from 'react';
import ProjectView from '../components/ProjectView';

class Projects extends Component {
    render() {
        return (
            <div className="centered-col">
            <div id="projects">
                <h2 id="projects-label">Projects</h2>
                <ProjectView title="myProject" />
            </div>
            </div>
        );
    }
}

export default Projects;