import { Component } from 'react';

class Bubble  extends Component {
    render() {
        let className = "bubble clickable"

        if (this.props.active) {
            className += " bubble-active"
        }

        return (
            <div className={className} onClick={this.props.onClick} />
        );
    }
}

export default Bubble;