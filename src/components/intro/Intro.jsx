import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'
import Fade from 'react-reveal/Fade';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

export default function Intro() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, { showCursor: true, strings: ['Machine Learning', 'Natural Language Processing', "Full-Stack" ] })
    }, [])
    return (
        <div className="intro" id="intro">
            <Fade>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />

                    <div className="links">
                        <a className="linkBtn" href="https://github.com/cataltasz" target="_blank"> <GitHubIcon/> .Github</a>
                        <a className="linkBtn" href="https://linkedin.com/in/mustafacataltas" target="_blank"> <LinkedInIcon/> .LinkedIn</a>
                        <a className="linkBtn" href="/assets/resume.pdf" target="_blank"> <AssignmentIndIcon/> .Resume</a>
                    </div>
                </div>

                
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1>Mustafa Çataltaş</h1>
                    <h3>Computer Engineer <br/><span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="down" />
                </a>
            </div>
            </Fade>
        </div>
    )
}
