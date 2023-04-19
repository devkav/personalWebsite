import {MdNavigateNext, MdNavigateBefore} from 'react-icons/md';
import CarouselIndicator from './CarouselIndicator';

interface Props {
  active: number;
  setActive: (i: number) => void;
  numBubbles: number;
  previousCallback: () => void;
  nextCallback: () => void;
}

const CarouselControls = ({
  active,
  setActive,
  numBubbles,
  previousCallback,
  nextCallback
}: Props) => {
  let beforeButtonClassNames = 'carousel-btn clickable';
  let afterButtonClassNames = 'carousel-btn clickable';

  if (active === 0) {
    beforeButtonClassNames += ' carousel-btn-inactive';
  }
  if (active === numBubbles - 1) {
    afterButtonClassNames += ' carousel-btn-inactive';
  }

  return (
    <div className="carousel-controls">
      <MdNavigateBefore
        onClick={previousCallback}
        className={beforeButtonClassNames}
      />
      <CarouselIndicator
        numBubbles={numBubbles}
        active={active}
        setActive={setActive}
      />
      <MdNavigateNext
        onClick={nextCallback}
        className={afterButtonClassNames}
      />
    </div>
  );
};

export default CarouselControls;
