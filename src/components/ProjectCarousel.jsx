import { Button, CarouselIndicators } from 'reactstrap';
import { Component } from 'react';
import ProjectView from './ProjectView';
import CarouselIndicator from './CarouselIndicator';

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
            this.setState({ current: this.state.current + 1 })
        }
    }

    previous = () => {
        if (this.state.current > 0) {
            this.setState({ current: this.state.current - 1 })
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
            <div>
                <Button onClick={this.previous}>Previous</Button>
                <Button onClick={this.next}>Next</Button>

                <CarouselIndicator numBubbles={3} active={this.state.current}/>

                <div className="project-carousel">
                    {projectViews}
                </div>
            </div>
        );
    }
}

export default ProjectCarousel;