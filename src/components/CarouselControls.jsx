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
        let beforeButtonClassNames = "carousel-btn clickable"
        let afterButtonClassNames = "carousel-btn clickable"

        if (this.props.active == 0) {beforeButtonClassNames += " carousel-btn-inactive"}
        if (this.props.active == numBubbles - 1) {afterButtonClassNames += " carousel-btn-inactive"}

        return (
            <div className="carousel-controls">
                <MdNavigateBefore onClick={this.props.previousCallback} className={beforeButtonClassNames} />
                <CarouselIndicator numBubbles={numBubbles} active={active} setActive={this.setActive}/>
                <MdNavigateNext onClick={this.props.nextCallback} className={afterButtonClassNames} />
            </div>
        );
    }
}

export default CarouselControls;