import { useState, useEffect } from 'react';


function NavItem(props) {
    const [loaded, setLoaded] = useState(false)
    const INIT_TIME = 1500 + (props.order * 300)

    useEffect(() => {
        let timeout;

        if (!loaded) {
            timeout = setTimeout(() => setLoaded(true), INIT_TIME)
        }

        return () => clearTimeout(timeout)
    }, [loaded, INIT_TIME])

    const onClick = () => {
        let section = document.getElementById(props.section)
        section.scrollIntoView({ behavior: 'smooth' })
    }

    const getClassName = () => loaded ? "nav-item-loaded" : "nav-item-unloaded"

    return (
        <h4 className={"gradient-hover nav-item " + getClassName()} onClick={onClick}>{props.text}</h4>
    );
}

export default NavItem;