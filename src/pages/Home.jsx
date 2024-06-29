import React from 'react';
import Header from './Header'; 
import Footer from './Footer';
import './CssFiles/Home.css';
import ScrollToTopButton from './ScrollToTopButton'; 
import { ThemeContext } from "./themeContext";
import { useLanguage } from './LanguageContext';
import languages from './languages'; 

export default function Home() {
  const { toggle } = React.useContext(ThemeContext);
  const { language } = useLanguage();
  return (
    <div style={{ '--red': toggle ? '#fff' : '#004225' }}>
    <div className="container" style={toggle ? {background: "#292929" } : {}}>
      <Header /> {/* Render the Header component */}
      
      <div className="scrollable-container-home">
        <div className="circle-container" >
          <figure className="wave">
            <div className="circle-image"></div>
          </figure>
        </div>
        <div className="profile">
          <p className="salutation"> {languages[language].salutation} </p>
          <p className="text">{languages[language].text}</p>
        </div>

        <Footer/>
      </div>
      <ScrollToTopButton />
    </div>
    </div>
  );
}
