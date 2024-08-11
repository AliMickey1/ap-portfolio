import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Navbar.css'
import Home from '../Buttons/Home.png'
import Portfolio from '../Buttons/Portfolio.png'
import ContactBtn from "../Buttons/ContactBtn.png";
import Resume from '../Buttons/Resume.png'

function Navbar() {
    // const navRef = useRef();

    // const showNavbar = () => {
    //     navRef.current.classList.toggle('translate-y-0');
    // };

    return (
        <header>
            <nav>
                {/* <a href="Home"><img src={Home} alt="home button"/></a>
                <a href="portfolio"><img src={Portfolio} alt="portfolio button"/></a>
                <a href="About"><img src={About} alt="about page button"/></a>
                <a href="Resume"><img src={Resume} alt="resume button" /></a>
                <a href="Contact"><img src={ContactBtn} alt="contact button" /></a> */}
                
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