import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import CarouselControls from './CarouselControls';
import { useSwipeable } from 'react-swipeable';

function ProjectCarousel(props) {
    const [current, setCurrent] = useState(0)

    const next = () => {
        let numProjects = props.projects.length

        if (current < (numProjects - 1)) {
            setCurrent(current + 1)
        }
    }

    const previous = () => {
        if (current > 0) {
            setCurrent(current - 1)
        }
    }

    const setActive = (i) => {
        setCurrent(i)
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => next(),
        onSwipedRight: () => previous()
    });

    const setupCards = () => {
        let projects = props.projects
        let projectCards = []
        let numProjects = projects.length

        for (let i = 0; i < numProjects; i++) {
            let classNames;

            if (current === i) {
                classNames = "current"
            } else if (current < i) {
                classNames = "next"
            } else {
                classNames = "prev"
            }

            classNames = "project-card-" + classNames

            let currentProj = projects[i]
            projectCards.push(<ProjectCard
                title={currentProj.title}
                description={currentProj.description}
                tags={currentProj.tags}
                current={current}
                classNames={classNames}
                githubLink={currentProj.githubLink}
                key={i}
            />)
        }

        return projectCards
    }

    return (
        <div className="project-carousel">
            <div className="project-card-container" {...handlers}>
                {setupCards()}
            </div>

            <CarouselControls
                numBubbles={props.projects.length}
                active={current}
                previousCallback={previous}
                nextCallback={next}
                setActive={setActive}
            />
        </div>
    );
}

export default ProjectCarousel;