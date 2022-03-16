import '../style/WelcomePage.css'
import '../style/PageNotFound.css'
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import TitleText from "../components/TitleText";

const INIT_TIME = 500;

function PageNotFound(props) {
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)
    const [loaded, setLoaded] = useState(false)

    const onMouseMove = (e) => {
        if (!isMobile) {
            setMouseX(e.clientX)
            setMouseY(e.clientY)
        }
    }

    useEffect(() => {
        let timeout;

        if (!loaded) {
            window.scrollTo(0,0)

            timeout = setTimeout(() => {
                window.scrollTo(0,0)
                setLoaded(true)
            }, INIT_TIME)
        }
        
        return () => clearTimeout(timeout)
    }, [loaded])

    const getClassName = () => loaded ? "fade-in-end" : "fade-in-start"

    return (
        <div id="page-not-found" onMouseMove={onMouseMove}>
            <div className={"fit-content " + getClassName()}>
                <h4>Error 404</h4>
                <TitleText text={"Page\nNot Found"} mouseX={mouseX} mouseY={mouseY} />
                <h4 id="go-back"><a href="/">Go Back</a></h4>
            </div>
        </div>
    )
}

export default PageNotFound;