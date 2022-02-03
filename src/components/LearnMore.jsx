import { useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

function LearnMore(props) {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        load()
    })

    const load = async() => {
        const safeDocument = typeof document !== 'undefined' ? document : {};
        const html = safeDocument.documentElement;

        html.style.overflow = "hidden"
        await sleep(3000)
        setLoaded(true)
        html.style.overflow = "visible"
    }

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

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