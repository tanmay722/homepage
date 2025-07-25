import React from "react";
import "./MentorMarquee.css";
import Marquee from "react-fast-marquee";

import Person1 from "../Images/person1.jpg";
import Person2 from "../Images/person2.jpg";
import Person3 from "../Images/person3.jpg";
import Person4 from "../Images/person4.jpg";
import Person5 from "../Images/person5.jpg";
import Person6 from "../Images/person6.jpg";

const mentors = [
  { id: 1, src: Person1, alt: "Mentor 1" },
  { id: 2, src: Person2, alt: "Mentor 2" },
  { id: 3, src: Person3, alt: "Mentor 3" },
  { id: 4, src: Person4, alt: "Mentor 4" },
  { id: 5, src: Person5, alt: "Mentor 5" },
  { id: 6, src: Person6, alt: "Mentor 6" },
];

const MentorMarquee = () => {
  return (
    <div className="mentor-section">
      <div className="mentor-heading">Mentors</div>
      <div className="connector-line"></div>
      <div className="mentor-marquee">
        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
          direction="right"
        >
          {mentors.map((mentor) => (
            <div className="mentor-avatar" key={mentor.id}>
              <img src={mentor.src} alt={mentor.alt} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MentorMarquee;
