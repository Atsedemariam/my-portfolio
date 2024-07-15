import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";
import SunImage from "./images/icons8-sun-50.png";
import MoonImage from "./images/theme.png";
import "./CssFiles/ThemeToggler.css"; // Import CSS file for button styling

const ThemeToggler = () => {
  const { toggle, toggleFunction } = useContext(ThemeContext);

  return (
    <div>
      <button
        onClick={toggleFunction}
        className={`theme-toggler ${toggle ? "theme-dark" : "theme-light"}`}
        // onMouseEnter={(e) => (e.target.style.transform = "translateY(-8px)")}
        // onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
      >
        {toggle ? (
          <img src={SunImage} alt="Sun" className="theme-icon-sun" />
        ) : (
          <img src={MoonImage} alt="Moon" className="theme-icon-moon" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggler;