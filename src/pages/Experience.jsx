import React from "react";
import "./Experience.css";

const experiences = [
  {
    company: "Autonmis",
    logo: "/autonmis.jpeg", // Replace with actual logo if available
    location: "Remote",
    role: "SDE Intern",
    duration: "October 2024 - April 2025",
    responsibilities: [
      "Developed APIs and frontend components using Next.js and TypeScript, ensuring a scalable and maintainable codebase.",
      "Integrated data pipelines into the frontend, enabling users to transfer hierarchical data between sources by adding multiple connectors for databases and APIs.",
      "Implemented Apache Airflow for pipeline scheduling and automation, optimizing data workflows for seamless processing.",
    ],
    link: "https://www.linkedin.com/company/autonmis",
    skills: [
      "Next.js",
      "TypeScript",
      "Socket",
      "Python",
      "FastAPI",
      "Airflow",
      "ETL",
      "Supabase",
      "EC2",
      "S3",
    ],
  },
  {
    company: "Stuneckt",
    logo: "/stuneckt.jpeg", // Replace with actual logo if available
    location: "Remote",
    role: "Frontend Intern",
    duration: "June 2024 - September 2024",
    responsibilities: [
      "Developed a social media web application using Next.js, implementing core features like post creation, user authentication, and comments.",
      "Integrated a rich text editor for advanced content formatting, enhancing user engagement and post creation.",
      "Worked with Retool for content management, streamlining the management of Stuneckt’s events and internships.",
    ],
    link: "https://www.linkedin.com/company/stuneckt",
    skills: ["Next.js", "React.js", "TypeScript", "MongoDB", "Retool", "S3"],
  },
];

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience-header">
        <h2>Work Experience 💼</h2>
      </div>

      <div className="experience-card-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-top">
              <a href={exp.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="experience-logo"
                />
              </a>
              <div className="experience-info">
                <div className="experience-meta">
                  <span className="experience-location">{exp.location}</span>
                  <span className="experience-duration">{exp.duration}</span>
                </div>
                <h3 className="experience-role">{exp.role}</h3>
              </div>
            </div>
            <ul className="experience-responsibilities">
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <div className="experience-skills">
              {exp.skills.map((skill, idx) => (
                <span key={idx}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Experience };
