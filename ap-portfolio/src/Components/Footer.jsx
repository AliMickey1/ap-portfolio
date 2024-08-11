import '../Styles/footer.css'


import { faMagnifyingGlassLocation, faInbox } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return(
        <div className="contact-info-section">
            <section id="info-section">
        <hr/>


            <ul className="contact-info">
                <li className="contact-info-item">
                <FontAwesomeIcon style={{color: 'white', fontSize: '25px'}} icon={faMagnifyingGlassLocation} />
                <span class="place">Woodbridge, VA</span></li>

                <li className="contact-info-item"> 
                <FontAwesomeIcon style={{color: 'white', fontSize: '25px'}} icon={faPhone} />
                <span classname="phone"><a href="tel:1-804-313-7216" title="Call me">(804) 313-7216</a>
                </span></li>

                <li className="contact-info-item">
                <FontAwesomeIcon style={{color: 'white', fontSize: '25px'}} icon={faInbox} />
                <span className="gmail"><a href="mailto:alicesonphillips@gmail.com">alicesonphillips@gmail.com</a>
                </span></li>

            </ul>
            <div className="social-contact">
        <a href="https://www.linkedin.com/in/aliceson-phillips/"><FontAwesomeIcon style={{color: 'white', fontSize: '40px'}} icon={faLinkedin} /></a>
        <a href="https://github.com/AliMickey1"><FontAwesomeIcon style={{color: 'white', fontSize: '40px'}} icon={faGithub} /></a>
            {/* <ul className="socials">
                <li className="linkedIn"><FontAwesomeIcon style={{color: 'white', fontSize: '40px'}} icon={faLinkedin} /><a href="https://www.linkedin.com/in/aliceson-phillips/">https://www.linkedin.com/in/aliceson-phillips/</a></li>
                <li className="github"><FontAwesomeIcon style={{color: 'white', fontSize: '40px'}} icon={faGithub} /><a href="https://github.com/AliMickey1">https://github.com/AliMickey1</a></li>
            </ul> */}
        </div>
        <hr/>
    </section>
    </div>
    );
};

export default Footer;