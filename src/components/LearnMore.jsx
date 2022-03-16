import { useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

const INIT_TIME = 3000

function LearnMore(props) {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        let timeout;

        if (!loaded) {
            const safeDocument = typeof document !== 'undefined' ? document : {};
            const html = safeDocument.documentElement;

            html.style.overflow = "hidden"
            timeout = setTimeout(() => {
                setLoaded(true)
                html.style.overflow = "visible"
            }, INIT_TIME)
        }

        return () => clearTimeout(timeout)
    }, [loaded])

    const getClassName = () => loaded ? "fade-in-end" : "fade-in-start"

    return (
        <div className={"learn-more " + getClassName()}>
            <h4 className="learn-more-text gradient-hover" onClick={props.onClick}>Learn More <br />
                <MdKeyboardArrowDown className="down-icon" />
            </h4>
        </div>
    );
}

export default LearnMore;