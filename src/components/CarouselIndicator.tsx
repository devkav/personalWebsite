import Bubble from './Bubble';

interface Props {
  setActive: (i: number) => void;
  active: number;
  numBubbles: number;
}

const CarouselIndicator = ({active, setActive, numBubbles}: Props) => {
  const onClick = (i: number) => {
    setActive(i);
  };

  const createBubbles = () => {
    let bubbles = [];

    for (let i = 0; i < numBubbles; i++) {
      bubbles.push(
        <Bubble
          active={i === active}
          key={`carInd${i}`}
          onClick={() => {
            onClick(i);
          }}
        />
      );
    }

    return bubbles;
  };

  return <div className="carousel-indicator">{createBubbles()}</div>;
};

export default CarouselIndicator;
