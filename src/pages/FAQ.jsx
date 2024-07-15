import React, { useState } from 'react';
import Header from './Header';
// import Footer from './Footer';
import './CssFiles/Header.css'; // Import other global styles if needed
import './CssFiles/FAQs.css'; // Import your external CSS file for FAQs styling

import { ThemeContext } from "./themeContext";

import { useLanguage } from './LanguageContext';
import Popup from './Popup'; // Adjust path as per your file structure
import './CssFiles/Footer.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram, faXTwitter, faLinkedin, faGitlab, faMastodon } from '@fortawesome/free-brands-svg-icons';
const FAQs = () => {
  const [showPopup, setShowPopup] = useState(true); // Set to true to show popup initially

  const { language } = useLanguage();

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const { toggle } = React.useContext(ThemeContext);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered index

  const faqs = [
    {
      question: 'What technologies are you proficient in?',
      answer: 'I am proficient in Python, which is my favorite language and one I have extensive experience with. I specialize in Django for backend development and React for frontend. Additionally, I have experience with Unity using C#',
    },
    {
      question: "Can you describe a challenging project you've worked on?",
      answer: 'One of my most challenging projects was working on the Polaris ATC system. This air traffic control system involved handling highly sensitive information and codes. The simulation required precise timing synchronization, where even a slight deviation of just a fraction of a second could yield different outcomes.',
    },
    {
      question: 'What methodologies or processes do you follow in your development work?',
      answer: 'I believe in using Scrum methodologies for effective teamwork, where tasks are collaboratively managed within the team. In one of my roles, I served as a team lead, overseeing task allocation and ensuring project milestones were met',
    },
    {
      question: 'Can you describe your approach to ensuring the quality of your code?',
      answer: 'In my projects, I prioritize a comprehensive approach to quality assurance that includes both manual and automated testing. Manual testing allows for meticulous inspection of functionality and user experience, ensuring that the software meets specified requirements. Additionally, I implement automated testing to streamline repetitive tests and maintain consistency across different scenarios. This dual approach helps me deliver reliable and high-quality software throughout the development process.',
    },
    
    {
      question: 'What contributions did you make to your previous projects or teams?',
      answer: "In my roles, I have consistently worked well within teams, actively sharing my knowledge and expertise while also being open to learning from others when necessary. Collaboration and knowledge-sharing have been key to our team's success in delivering projects effectively.",
    },
    
    {
      question: 'How do you stay updated with the latest trends and technologies in software development?',
      answer: "When I hear about emerging technologies from friends or the media, I take initiative to learn and explore them further. I believe in continuous learning and adapting to stay updated with the latest trends in software development. This proactive approach helps me integrate new technologies into my projects effectively.",
    },
    
    {
      question: "Can you showcase any personal projects you've worked on?",
      answer: "Details about my experiences and projects can be found on my 'About' page. However, if you have specific questions or would like more information about any particular project, feel free to ask!",
    },
    
    {
      question: "What interests you most about software development?",
      answer: "Software development is incredibly fascinating to me. It's a field where I get to witness ideas transform into tangible solutions that can impact people's lives. While it can be challenging and demanding at times, the process of problem-solving and creating something from scratch is deeply rewarding. I find joy in tackling complex problems, optimizing processes, and constantly learning new technologies to stay ahead in this dynamic industry. It's this blend of creativity, logic, and continuous improvement that keeps me passionate about software development.",
    },
    
    {
      question: "How do you handle tight deadlines and pressure in your work?",
      answer: "I approach tight deadlines and high-pressure situations by working diligently, managing my time effectively, and leveraging support from colleagues when needed. I believe in staying focused, staying organized, and seeking assistance when necessary to ensure timely delivery and quality outcomes in my software development projects.",
    },
    
    {
      question: "What are your career goals for the next few years?",
      answer: "In the coming years, one of my career goals is to contribute meaningfully to the technological advancement and innovation in my country. I am passionate about leveraging my skills in software engineering to develop solutions that address local challenges and contribute to national development. Whether through creating impactful applications, promoting tech literacy, or collaborating on initiatives that improve infrastructure and services, I aim to make a positive difference in my community and beyond.",
    },
  ];

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index); // Set hovered index
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // Clear hovered index
  };
  let text = ["ይህን ገጽ ወደ አማርኛ አልተረጎምኩትም፤",
    <br/>,
    <br/>,
    "አይጥ ወልዳ ወልዳ... 😊"];
  return (
    <div className='container' style={toggle ? {backgroundColor: "#292929", color:"white"} : {}}>
      {language === 'en' ? null : (showPopup && (
        <Popup message={text} onClose={handleClosePopup}  />
      ))}
      <Header />
      <div className="scrollable-container-contact">
        <div className="faq-container">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                className="faq-item"
                key={index}
                onClick={() => toggleAccordion(index)}
                style={toggle ?{
                  backgroundColor: hoveredIndex === index ? "#353839 " : "",
                  color:  "white",
                  transition: "background-color 0.3s ease",
                }:{}}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="faq-question">
                  <span>{faq.question}</span>
                  <span>{expandedIndex === index ? '-' : '+'}</span>
                </div>
                {expandedIndex === index && (
                  <div className="faq-answer" style={toggle ? {backgroundColor: "#43302e  ", color:"white"} : {}}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        </div>
        <div className="site-footer_faq" style={toggle ? { "--red":"white", background: "#292929", boxShadow: " 0 0 10px rgba(255,255,255, 0.9)" } : {}}>
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
    </div>
  );
};

export default FAQs;