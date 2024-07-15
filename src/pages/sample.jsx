import React from "react";
import "./Kk.css"; // Import your CSS file for styling

const Kk = () => {
  const items = [
    {
        date: "Jan 1940",
        content: "Another event content",
        detailedText: "More details about this event..."
    },
    
    {
        date: "May 1940",
        content: "Men of the British Expeditionary Force .",
        detailedText: "Detailed description of the event..."
      }
    // Add more items as needed
  ];

  return (
    <>
    <div className="timeline">
      {items.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-item-date">{item.date}</div>
          <div className="timeline-item-content">
            <h3>{item.content}</h3>
            <p>{item.detailedText}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="sketch-image"></div>
    </>
  );
}

export default Kk;

// {
//     date: languages[language].edu_2_date,
//     content: languages[language].edu_2_prof,
//     comp: languages[language].edu_2_comp,
//     gpa: languages[language].edu_2_gpa,
// }