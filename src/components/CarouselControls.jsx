import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"
import CarouselIndicator from './CarouselIndicator';

function CarouselControls(props) {
    const active = props.active
    const numBubbles = props.numBubbles
    let beforeButtonClassNames = "carousel-btn clickable"
    let afterButtonClassNames = "carousel-btn clickable"
    if (active === 0) { beforeButtonClassNames += " carousel-btn-inactive" }
    if (active === numBubbles - 1) { afterButtonClassNames += " carousel-btn-inactive" }

    const setActive = (i) => {
        props.setActive(i)
    }

    return (
        <div className="carousel-controls">
            <MdNavigateBefore onClick={props.previousCallback} className={beforeButtonClassNames} />
            <CarouselIndicator numBubbles={numBubbles} active={active} setActive={setActive} />
            <MdNavigateNext onClick={props.nextCallback} className={afterButtonClassNames} />
        </div>
    );
}

export default CarouselControls;