import { Component } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import Chip from './Chip';
import IconButton from './IconButton';

class ProjectCard extends Component {
    render() {
        let chips = []
        let tags = this.props.tags
        let numTags = tags.length

        for (let i = 0; i < numTags; i++) {
            let current = tags[i]
            chips.push(<Chip text={current} gradient={true} order={i} numItems={numTags} key={i} />)
        }

        return (
            <div className={"project-card " + this.props.classNames}>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>

                <div className="project-card-footer">
                    <div className="chips-row">
                        {chips}
                    </div>
                    <div>
                        <IconButton href={this.props.githubLink}>
                            <AiOutlineGithub className="project-github-icon color-100 clickable" />
                        </IconButton>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;