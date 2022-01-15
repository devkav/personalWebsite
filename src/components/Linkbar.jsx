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

    render() {
        return (
            <div className="linkbar">
                <AiOutlineGithub className="linkbar-icon" onClick={this.openGithub}/>
                <FaLinkedinIn className="linkbar-icon" onClick={this.openLinkedIn}/>
                <SiDevpost className="linkbar-icon" onClick={this.openDevpost}/>
                <MdEmail className="linkbar-icon" />
                <AiFillFile className="linkbar-icon" />
            </div>
        );
    }
}

export default Linkbar;