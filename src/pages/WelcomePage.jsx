import '../style/WelcomePage.css';
import { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import LearnMore from '../components/LearnMore';
import Navbar from '../components/Navbar';
import TitleText from '../components/TitleText';
import { isMobile } from 'react-device-detect';

const INIT_TIME = 500

function WelcomePage(props) {
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        let timeout;

        if (!loaded) {
            window.scrollTo(0, 0)
            timeout = setTimeout(() => {
                window.scrollTo(0, 0)
                setLoaded(true)
            }, INIT_TIME)
        }

        return () => clearTimeout(timeout)
    }, [loaded])

    const onMouseMove = (e) => {
        if (!isMobile) {
            setMouseX(e.clientX)
            setMouseY(e.clientY)
        }
    }

    const onClick = () => {
        const aboutMe = document.getElementById("aboutMe")
        aboutMe.scrollIntoView({ behavior: 'smooth' })
    }

    const getClassName = () => loaded ? "fade-in-end" : "fade-in-start"

    return (
        <div className={"welcome-page " + getClassName()} onMouseMove={onMouseMove} id="welcome">
            <Navbar />

            <div className="header-col centered-col">
                <Container className="welcome-text-container">
                    <h4 className="welcome-text">Hi, my name is</h4>
                    <TitleText text={"Devan\nKavalchek"} mouseX={mouseX} mouseY={mouseY} />
                    <h4 className="welcome-text">A detail oriented software engineer.</h4>
                </Container>
            </div>

            <LearnMore onClick={onClick} />
        </div>
    );
}

export default WelcomePage;