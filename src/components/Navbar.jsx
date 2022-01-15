import { Component } from 'react';
import NavItem from './NavItem';

class Navbar extends Component {
    render() {
        return (
            <div className="nav-header">
                <NavItem text={"About Me"} section={"aboutMe"} />
                <NavItem text={"Experience"} section={"experience"} />
                <NavItem text={"Projects"} section={"projects"} />
            </div>
        );
    }
}

export default Navbar;