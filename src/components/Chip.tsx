interface Props {
  gradient: boolean;
  order: number;
  numItems: number;
  text: string;
}

const Chip = ({gradient = false, order, numItems, text}: Props) => {
  const rStart = 126;
  const rEnd = 242;
  const bStart = 242;
  const bEnd = 179;
  const g = 63;
  const startPercent = order / numItems;
  const endPercent = (order + 1) / numItems;

  const between = (a: number, b: number, percent: number) => {
    const difference = b - a;

    return a + percent * difference;
  };

  const getGradientPercent = (percent: number) => {
    return `rgb(
      ${between(rStart, rEnd, percent)},
      ${g},
      ${between(bStart, bEnd, percent)}
    )
    `;
  };

  return (
    <div
      className="chip"
      style={
        !gradient
          ? {}
          : {
              background: `-webkit-linear-gradient(0deg, ${getGradientPercent(
                startPercent
              )}, ${getGradientPercent(endPercent)})`
            }
      }
    >
      <p className="chip-text">{text}</p>
    </div>
  );
};

export default Chip;
