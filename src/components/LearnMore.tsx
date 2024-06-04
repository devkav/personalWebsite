import {useEffect, useState} from 'react';
import {MdKeyboardArrowDown} from 'react-icons/md';

const INIT_TIME = 3000;

interface Props {
  onClick: () => void;
}

const LearnMore = ({onClick}: Props) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!loaded) {
      const html = document.documentElement;

      html.style.overflow = 'hidden';
      timeout = setTimeout(() => {
        setLoaded(true);
        html.style.overflow = 'visible';
      }, INIT_TIME);
    }

    return () => clearTimeout(timeout);
  }, [loaded]);

  const getClassName = () => (loaded ? 'fade-in-end' : 'fade-in-start');

  return (
    <div className={'learn-more ' + getClassName()}>
      <h4 className={`learn-more-text gradient-hover ${loaded ? 'slide-up-end' : 'slide-up-start'}`} onClick={onClick}>
        Learn More <br />
        <MdKeyboardArrowDown className="down-icon" />
      </h4>
    </div>
  );
};

export default LearnMore;
