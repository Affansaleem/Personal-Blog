import "../styles/Experience.scss";

const ExperienceItem = ({
  company,
  title,
  duration,
  description,
  keySkills,
}) => {
  return (
    <div className="experience-item">
      <h3 className="experience-company">{company}</h3>
      <h4 className="experience-title">{title}</h4>
      <p className="experience-duration">{duration}</p>
      <p className="experience-description">{description}</p>
      <ul className="experience-skills">
        {keySkills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: "Pioneer Times System",
      title: "Software Engineer",
      duration: "Jan 2021 - Dec 2023",
      description:
        "Developed and maintained web applications using React, Node.js, and PostgreSQL. Collaborated with designers and product managers to implement features and user experiences.",
      keySkills: ["React", "JavaScript", "Node.js", "PostgreSQL"],
    },
  ];

  return (
    <section className="experience-container">
      <h2 className="section-title">Experience</h2>
      <div className="experience-list">
        {experiences.map((experience) => (
          <ExperienceItem key={experience.company} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
