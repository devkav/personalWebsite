import {AiOutlineGithub} from 'react-icons/ai';
import {HiOutlineExternalLink} from 'react-icons/hi';
import Chip from './Chip';
import IconButton from './IconButton';
import {Project} from 'pages/Projects';

interface Props extends Project {
  classNames: string;
  current: number;
}

const ProjectCard = ({
  title,
  description,
  tags,
  githubLink,
  link,
  classNames
}: Props) => {
  return (
    <div className={`project-card ${classNames}`}>
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

      <div className={'project-description'}>
        {description.map((current, i) => (
          <p key={`projectDesc${i}`}>{current}</p>
        ))}
      </div>

      <div className="chips-row">
        {tags.map((tag, i) => (
          <Chip
            text={tag}
            gradient={true}
            order={i}
            numItems={tags.length}
            key={`chip${i}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
