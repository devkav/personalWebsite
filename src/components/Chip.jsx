function Chip(props) {
    const gradient = props.gradient === true;
    const rStart = 126
    const rEnd = 242
    const bStart = 242
    const bEnd = 179
    const g = 63

    const between = (a, b, percent) => {
        let difference = b - a

        return a + (percent * difference)
    }

    const rgbToString = (r, g, b) => "rgb(" + r + "," + g + "," + b + ")"

    const getGradientPercent = (percent) => {
        return rgbToString(
            between(rStart, rEnd, percent),
            g,
            between(bStart, bEnd, percent)
        )
    }

    const getStartColor = () => {
        let startPercent = props.order / props.numItems
        return getGradientPercent(startPercent)
    }

    const getEndColor = () => {
        let endPercent = (props.order + 1) / props.numItems
        return getGradientPercent(endPercent)
    }

    return (
        <div className="chip" style={!gradient ? {} : {
            background: "-webkit-linear-gradient(0deg, " + getStartColor() + "," + getEndColor() + ")"
        }}>
            <p className="chip-text">{props.text}</p>
        </div>
    );
}

export default Chip;