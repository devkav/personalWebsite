import { Component } from 'react';

class IconButton extends Component {
    render() {
        return (
            <a href={this.props.href} className="icon-btn" target="_blank">
                {this.props.children}
            </a>
        );
    }
}

export default IconButton;