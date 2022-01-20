import { Component } from 'react';

class Bubble  extends Component {
    render() {
        let className = "bubble"

        if (this.props.active) {
            className += " bubble-active"
        }

        return (
            <div className={className} />
        );
    }
}

export default Bubble;