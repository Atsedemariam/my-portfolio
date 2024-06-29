import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Make sure to import BrowserRouter as Router
import Home from './pages/Home';
import About from './pages/About';
import ContactMe from './pages/ContactMe';
import FAQs from './pages/FAQ';
import ScrollToTopTexyt from './pages/someotherthing';
import { ThemeContext } from "./pages/themeContext";

function App() {
  const { toggle } = React.useContext(ThemeContext);
  return (
    <div className={toggle ? "dark" : "light"}>
      <Router> {/* Wrap your Routes with BrowserRouter */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/sample" element={<ScrollToTopTexyt/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
