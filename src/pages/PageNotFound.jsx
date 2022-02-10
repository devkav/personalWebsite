import '../style/WelcomePage.css'
import '../style/PageNotFound.css'
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import TitleText from "../components/TitleText";

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
        load()
        const welcome = document.getElementById("welcome")
    }, [])

    const load = async () => {
        window.scrollTo(0,0)
        await sleep(500)
        window.scrollTo(0,0)
        setLoaded(true)
    }

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

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