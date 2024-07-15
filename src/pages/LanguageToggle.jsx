import React from 'react';
import { useLanguage } from './LanguageContext';
import "./CssFiles/LanguageToggler.css"; // Import CSS file for button styling
import AmImage from './images/ha.png'
import EnImage from './images/language.png'
  import { ThemeContext } from "./themeContext";
const LanguageToggle = () => {
  const { toggleLanguage, language } = useLanguage(); // Destructure toggleLanguage and language

const { toggle } = React.useContext(ThemeContext);
  return (
    <button
      onClick={toggleLanguage}
      className={`language-toggler ${language === 'en' ? "theme-dark" : "theme-light"}`}
    //   onMouseEnter={(e) => (e.target.style.transform = "translateY(-8px)")}
    //   onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
      >
      {language === 'en' ? (
          <img src={AmImage} alt="Am" className="lan-icon-am" style={toggle ? {filter: "brightness(0) invert(1)" } : {}}/>
        ) : (
          <img src={EnImage} alt="En" className="lan-icon-en" style={toggle ? {filter: "brightness(0) invert(1)" } : {}}/>
        )}
    </button>
  );
};

export default LanguageToggle;
