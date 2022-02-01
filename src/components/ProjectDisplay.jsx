import { Component } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import Chip from './Chip';
import IconButton from './IconButton';

class ProjectDisplay extends Component {
    render() {
        let title = this.props.title
        let description = this.props.description
        let githubLink = this.props.githubLink
        let tags = this.props.tags
        let image = this.props.img
        let flipped = this.props.flipped
        let displayClassNames = "project-display"

        if (flipped) {
            displayClassNames += " project-display-flipped"
        } else {
            displayClassNames += " project-display-no-flip"
        }

        let paragraphs = []

        for (let i = 0; i < description.length; i++) {
            let current = description[i]
            paragraphs.push(<p>{current}</p>)
        }

        let imageDisplay = (<div className='project-display-image'>
            <img src={image} />
        </div>)

        let textDisplay = (<div className='project-display-text'>
            <div className="title-row">
                <h3>{title}</h3>
                <div className="display-github-container">
                    <IconButton href={this.props.githubLink}>
                        <AiOutlineGithub className="display-github-icon color-0 clickable" />
                    </IconButton>
                </div>
            </div>
            {paragraphs}
        </div>)

        if (flipped) {
            return (
                <div className={displayClassNames}>
                    {textDisplay}
                    {imageDisplay}
                </div>
            );
        } else {
            return (
                <div className={displayClassNames}>
                    {imageDisplay}
                    {textDisplay}
                </div>
            );
        }
    }
}

export default ProjectDisplay;