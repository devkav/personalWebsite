import { Component } from 'react';
import { Button } from 'reactstrap';
import CarouselIndicator from './CarouselIndicator';

class CarouselControls extends Component {
    render() {
        let numBubbles = this.props.numBubbles
        let active = this.props.active

        return (
            <div className="carousel-controls">
                <Button>Previous</Button>
                <CarouselIndicator numBubbles={numBubbles} active={active} />
                <Button>Next</Button>
            </div>
        );
    }
}

export default CarouselControls;