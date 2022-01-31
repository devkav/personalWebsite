import { Component } from 'react';
import ProjectCard from './ProjectCard';
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
        let projectCards = []
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

            projectCards.push(<ProjectCard
                title={current.title}
                description={current.description}
                tags={current.tags}
                current={this.state.current}
                classNames={classNames}
                githubLink={current.githubLink}
                key={i}
            />)
        }

        return (
            <div className="project-carousel">
                <div className="project-card-container">
                    {projectCards}
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