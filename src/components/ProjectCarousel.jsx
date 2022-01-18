import { Button } from 'reactstrap';
import { Component } from 'react';
import ProjectView from './ProjectView';

class ProjectCarousel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            current: 1
        }
    }

    next = () => {
        let numProjects = this.props.projects.length

        if (this.state.current < (numProjects - 1)) {
            this.setState({current: this.state.current + 1})
        }
    }

    previous = () => {
        if (this.state.current > 0) {
            this.setState({current: this.state.current - 1})
        }
    }

    render() {
        let projects = this.props.projects
        let projectViews = []
        let numProjects = projects.length

        for (let i = 0; i < numProjects; i++) {
            let current = projects[i]
            let classNames;

            if (this.state.current === i) {
                classNames = "current"
            } else if (this.state.current < i) {
                classNames = "next"
            } else {
                classNames = "prev"
            }

            classNames = "project-card-" + classNames

            projectViews.push(<ProjectView
                title={current.title}
                description={current.description}
                tags={current.tags}
                current={this.state.current}
                classNames={classNames}
                key={i}
            />)
        }

        return (
            <div className="project-carousel">
                <Button onClick={this.previous}>Previous</Button>
                <Button onClick={this.next}>Next</Button>
                {projectViews}
            </div>
        );
    }
}

export default ProjectCarousel;