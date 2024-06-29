import React from 'react';
import Header from './Header';
import './CssFiles/Home.css'; 
import './CssFiles/Contact.css'; 
import { ThemeContext } from "./themeContext";
import './CssFiles/Footer.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram, faXTwitter, faLinkedin, faGitlab, faMastodon } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {

  const { toggle } = React.useContext(ThemeContext);

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
            <h2>Want to say something?</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input className = 'input' type="text" id="name" name="name" placeholder="Your name" required/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input className = 'input' type="email" id="email" name="email" placeholder="Your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input className = 'input' type="text" id="subject" name="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className = 'input' id="message" name="message" placeholder="Your message" rows="4" required></textarea>
              </div>
              <button type="submit" style={toggle ? {background: "#414a4c" } : {}}>Send Message</button>
            </form>
          </div>
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p><strong>Email:</strong> latseden@gmail.com</p>
            <p><strong>Phone:</strong> +251905518244</p>
            <p><strong>Location:</strong> Bahirdar, Ethiopia</p>
            <p><strong>Availability:</strong> Mon-Fri, 9am-5pm</p>
            <p><strong>Response Time:</strong> Within 24 hours</p>
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
          <p>Get in Touch</p>
        </div>
      </div>
    </div>
  );
}
