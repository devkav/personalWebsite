import { Component } from 'react';
import Chip from './Chip';

class ProjectView extends Component {
    render() {
        let chips = []
        let tags = this.props.tags
        let numTags = tags.length

        for (let i = 0; i < numTags; i++) {
            let current = tags[i]
            chips.push(<Chip text={current} gradient={true} order={i} numItems={numTags} key={i} />)
        }

        return (
            <div className="project-card">
                <h3>{this.props.title}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                    id est laborum.</p>
                <div className="chips-row">
                    {chips}
                </div>
            </div>
        );
    }
}

export default ProjectView;