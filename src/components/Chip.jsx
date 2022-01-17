import { Component } from 'react';

class Chip extends Component {
    //rgb(126, 63, 242, .7), rgb(242, 63, 179, .7)
    render() {
        let gradient = this.props.gradient === true;

        let r,g,b,a;

        if (gradient) {
            let rStart = 126
            let bStart = 242
            let rDif = 116
            let bDif = -63
            let percent = this.props.order / this.props.numItems
            r = rStart + (percent * rDif)
            g = 63
            b = bStart + (percent * bDif)
            a = 0.4
        }

        return (
            <div className="chip" style={!gradient ? {} : {
                backgroundColor: "rgba(" + r + "," + g + "," + b + "," + a + ")",
                color: "rgb(" + r + "," + g + "," + b + ")"
            }}>
                <p className="chip-text">{this.props.text}</p>
            </div>
        );
    }
}

export default Chip;