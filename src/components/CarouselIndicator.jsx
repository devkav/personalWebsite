import { Component } from 'react';
import Bubble from './Bubble';

class CarouselIndicator extends Component {
    render() {
        let active = this.props.active
        let numBubbles = this.props.numBubbles
        let bubbles = []

        for (let i = 0; i < numBubbles; i++) {
            bubbles.push(<Bubble active={i === active} key={i}/>)
        }

        return (
            <div className="carousel-indicator">
                {bubbles}
            </div>
        );
    }
}

export default CarouselIndicator;