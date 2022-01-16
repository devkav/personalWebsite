import { Component } from 'react';
import NavItem from './NavItem';

class Navbar extends Component {
    render() {
        let items = [{
            text: "About Me",
            section: "aboutMe"
        }, {
            text: "Experience",
            section: "experience"
        }, {
            text: "Projects",
            section: "projects"
        }]

        let navItems = []

        for (let i = 0; i < items.length; i++) {
            let current = items[i]
            let text = current.text
            let section = current.section
            let order = (items.length - 1) - i

            navItems.push(<NavItem text={text} section={section} order={order} key={i} />)
        }

        return (
            <div className="nav-header">{navItems}</div>
        );
    }
}

export default Navbar;