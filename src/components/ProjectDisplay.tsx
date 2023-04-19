import {AiOutlineGithub} from 'react-icons/ai';
import {HiOutlineExternalLink} from 'react-icons/hi';
import Chip from './Chip';
import IconButton from './IconButton';

interface Props {
  flipped: boolean;
  shadow: boolean;
  tags: string[];
  description: string[];
  image: any;
  link?: string;
  githubLink: string;
  title: string;
}

const ProjectDisplay = ({
  flipped,
  shadow = false,
  tags,
  description,
  image,
  link,
  title,
  githubLink
}: Props) => {
  const getDisplayClassNames = () => {
    let displayClassNames = 'project-display';

    if (flipped) {
      displayClassNames += ' project-display-flipped';
    } else {
      displayClassNames += ' project-display-no-flip';
    }

    return displayClassNames;
  };

  const getImageClassNames = () => {
    let imageClass = '';

    if (shadow) {
      imageClass += ' img-shadow';
    }

    return imageClass;
  };

  const createTextDisplay = () => (
    <div className="project-display-text">
      <div className="title-row">
        <h3>{title}</h3>
        <div className="icon-container ms-2">
          {link && link !== '' && (
            <IconButton href={link}>
              <HiOutlineExternalLink className="display-icon color-25 clickable me-2" />
            </IconButton>
          )}
          <IconButton href={githubLink}>
            <AiOutlineGithub className="display-icon color-25 clickable" />
          </IconButton>
        </div>
      </div>
      {description.map((paragraph, i) => (
        <p key={`projDesc${i}`}>{paragraph}</p>
      ))}
      <div className="chips-row">
        {tags.map((tag, i) => (
          <Chip
            text={tag}
            gradient={true}
            order={i}
            numItems={tags.length}
            key={`projChip${i}`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className={getDisplayClassNames()}>
      {flipped && createTextDisplay()}
      {
        <div className="project-display-image">
          <img
            src={image}
            className={getImageClassNames()}
            alt="project-screenshot"
          />
        </div>
      }
      {!flipped && createTextDisplay()}
    </div>
  );
};

export default ProjectDisplay;
