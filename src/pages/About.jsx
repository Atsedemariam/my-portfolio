import React from 'react';
import Header from './Header';
import './CssFiles/About.css'; 
import './CssFiles/LanguageIcons.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram, faXTwitter, faLinkedin, faGitlab, faMastodon } from '@fortawesome/free-brands-svg-icons';
import './CssFiles/Footer.css'; 
import { useLanguage } from './LanguageContext';
import languages from './languages'; 
import { ThemeContext } from "./themeContext";
import ScrollToTopText from './ScrollToTopText';

const About = () => {
  const { toggle } = React.useContext(ThemeContext);
  const { language } = useLanguage();
  
  return (
    
    <div className="container" style={toggle ? { "--red":"white", background: "#292929", boxShadow: " 0 0 10px rgba(255,255,255, 0.9)" } : {}}>
      <Header /> 
      <div className="scrollable-container">
        <div className='right'>
          <div className="lili-container">
            <img className="image" src="../typing_image.png" alt=""/>
          </div>
          <div className="about-me">
            <p className='portfolio-paragraph'>
            {languages[language].portfolioParagraph}
              </p>
          </div>
          <div className='divider' style={toggle ? { background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}/>
          
          <div className='experience_text'><p >{languages[language].Experience}</p></div>
          
          <div className="miss-container">
            <img className="image" src="../miss_professional.png" alt=""/>
          </div>
          <div className="language-icons">
            <div className="language-icon-c"></div>
            <div className="language-icon-java"></div>
            <div className="language-icon-python"></div>
            <div className="language-icon-html"></div>
            <div className="language-icon-css"></div>
            <div className="language-icon-php"></div>
            <div className="language-icon-react"></div>
             <div className="language-icon-vue"></div>
            <div className="language-icon-c-sharp"></div>
            <div className="language-icon-django"></div>
            <div className="language-icon-docker"></div>
            <div className="language-icon-sql"></div>
            <div className="language-icon-mongo"></div>
            <div className="language-icon-unity"></div>
            <div className="language-icon-wire"></div>
            <div className="language-icon-git"></div>
            <div className="language-icon-figma"></div>
            <div className="language-icon-gitlab"></div>
            <div className="language-icon-github"></div>
            <div className="language-icon-confluence"></div>
            <div className="language-icon-jenkins"></div>
          </div>
          <div className='exp_1' style={toggle ? { background: '#414a4c' } : {}}>
            <p className='prof'>{languages[language].exp_1_prof}</p><p className='date'>{languages[language].exp_1_date}</p><p className='comp'>{languages[language].comp_l}</p>
          </div>
          
          <div className='exp_2' style={toggle ? { background: '#414a4c' } : {}}>
            <p className='prof'>{languages[language].exp_2_prof}</p>
            <p className='date'>{languages[language].exp_2_date}</p>
            <a className='comp_l' href="https://www.tern.systems/home" target="_blank" rel="noopener noreferrer" style={toggle ? { color: 'white' } : {}}>{languages[language].comp_2}</a>
          </div>

          <div className='exp_3' style={toggle ? { background: '#414a4c' } : {}}>
            <p className='prof'>{languages[language].exp_3_prof}</p><p className='date'>{languages[language].exp_3_date}</p><p className='comp'>{languages[language].comp_2}</p>
          </div>
          
          <div className='divider_2' style={toggle ? { background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}/>

          
          <div className='journey_text'><p >{languages[language].journey_text}</p></div>
          <div className="custom-div">
          <a 
          href="https://www.tern.systems/polaris-atm-air-traffic-management-system" 
          className="custom-link"  
          target="_blank" 
          rel="noopener noreferrer"
          >
          </a>
        </div>
        <div className='journey'> 
              <p>{languages[language].journey}</p>
        </div>
        <div className='journey_2'>
          <p>{languages[language].journey_2}</p>
        </div>
        <div className='divider_3' style={toggle ? { background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}/>
        
        <div className='education_text'><p>{languages[language].education_text}</p></div>

        <div className='graduating_hat' style={toggle ? { filter: 'brightness(0) invert(1)'} : {}}>
          <img className="image" src="../kk.png" alt=""/>
        </div>

        <div className='edu_1' style={toggle ? { background: '#414a4c' } : {}}>
            <p className='prof'> {languages[language].edu_1_prof}</p>
            <p className='date'>{languages[language].edu_1_date}</p>
            <p className='comp'>{languages[language].edu_1_comp}</p>
            <p className='gpa'>{languages[language].edu_1_gpa}</p>
        </div>
        
        <div className='edu_2' style={toggle ? { background: '#414a4c' } : {}}>
            <p className='prof'> {languages[language].edu_2_prof}</p>
            <p className='date'>{languages[language].edu_2_date}</p>
            <p className='comp'>{languages[language].edu_2_comp}</p>
            <p className='gpa'>{languages[language].edu_2_gpa}</p>
        </div>
        
        <div className='divider_4' style={toggle ? { background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}/>

        <div className='skill_text' ><p>{languages[language].skill_text}</p></div>
        <div className="language-c" style={toggle ? { color: 'black', background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}><p>C++</p></div>
          <div className="language-java" style={toggle ? { color: 'black', background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}><p>Java</p></div>
          <div className="language-python" style={toggle ? { color: 'black', background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}><p>Python</p></div>
          <div className="language-html" style={toggle ? { color: 'black', background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}><p>HTML</p></div>
          <div className="language-css" style={toggle ? { color: 'black', background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}><p>Css</p></div>
          <div className="language-php" style={toggle ? { color: 'black', background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}><p>PhP</p></div>
          <div className="language-react" style={toggle ? { color: 'black', background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}><p>React</p></div>
          <div className="language-vue" style={toggle ? { color: 'black', background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}><p>Vue</p></div>
          <div className="language-c-sharp" style={toggle ? { color: 'black', background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}><p>C#</p></div>
          <div className="language-django" style={toggle ? { color: 'black', background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}><p>Django</p></div>
          <div className="language-docker" style={toggle ? { color: 'black', background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}><p>Docker</p></div>
          <div className="language-sql" style={toggle ? { color: 'black', background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}><p>Sql</p></div>
          <div className="language-mongo" style={toggle ? { color: 'black', background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}><p>Mongo</p></div>
          <div className="language-unity" style={toggle ? { color: 'black', background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}><p>Unity</p></div>
          <div className="language-wire" style={toggle ? { color: 'black', background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}><p>Wireshark</p></div>
          <div className="language-git" style={toggle ? { color: 'black', background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}><p>git</p></div>
          <div className="language-figma" style={toggle ? { color: 'black', background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}><p>Figma</p></div>
          <div className="language-gitlab" style={toggle ? { color: 'black', background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}><p>Gitlab</p></div>
          <div className="language-github" style={toggle ? { color: 'black', background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}><p>Github</p></div>
          <div className="language-confluence" style={toggle ? { color: 'black', background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}><p>Confluence</p></div>
          <div className="language-jenkins" style={toggle ? { color: 'black', background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}><p>Jenkins</p></div>
          <div className="language-jama" style={toggle ? { color: 'black', background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}><p>Jama</p></div>
      
        <div className='divider_5' style={toggle ? { background: 'linear-gradient(to right, transparent, white, transparent)' } : {}}/>

        
        <div className='mission_text' style={language ==='en'? {}:{left:"38%"}}><p>{languages[language].mission_text}</p></div>

        <div className='mission_paragraph'>
          <p><p>{languages[language].mission_paragraph}</p></p></div>
        <div class="cv-section">
        <div class="cv-content">
          <p>{languages[language].cv_content}</p>
          <a href="./images/Atsedemariam-resume.pdf" class="download-link" download style={toggle ? {background: "#414a4c" } : {}}>
            <span class="download-label">{languages[language].download_label}</span>
            <span class="download-icon">&#8595;</span>
          </a>
        </div>
      </div>
        
      <div className="site-footer_about" style={toggle ? { "--red":"white", background: "#292929", boxShadow: " 0 0 10px rgba(255,255,255, 0.9)" } : {}}>
            <div className="footer-content">
                <div className="footer-left">
                    <p>The people who are crazy enough to think they can change the world are the ones who do.</p>
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
        </div>
        <ScrollToTopText/>
 
        </div>
      </div>
      
    </div>
  );
};

export default About;
