import { Component } from 'react';

class NavItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loaded: false
        }
    }

    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    componentDidMount() {
        this.load()
    }

    load = async () => {
        await this.sleep(1500 + (this.props.order * 300))
        this.setState({loaded: true})
    }

    onClick = () => {
        let section = document.getElementById(this.props.section)
        section.scrollIntoView({ behavior: 'smooth' })
    }

    render() {
        let className = this.state.loaded ? "nav-item-loaded" : "nav-item-unloaded"

        return (
            <h3 className={"gradient-hover nav-item " + className} onClick={this.onClick}>{this.props.text}</h3>
        );
    }
}

export default NavItem;