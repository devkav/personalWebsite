import { Component } from 'react';
import { AiOutlineGithub, AiFillFile } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

class Linkbar extends Component {
    openLink = (link) => {
        window.open(link, "_blank")
    }

    openGithub = () => {this.openLink("https://github.com/DevanTurtle7")}
    openLinkedIn = () => {this.openLink("https://www.linkedin.com/in/devan-kavalchek")}
    openDevpost = () => {this.openLink("https://devpost.com/djk6908")}
    openEmail = () => {this.openLink("mailto:devan.kavalchek@gmail.com")}
    openResume = () => {this.openLink("./resume.pdf")}

    render() {
        return (
            <div className="linkbar">
                <AiOutlineGithub className="linkbar-icon color-0" onClick={this.openGithub}/>
                <FaLinkedinIn className="linkbar-icon color-25" onClick={this.openLinkedIn}/>
                <SiDevpost className="linkbar-icon color-50" onClick={this.openDevpost}/>
                <MdEmail className="linkbar-icon color-75" onClick={this.openEmail}/>
                <AiFillFile className="linkbar-icon color-100" onClick={this.openResume}/>
            </div>
        );
    }
}

export default Linkbar;