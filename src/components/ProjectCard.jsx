import { AiOutlineGithub } from 'react-icons/ai';
import { HiOutlineExternalLink } from 'react-icons/hi';
import Chip from './Chip';
import IconButton from './IconButton';

function ProjectCard(props) {
    const createChips = () => {
        let chips = []
        let tags = props.tags
        let numTags = tags.length

        for (let i = 0; i < numTags; i++) {
            let current = tags[i]
            chips.push(<Chip text={current} gradient={true} order={i} numItems={numTags} key={i} />)
        }

        return chips
    }

    const createDescription = () => {
        let description = []
        let descriptionData = props.description

        for (let i = 0; i < descriptionData.length; i++) {
            let current = descriptionData[i]
            description.push(<p key={i}>
                {current}
            </p>)
        }

        return description
    }

    const createLinkButton = () => {
        let link = props.link

        if (link !== undefined) {
            return (
                <IconButton href={link}>
                    <HiOutlineExternalLink className="display-icon color-25 clickable me-2" />
                </IconButton>
            )
        } else {
            return null
        }
    }

    return (
        <div className={"project-card " + props.classNames}>
            <div className="title-row">
                <h3>{props.title}</h3>
                <div className="icon-container ms-2">
                    {createLinkButton()}
                    <IconButton href={props.githubLink}>
                        <AiOutlineGithub className="display-icon color-25 clickable" />
                    </IconButton>
                </div>
            </div>

            {createDescription()}

            <div className="chips-row">
                {createChips()}
            </div>
        </div>
    );
}

export default ProjectCard;