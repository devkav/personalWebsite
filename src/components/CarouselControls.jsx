import { Component } from 'react';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"
import CarouselIndicator from './CarouselIndicator';

class CarouselControls extends Component {
    setActive = (i) => {
        this.props.setActive(i)
    }

    render() {
        let numBubbles = this.props.numBubbles
        let active = this.props.active

        return (
            <div className="carousel-controls">
                <MdNavigateBefore onClick={this.props.previousCallback} className="carousel-btn clickable" />
                <CarouselIndicator numBubbles={numBubbles} active={active} setActive={this.setActive}/>
                <MdNavigateNext onClick={this.props.nextCallback} className="carousel-btn clickable" />
            </div>
        );
    }
}

export default CarouselControls;