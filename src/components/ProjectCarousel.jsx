import { Component } from 'react';
import ProjectView from './ProjectView';

class ProjectCarousel extends Component {
    render() {
        let projects = this.props.projects
        let projectViews = []
        let numProjects = projects.length

        for (let i = 0; i < numProjects; i++) {
            let current = projects[i]
            projectViews.push(<ProjectView
                title={current.title}
                description={current.description}
                tags={current.tags}
            />)
        }

        return (
            <div>
            {projectViews}
            </div>
        );
    }
}

export default ProjectCarousel;