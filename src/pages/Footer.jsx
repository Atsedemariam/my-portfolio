import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram, faXTwitter, faLinkedin, faGitlab, faMastodon } from '@fortawesome/free-brands-svg-icons';
import './CssFiles/Footer.css'; // Import your CSS file for footer styles
import { useLanguage } from './LanguageContext';
import languages from './languages'; 

import { ThemeContext } from "./themeContext";
const Footer = () => {
    
  const { toggle } = React.useContext(ThemeContext);
  const { language } = useLanguage();

    return (
        <footer className="site-footer" style={toggle ? { "--red":"white", background: "#292929", boxShadow: " 0 0 10px rgba(255,255,255, 0.9)" } : {}}>
            <div className="footer-content">
                <div className="footer-left">
                    <p>{languages[language].footerText}</p>
                </div>
                <div className="footer-right">
                    <a href="https://github.com/Atsedemariam" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={toggle ? {filter: "brightness(0) invert(1)"} : {}}/></a>
                    <a href="https://gitlab.com/tern-atsedemarian" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGitlab}  style={toggle ? {filter: "brightness(0) invert(1)"} : {}}/></a>
                    <a href="https://t.me/latseden19" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTelegram}  style={toggle ? {filter: "brightness(0) invert(1)"} : {}}/></a>
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter}  style={toggle ? {filter: "brightness(0) invert(1)"} : {}}/></a>
                    <a href="https://www.linkedin.com/in/atsedemariam-bizuneh-36a434212/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} style={toggle ? {filter: "brightness(0) invert(1)"} : {}} /></a>
                    <a href="https://mastodon.social/@AtsedBoozie" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMastodon}  style={toggle ? {filter: "brightness(0) invert(1)"} : {}}/></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
