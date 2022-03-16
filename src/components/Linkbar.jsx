import { useEffect, useState } from 'react';
import { AiOutlineGithub, AiFillFile } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import IconButton from './IconButton';

const INIT_TIME = 1500

function Linkbar(props) {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        let timeout;

        if (!loaded) {
            timeout = setTimeout(() => setLoaded(true), INIT_TIME)
        }

        return () => clearTimeout(timeout)
    }, [loaded])

    const getClassName = () => loaded ? "linkbar-loaded" : "linkbar-unloaded"

    return (
        <div className={"linkbar " + getClassName()}>
            <IconButton href="https://github.com/DevanTurtle7">
                <AiOutlineGithub className="linkbar-icon color-0" />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/devan-kavalchek">
                <FaLinkedinIn className="linkbar-icon color-25" />
            </IconButton>
            <IconButton href="https://devpost.com/djk6908">
                <SiDevpost className="linkbar-icon color-50" />
            </IconButton>
            <IconButton href="mailto:devan.kavalchek@gmail.com">
                <MdEmail className="linkbar-icon color-75" />
            </IconButton>
            <IconButton href="./Devan Kavalchek Resume.pdf">
                <AiFillFile className="linkbar-icon color-100" />
            </IconButton>
        </div>
    );
}

export default Linkbar;