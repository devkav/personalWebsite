import { Component } from 'react';
import { AiOutlineGithub, AiFillFile } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

class Linkbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loaded: false
        }
    }

    openLink = (link) => {
        window.open(link, "_blank")
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

    openGithub = () => { this.openLink("https://github.com/DevanTurtle7") }
    openLinkedIn = () => { this.openLink("https://www.linkedin.com/in/devan-kavalchek") }
    openDevpost = () => { this.openLink("https://devpost.com/djk6908") }
    openEmail = () => { this.openLink("mailto:devan.kavalchek@gmail.com") }
    openResume = () => { this.openLink("./resume.pdf") }

    render() {
        let className = this.state.loaded ? "linkbar-loaded" : "linkbar-unloaded"

        return (
            <div className={"linkbar " + className}>
                <AiOutlineGithub className="linkbar-icon color-0" onClick={this.openGithub} />
                <FaLinkedinIn className="linkbar-icon color-25" onClick={this.openLinkedIn} />
                <SiDevpost className="linkbar-icon color-50" onClick={this.openDevpost} />
                <MdEmail className="linkbar-icon color-75" onClick={this.openEmail} />
                <AiFillFile className="linkbar-icon color-100" onClick={this.openResume} />
            </div>
        );
    }
}

export default Linkbar;