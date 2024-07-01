import React from 'react';
import Header from './Header';
import './CssFiles/Home.css'; 
import './CssFiles/Contact.css'; 
import { ThemeContext } from "./themeContext";
import './CssFiles/Footer.css'; 

import { useLanguage } from './LanguageContext';
import languages from './languages'; // Import the language file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram, faXTwitter, faLinkedin, faGitlab, faMastodon } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {

  const { toggle } = React.useContext(ThemeContext);

  const { language } = useLanguage();
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation logic here if needed
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    if (!name || !email || !subject || !message) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    // Example: Send data to backend or show success message
    console.log('Form submitted:', { name, email, subject, message });
    alert('Form submitted successfully!');

    // Optionally reset form fields
    e.target.reset();
  };
  return (
    <div className="container" style={toggle ? {background: "#292929", color: "white"} : {}}>
      <Header />
      <div className="scrollable-container-contact">

          <div className="contact-form">
            <h2>{languages[language].contact_form}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{languages[language].name_q}</label>
                <input className = 'input' type="text" id="name" name="name" placeholder={languages[language].placeholder_name} required/>
              </div>
              <div className="form-group">
                <label htmlFor="email">{languages[language].email}</label>
                <input className = 'input' type="email" id="email" name="email" placeholder={languages[language].placeholder_email} required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">{languages[language].subject}</label>
                <input className = 'input' type="text" id="subject" name="subject" placeholder={languages[language].placeholder_subject} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">{languages[language].message}</label>
                <textarea className = 'input' id="message" name="message" placeholder={languages[language].placeholder_message} rows="4" required></textarea>
              </div>
              <button type="submit" style={toggle ? {background: "#414a4c" } : {}}>{languages[language].submit}</button>
            </form>
          </div>
          <div className="contact-info">
            <h2>{languages[language].contact_info}</h2>
            <p><strong>{languages[language].email}:</strong> latseden@gmail.com</p>
            <p><strong>{languages[language].phone}:</strong> +251905518244</p>
            <p><strong>{languages[language].location}:</strong> {languages[language].location_a}</p>
            <p><strong>{languages[language].availability}:</strong> {languages[language].availability_a}</p>
            <p><strong>{languages[language].response}:</strong> {languages[language].response_a}</p>
          </div>

        
      <div className="site-footer_contact"style={toggle ? { "--red":"white", background: "#292929", boxShadow: " 0 0 10px rgba(255,255,255, 0.9)" } : {}}>
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

        
        <div className="contact-text">
          <p style={{ fontSize: language === 'en' ? "inherit" : "25px" }}>{languages[language].get_in_touch}</p>
        </div>
      </div>
    </div>
  );
}
