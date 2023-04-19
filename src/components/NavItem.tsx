import {useState, useEffect} from 'react';

interface Props {
  label: string;
  section: string;
  order: number;
}

const NavItem = ({label, section, order}: Props) => {
  const [loaded, setLoaded] = useState(false);
  const INIT_TIME = 1500 + order * 300;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!loaded) {
      timeout = setTimeout(() => setLoaded(true), INIT_TIME);
    }

    return () => clearTimeout(timeout);
  }, [loaded, INIT_TIME]);

  const onClick = () => {
    const sectionElement = document.getElementById(section);
    sectionElement?.scrollIntoView({behavior: 'smooth'});
  };

  const getClassName = () => (loaded ? 'nav-item-loaded' : 'nav-item-unloaded');

  return (
    <h4
      className={'gradient-hover nav-item ' + getClassName()}
      onClick={onClick}
    >
      {label}
    </h4>
  );
};

export default NavItem;
