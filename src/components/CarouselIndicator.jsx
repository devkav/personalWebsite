import { Component } from 'react';
import Bubble from './Bubble';

class CarouselIndicator extends Component {
    onClick = (i) => {
        this.props.setActive(i)
    }

    render() {
        let active = this.props.active
        let numBubbles = this.props.numBubbles
        let bubbles = []

        for (let i = 0; i < numBubbles; i++) {
            bubbles.push(<Bubble active={i === active} key={i} onClick={() => { this.onClick(i) }} />)
        }

        return (
            <div className="carousel-indicator">
                {bubbles}
            </div>
        );
    }
}

export default CarouselIndicator;