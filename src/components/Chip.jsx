import { Component } from 'react';

class Chip extends Component {
    between = (a, b, percent) => {
        let difference = b - a

        return a + (percent * difference)
    }

    rgbToString = (r, g, b) => "rgb(" + r + "," + g + "," + b + ")"

    render() {
        let gradient = this.props.gradient === true;

        let startColor, endColor

        if (gradient) {
            let rStart = 126
            let rEnd = 242
            let bStart = 242
            let bEnd = 179
            let g = 63
            let startPercent = this.props.order / this.props.numItems
            let endPercent = (this.props.order + 1) / this.props.numItems

            startColor = this.rgbToString(
                this.between(rStart, rEnd, startPercent),
                g,
                this.between(bStart, bEnd, startPercent))
            endColor = this.rgbToString(
                this.between(rStart, rEnd, endPercent),
                g,
                this.between(bStart, bEnd, endPercent))
        }

        return (
            <div className="chip" style={!gradient ? {} : {
                background: "-webkit-linear-gradient(0deg, " + startColor + "," + endColor + ")"
            }}>
                <p className="chip-text">{this.props.text}</p>
            </div>
        );
    }
}

export default Chip;