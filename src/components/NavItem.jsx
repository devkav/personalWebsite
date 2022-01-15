import { Component } from 'react';

class NavItem extends Component {
    render() {
        return (
            <p className="gradient-hover nav-item">{this.props.text}</p>
        );
    }
}

export default NavItem;