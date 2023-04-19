import React, {useState, useEffect} from 'react';
import ProjectCard from './ProjectCard';
import CarouselControls from './CarouselControls';
import {useSwipeable} from 'react-swipeable';

const DELAY = 400;

function ProjectCarousel(props) {
  const [current, setCurrent] = useState(0);
  const [currentFromLeft, setCurrentFromLeft] = useState(false);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timeout;

    if (running) {
      timeout = setTimeout(() => setRunning(false), DELAY);
    }

    document.addEventListener('keydown', keyDown, false);

    return () => {
      document.removeEventListener('keydown', keyDown, false);
      clearTimeout(timeout);
    };
  });

  const keyDown = (e) => {
    if (e.key === 'ArrowRight') {
      next();
    } else if (e.key === 'ArrowLeft') {
      previous();
    }
  };

  const next = () => {
    if (!running) {
      setRunning(true);
      let numProjects = props.projects.length;

      if (current < numProjects - 1) {
        setCurrentFromLeft(false);
        setCurrent(current + 1);
      }
    }
  };

  const previous = () => {
    if (!running) {
      setRunning(true);
      if (current > 0) {
        setCurrentFromLeft(true);
        setCurrent(current - 1);
      }
    }
  };

  const setActive = (i) => {
    if (current < i) {
      setCurrentFromLeft(false);
    } else {
      setCurrentFromLeft(true);
    }
    setCurrent(i);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => next(),
    onSwipedRight: () => previous()
  });

  const createCards = () => {
    let projects = props.projects;
    let projectCards = [];
    let numProjects = projects.length;

    for (let i = 0; i < numProjects; i++) {
      let classNames;

      if (current === i) {
        classNames = currentFromLeft
          ? 'current-from-left'
          : 'current-from-right';
      } else if (current < i) {
        classNames = 'next';
      } else {
        classNames = 'prev';
      }

      classNames = 'project-card-' + classNames;

      let currentProj = projects[i];
      projectCards.push(
        <ProjectCard
          title={currentProj.title}
          description={currentProj.description}
          tags={currentProj.tags}
          current={current}
          classNames={classNames}
          githubLink={currentProj.githubLink}
          link={currentProj.link}
          key={`projCard${i}`}
        />
      );
    }

    return projectCards;
  };

  return (
    <div className="project-carousel">
      <div className="project-card-container" {...handlers}>
        {createCards()}
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
