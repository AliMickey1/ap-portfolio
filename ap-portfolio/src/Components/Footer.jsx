import '../Styles/footer.css'


import { faMagnifyingGlassLocation, faInbox } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return(
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
            {/* <ul className="socials">
                <li className="linkedIn"><FontAwesomeIcon style={{color: 'white', fontSize: '40px'}} icon={faLinkedin} /><a href="https://www.linkedin.com/in/aliceson-phillips/">https://www.linkedin.com/in/aliceson-phillips/</a></li>
                <li className="github"><FontAwesomeIcon style={{color: 'white', fontSize: '40px'}} icon={faGithub} /><a href="https://github.com/AliMickey1">https://github.com/AliMickey1</a></li>
            </ul> */}
        </div>
        <hr/>
    </div>
    </div>
    );
};

export default Footer;