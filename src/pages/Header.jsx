import React from 'react';
import './CssFiles/Header.css';
import { useNavigate } from 'react-router-dom';
import ThemeToggler from './ThemeToggler';
import LanguageToggle from './LanguageToggle';
import { ThemeContext } from "./themeContext";
import { useLanguage } from './LanguageContext';
import languages from './languages'; 
import { NavLink } from 'react-router-dom';

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
        <NavLink
  exact
  to="/"
  className="button"
  onClick={() => navigateTo('/')}
  style={{
    color: toggle ? "white" : "",  // Font color changes conditionally
    // backgroundColor: "transparent",  
    backgroundImage: toggle ? "linear-gradient(to right, white, white 50%, white 50%)" : "",  // Gradient background conditionally
    // backgroundClip: "text",
    // WebkitBackgroundClip: "text",
    // WebkitTextFillColor: "transparent",
    // transition: "all 0.3s ease-in-out"
  }}
>
  {languages[language].home}
</NavLink>
          {/* <button className="button" onClick={() => navigateTo('/about')} style={toggle ? { color: "white" , backgroundColor:"transparent"} : {}}>
            {languages[language].about}
          </button> */}
          <NavLink exact to="/about" className="button" onClick={() => navigateTo('/about')}   style={ toggle ?{
          color: "white",  
          backgroundImage:  "linear-gradient(to right, white, white 50%, white 50%)" ,  
          "&:before": {
            content: "''",
            background: "white"},
            ':hover': {
              backgroundPosition: '0',
            },
          
            '&.active': {
              backgroundPosition: '0',
            },
        }:{}}
      >
            {languages[language].about}
          </NavLink>

          <NavLink exact to="/contact" className="button" onClick={() => navigateTo('/contact')}   style={{
    color: toggle ? "white" : "",  // Font color changes conditionally
    // backgroundColor: "transparent",  
    backgroundImage: toggle ? "linear-gradient(to right, white, white 50%, white 50%)" : "",  // Gradient background conditionally
    // backgroundClip: "text",
    // WebkitBackgroundClip: "text",
    // WebkitTextFillColor: "transparent",
    // transition: "all 0.3s ease-in-out"
  }}
>
            {languages[language].contact}
          </NavLink>
          
          <NavLink exact to="/faqs" className="button" onClick={() => navigateTo('/faqs')}   style={{
    color: toggle ? "white" : "",  // Font color changes conditionally
    // backgroundColor: "transparent",  
    backgroundImage: toggle ? "linear-gradient(to right, white, white 50%, white 50%)" : "",  // Gradient background conditionally
    // backgroundClip: "text",
    // WebkitBackgroundClip: "text",
    // WebkitTextFillColor: "transparent",
    // transition: "all 0.3s ease-in-out"
  }}
>
            {languages[language].faqs}
          </NavLink>
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
