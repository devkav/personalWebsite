import { Component } from 'react';
import { Button } from 'reactstrap';
import CarouselIndicator from './CarouselIndicator';

class CarouselControls extends Component {
    render() {
        let numBubbles = this.props.numBubbles
        let active = this.props.active

        return (
            <div className="carousel-controls">
                <Button onClick={this.props.previousCallback}>Previous</Button>
                <CarouselIndicator numBubbles={numBubbles} active={active} />
                <Button onClick={this.props.nextCallback}>Next</Button>
            </div>
        );
    }
}

export default CarouselControls;