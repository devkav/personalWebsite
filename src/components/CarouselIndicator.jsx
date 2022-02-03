import Bubble from './Bubble';

function CarouselIndicator(props) {
    const onClick = (i) => {
        props.setActive(i)
    }

    const createBubbles = () => {
        let active = props.active
        let numBubbles = props.numBubbles
        let bubbles = []

        for (let i = 0; i < numBubbles; i++) {
            bubbles.push(<Bubble active={i === active} key={i} onClick={() => { onClick(i) }} />)
        }

        return bubbles
    }

    return (
        <div className="carousel-indicator">
            {createBubbles()}
        </div>
    );
}

export default CarouselIndicator;