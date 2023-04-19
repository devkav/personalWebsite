import {useState, useEffect} from 'react';
import ProjectCard from './ProjectCard';
import CarouselControls from './CarouselControls';
import {useSwipeable} from 'react-swipeable';
import {Project} from 'pages/Projects';

const DELAY = 400;

interface Props {
  projects: Project[];
}

const ProjectCarousel = ({projects}: Props) => {
  const [current, setCurrent] = useState(0);
  const [currentFromLeft, setCurrentFromLeft] = useState(false);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (running) {
      timeout = setTimeout(() => setRunning(false), DELAY);
    }

    document.addEventListener('keydown', keyDown, false);

    return () => {
      document.removeEventListener('keydown', keyDown, false);
      clearTimeout(timeout);
    };
  });

  const keyDown = ({key}: KeyboardEvent) => {
    if (key === 'ArrowRight') {
      next();
    } else if (key === 'ArrowLeft') {
      previous();
    }
  };

  const next = () => {
    if (!running) {
      setRunning(true);
      let numProjects = projects.length;

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

  const setActive = (i: number) => {
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

  const getCardClassNames = (i: number) => {
    let classNames;

    if (current === i) {
      classNames = currentFromLeft ? 'current-from-left' : 'current-from-right';
    } else if (current < i) {
      classNames = 'next';
    } else {
      classNames = 'prev';
    }

    classNames = 'project-card-' + classNames;

    return classNames;
  };

  return (
    <div className="project-carousel">
      <div className="project-card-container" {...handlers}>
        {projects.map(({title, description, tags, githubLink, link}, i) => (
          <ProjectCard
            title={title}
            description={description}
            tags={tags}
            current={current}
            classNames={getCardClassNames(i)}
            githubLink={githubLink}
            link={link}
            key={`projCard${i}`}
          />
        ))}
      </div>

      <CarouselControls
        numBubbles={projects.length}
        active={current}
        previousCallback={previous}
        nextCallback={next}
        setActive={setActive}
      />
    </div>
  );
};

export default ProjectCarousel;
