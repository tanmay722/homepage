import React from "react";
import Marquee from "react-fast-marquee";
import "./TestimonialSection.css";

import Person1 from "../Images/person1.jpg";
import Person2 from "../Images/person2.jpg";
import Person3 from "../Images/person3.jpg";
import Person4 from "../Images/person4.jpg";

const testimonials = [
  {
    name: "Tom Sanders",
    title: "UX Designer",
    image: Person1,
    content:
      "I love the customizable features that fit perfectly with our team's needs!",
  },
  {
    name: "David Lee",
    title: "Senior Developer",
    image: Person2,
    content:
      "Suprema has streamlined our processes, significantly improving communication and project outcomes.",
  },
  {
    name: "Rachel Adams",
    title: "Marketing Director",
    image: Person3,
    content:
      "With Suprema, our team collaboration has never been smoother or more efficient.",
  },
  {
    name: "Mark Johnson",
    title: "Project Coordinator",
    image: Person4,
    content:
      "This tool has revolutionized our workflow, making project management incredibly easy.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <span className="testimonial-subtitle">😊 Testimonials</span>
      <h2 className="testimonial-title">What Our Users Say</h2>

      <div className="testimonial-marquee">
        <Marquee gradient={false} speed={40} pauseOnHover direction="right">
          {testimonials.concat(testimonials).map((item, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="testimonial-header">
                <div className="quote-icon">❝</div>
                <p className="testimonial-content">{item.content}</p>
              </div>
              <div className="testimonial-user">
                <div className="testimonial-user-info">
                  <strong>{item.name}</strong>
                  <p>{item.title}</p>
                </div>
                <img src={item.image} alt={item.name} />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TestimonialSection;
