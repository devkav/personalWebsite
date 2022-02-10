import '../style/AboutMe.css';

function AboutMe(props) {
    return (
        <div id="aboutMe">
            <div className="fit-content" id="about-me-content">
                <h2 className="fit-content">About Me</h2>
                <p>
                    Hi, My name is Devan Kavalchek, I'm a passionate and detail oriented
                    software engineer. I'm a second year student at the Rochester Institute
                    of Technology pursuing a B.S. degree in Software Engineering. Recently,
                    I've been enjoying working with ReactJS, SQL, Java, and learning Kotlin.
                </p>
                <p>
                    I'm extremely passionate about software and love expressing my 
                    creativity through it. I always strive to have an in-depth understand 
                    of whatever language or framework I'm working with so that I can 
                    better optimize and style my code. I'm a fast learner and always 
                    looking for a new technology to learn.
                </p>
                <p>
                    Keep scrolling to see what I've been working on!
                </p>
            </div>
        </div>
    );
}

export default AboutMe;