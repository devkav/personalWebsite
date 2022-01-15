import { Component } from 'react';
import NavItem from './NavItem';

class Navbar extends Component {
    render() {
        return (
            <div className="nav-header">
                <NavItem text={"About Me"}/>
                <NavItem text={"Experience"}/>
                <NavItem text={"Projects"}/>
            </div>
        );
    }
}

export default Navbar;