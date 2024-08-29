import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Navbar.css'
import Home from '../Buttons/Home.png'
import Portfolio from '../Buttons/Portfolio.png'
import ContactBtn from "../Buttons/ContactBtn.png";
import Resume from '../Buttons/Resume.png'

import '../Styles/footer.css'
import { faMagnifyingGlassLocation, faInbox } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
    // const navRef = useRef();

    // const showNavbar = () => {
    //     navRef.current.classNameList.toggle('translate-y-0');
    // };

    return (
        <header>
            <div className="contact-info-section">
                <div id="info-section">
                    <hr/>

                    <ul className="contact-info">
                        <li className="contact-info-item">
                        <FontAwesomeIcon style={{color: 'white', fontSize: '15px'}} icon={faMagnifyingGlassLocation} />
                        <span className="place">Woodbridge, VA</span></li>

                        <li className="contact-info-item"> 
                        <FontAwesomeIcon style={{color: 'white', fontSize: '15px'}} icon={faPhone} />
                        <span className="phone"><a href="tel:1-804-313-7216" title="Call me">(804) 313-7216</a>
                        </span></li>

                        <li className="contact-info-item">
                        <FontAwesomeIcon style={{color: 'white', fontSize: '15px'}} icon={faInbox} />
                        <span className="gmail"><a href="mailto:alicesonphillips@gmail.com">alicesonphillips@gmail.com</a>
                        </span></li>

                    </ul>
                <div className="social-contact">
                    <a href="https://www.linkedin.com/in/aliceson-phillips/"><FontAwesomeIcon style={{color: 'white', fontSize: '20px'}} icon={faLinkedin} /></a>
                    <a href="https://github.com/AliMickey1"><FontAwesomeIcon style={{color: 'white', fontSize: '20px'}} icon={faGithub} /></a>

                </div>
                <hr/>
                </div>
            </div>
            <nav>
                
                <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/">
                        <img src={Home} alt="home button"/>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/portfolio"><img src={Portfolio} alt="portfolio button"/></Link>
                </li>
                <li className="nav-item">
                    <Link to="/resume"><img src={Resume} alt="resume page button"/></Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact"><img src={ContactBtn} alt="contact button" /></Link>
                </li>

            </ul>

            {/* <ul> */}
                {/* <button> */}
                    {/* <li><a href="home">Home</a></li> */}
                {/* </button> */}
                {/* <button> */}
                    {/* <li><a href="portfolio">Portfolio</a></li> */}
                {/* </button> */}
                {/* <button>
                    <li><a href="contact">Contact Me</a></li>
                </button> */}
            {/* </ul>                 */}
            </nav>
        </header>
    )

}

export default Navbar;