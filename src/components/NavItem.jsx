import { Component } from 'react';

class NavItem extends Component {
    onClick = () => {
        let section = document.getElementById(this.props.section)
        section.scrollIntoView({ behavior: 'smooth' })
    }

    render() {
        return (
            <p className="gradient-hover nav-item" onClick={this.onClick}>{this.props.text}</p>
        );
    }
}

export default NavItem;