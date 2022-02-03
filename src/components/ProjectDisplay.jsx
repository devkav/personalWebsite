import { AiOutlineGithub } from 'react-icons/ai';
import Chip from './Chip';
import IconButton from './IconButton';

function ProjectDisplay(props) {
    const getDisplayClassNames = () => {
        let displayClassNames = "project-display"
        let flipped = props.flipped

        if (flipped) {
            displayClassNames += " project-display-flipped"
        } else {
            displayClassNames += " project-display-no-flip"
        }

        return displayClassNames
    }

    const getImageClassNames = () => {
        let imageClass = ""
        let shadow = props.shadow === true

        if (shadow) {
            imageClass += " img-shadow"
        }

        return imageClass
    }

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

    const createParagraphs = () => {
        let paragraphs = []
        let description = props.description

        for (let i = 0; i < description.length; i++) {
            let current = description[i]
            paragraphs.push(<p key={i}>{current}</p>)
        }

        return paragraphs
    }

    const createImageDisplay = () => {
        let image = props.img

        let imageDisplay = (<div className='project-display-image'>
            <img src={image} className={getImageClassNames()} alt="project-screenshot" />
        </div>)

        return imageDisplay
    }

    const createTextDisplay = () => (
        <div className='project-display-text'>
            <div className="title-row">
                <h3>{props.title}</h3>
                <div className="display-github-container">
                    <IconButton href={props.githubLink}>
                        <AiOutlineGithub className="display-github-icon color-25 clickable" />
                    </IconButton>
                </div>
            </div>
            {createParagraphs()}
            <div className="chips-row">
                {createChips()}
            </div>
        </div>)

    if (props.flipped) {
        return (
            <div className={getDisplayClassNames()}>
                {createTextDisplay()}
                {createImageDisplay()}
            </div>
        );
    } else {
        return (
            <div className={getDisplayClassNames()}>
                {createImageDisplay()}
                {createTextDisplay()}
            </div>
        );
    }
}

export default ProjectDisplay;