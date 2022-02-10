import { useState, useEffect } from 'react';

function NavItem(props) {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (!loaded) {
            load()
        }
    }, [])

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const load = async () => {
        await sleep(1500 + (props.order * 300))
        setLoaded(true)
    }

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