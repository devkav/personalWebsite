import { Component } from 'react';
import { AiOutlineGithub, AiFillFile } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import IconButton from './IconButton';

class Linkbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        this.load()
    }

    load = async () => {
        await this.sleep(1500)
        this.setState({ loaded: true })
    }

    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    render() {
        let className = this.state.loaded ? "linkbar-loaded" : "linkbar-unloaded"

        return (
            <div className={"linkbar " + className}>
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
                <IconButton href="./resume.pdf">
                    <AiFillFile className="linkbar-icon color-100" />
                </IconButton>
            </div>
        );
    }
}

export default Linkbar;