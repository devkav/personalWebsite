import { Component } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import Chip from './Chip';
import IconButton from './IconButton';

class ProjectDisplay extends Component {
    render() {
        let flipped = this.props.flipped
        let displayClassNames = "project-display"

        if (flipped) {
            displayClassNames += " project-display-flipped"
        }

        let imageDisplay = (<div className='project-display-image'>
            <img src={this.props.img} />
        </div>)

        let textDisplay = (<div className='project-display-text'>
            <h3>Test</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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