interface Props {
  mouseX: number;
  mouseY: number;
  text: string;
}

const TitleText = ({mouseX, mouseY, text}: Props) => {
  const getDegrees = () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const currentX = mouseX;
    const currentY = mouseY;
    const rise = centerY - currentY;
    const run = currentX - centerX;

    const radians = Math.atan(rise / run);
    let degrees = radians * (180 / Math.PI);

    if (run >= 0) {
      if (rise <= 0) {
        degrees += 360;
      }
    } else {
      degrees += 180;
    }

    degrees = Math.round(degrees);
    return degrees;
  };

  return (
    <h1
      className="welcome-text"
      style={{
        backgroundImage:
          '-webkit-linear-gradient(' + getDegrees() + 'deg, #7E3FF2, #f23fb3)',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}
    >
      {text}
    </h1>
  );
};

export default TitleText;
