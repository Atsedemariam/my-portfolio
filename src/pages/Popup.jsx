import React, { useState, useEffect } from 'react';
import './CssFiles/Popup.css'; // Import CSS file for styling
import { ThemeContext } from "./themeContext";

const Popup = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const { toggle } = React.useContext(ThemeContext);
  const handleClose = () => {
    setIsVisible(false);
    onClose(); // Optional: Callback function to handle any additional logic on close
  };

  // Automatically close the popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose(); // Optional: Call onClose function after timeout
    }, 15000); // Adjust timeout duration as needed (5000 milliseconds = 5 seconds)

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [onClose]);

  return (
    isVisible && (
      <div className="popup"  style={toggle ? {backgroundColor: "rgba(65, 74, 76, 0.75)", color:"white", boxShadow: " 0 0 10px rgb(192, 192, 192, 0.9)" } : {}} >
        <span className="close" onClick={handleClose}>&times;</span>
        <div className="popup-content">
          <p>{message}</p>
        </div>
      </div>
    )
  );
};

export default Popup;
