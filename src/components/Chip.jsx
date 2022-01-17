import { Component } from 'react';

class Chip extends Component {
    render() {
        return (
            <div className="chip">
                <p className="chip-text">{this.props.text}</p>
            </div>
        );
    }
}

export default Chip;