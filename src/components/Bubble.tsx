interface Props {
  active: boolean;
  onClick: () => void;
}

const Bubble = ({active = false, onClick}: Props) => {
  const getClassNames = () => {
    let className = 'bubble clickable';

    if (active) {
      className += ' bubble-active';
    }

    return className;
  };

  return <div className={getClassNames()} onClick={onClick} />;
};

export default Bubble;
