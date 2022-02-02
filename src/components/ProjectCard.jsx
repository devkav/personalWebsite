import { Component } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import Chip from './Chip';
import IconButton from './IconButton';

class ProjectCard extends Component {
    render() {
        let title = this.props.title
        let descriptionData = this.props.description
        let tags = this.props.tags
        let githubLink = this.props.githubLink
        let numTags = tags.length
        let chips = []
        let description = []

        for (let i = 0; i < numTags; i++) {
            let current = tags[i]
            chips.push(<Chip text={current} gradient={true} order={i} numItems={numTags} key={i} />)
        }

        for (let i = 0; i < descriptionData.length; i++) {
            let current = descriptionData[i]
            description.push(<p key={i}>
                {current}
            </p>)
        }

        return (
            <div className={"project-card " + this.props.classNames}>
                <div className="title-row">
                    <h3>{title}</h3>
                    <div className="display-github-container">
                        <IconButton href={githubLink}>
                            <AiOutlineGithub className="display-github-icon color-25 clickable" />
                        </IconButton>
                    </div>
                </div>
                {description}

                <div className="chips-row">
                    {chips}
                </div>
            </div>
        );
    }
}

export default ProjectCard;