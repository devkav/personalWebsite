import { Component } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

class LearnMore extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        this.load()
    }

    load = async () => {
        const safeDocument = typeof document !== 'undefined' ? document : {};
        const html = safeDocument.documentElement;

        html.style.overflow = "hidden"
        await this.sleep(3000)
        this.setState({ loaded: true })
        html.style.overflow = "visible"
    }

    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    render() {
        let className = this.state.loaded ? "fade-in-end" : "fade-in-start"

        return (
            <div className={"learn-more " + className}>
                <h4 className="learn-more-text gradient-hover" onClick={this.props.onClick}>Learn More <br />
                    <MdKeyboardArrowDown className="down-icon" />
                </h4>
            </div>
        );
    }
}

export default LearnMore;