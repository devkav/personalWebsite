import { Button, CarouselIndicators } from 'reactstrap';
import { Component } from 'react';
import ProjectView from './ProjectView';
import CarouselIndicator from './CarouselIndicator';
import CarouselControls from './CarouselControls';

class ProjectCarousel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            current: 0
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

    setActive = (i) => {
        this.setState({ current: i })
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
                <div className="project-display">
                    {projectViews}
                </div>

                <CarouselControls
                    numBubbles={numProjects}
                    active={this.state.current}
                    previousCallback={this.previous}
                    nextCallback={this.next}
                    setActive={this.setActive}
                />
            </div>
        );
    }
}

export default ProjectCarousel;