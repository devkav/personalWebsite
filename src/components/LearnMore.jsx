import { Component } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

class LearnMore extends Component {
    render() {
        return (
            <div className="learn-more">
                <p className="learn-more-text">Learn More <br />
                    <MdKeyboardArrowDown className="down-icon" />
                </p>
            </div>
        );
    }
}

export default LearnMore;