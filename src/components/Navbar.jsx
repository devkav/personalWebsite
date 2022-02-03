import NavItem from './NavItem';

const items = [{
    text: "About Me",
    section: "aboutMe"
}, {
    text: "Experience",
    section: "experience"
}, {
    text: "Projects",
    section: "projects"
}]

function Navbar(props) {
    const createNavItems = () => {
        let navItems = []

        for (let i = 0; i < items.length; i++) {
            let current = items[i]
            let text = current.text
            let section = current.section
            let order = (items.length - 1) - i

            navItems.push(<NavItem text={text} section={section} order={order} key={i} />)
        }

        return navItems
    }

    return (
        <div className="nav-header">{createNavItems()}</div>
    );
}

export default Navbar;