import React from 'react';
import './CssFiles/Header.css';
import { useNavigate } from 'react-router-dom';
import ThemeToggler from './ThemeToggler';
import LanguageToggle from './LanguageToggle';
import { ThemeContext } from "./themeContext";
import { useLanguage } from './LanguageContext';
import languages from './languages'; // Import the language file

const Header = ({ onToggle }) => {
  const navigate = useNavigate();
  const { toggle } = React.useContext(ThemeContext);
  const { language } = useLanguage();
  
  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className='header_div' style={toggle ? { background: "#292929 ", color: "white", backgroundColor: 'rgba(41, 41, 41, 0.95)' } : {}}>
      <div className="header">
        <div className="buttons-container">
          <button className="button" onClick={() => navigateTo('/')} style={toggle ? { color: "white", backgroundColor:"transparent"} : {}}>
            {languages[language].home}
          </button>
          <button className="button" onClick={() => navigateTo('/about')} style={toggle ? { color: "white" , backgroundColor:"transparent"} : {}}>
            {languages[language].about}
          </button>
          <button className="button" onClick={() => navigateTo('/contact')} style={toggle ? { color: "white", backgroundColor:"transparent"} : {}}>
            {languages[language].contact}
          </button>
          <button className="button" onClick={() => navigateTo('/faqs')} style={toggle ? { color: "white", backgroundColor:"transparent"} : {}}>
            {languages[language].faqs}
          </button>
          <ThemeToggler/>
          <LanguageToggle />
        </div>
      </div>
      <div className="my_name">
        <p className='name_text'>
          {languages[language].name}
        </p>
      </div>
    </div>
  );
};

export default Header;
