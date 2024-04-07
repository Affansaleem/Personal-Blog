import "../styles/About.scss";

function About() {
  const myImageUrl = "src/assets/naran1.jpg";
  const skills = [
    "Flutter",
    "React",
    "SQL",
    ".Net Core",
    "C++",
    "C#",
    "Java",
    "Tailwind",
    "React Router",
    "Api Integration",
    "Bloc",
  ];

  return (
    <section className="about-section">
      <div className="about-card">
        <img src={myImageUrl} alt="Your Name" className="profile-aboutimage" />
        <div className="info-container">
          <h2>M Affan Saleem</h2>
          <p className="job-title">Software Engineer</p>
          <ul className="list experience">
            <h3 className="bold">Experience</h3>
            <li>Pioneer Times System - Flutter Developer</li>
            <li>Coding Samurai - React Developer</li>
          </ul>
          <ul className="list education">
            <h3 className="bold">Education</h3>
            <li>Bachelor's - University of Central Punjab</li>
            <li>College - XYZ College</li>
          </ul>
          <ul className="list skills">
            <h3 className="bold">Skills</h3>
            {skills.map((skill) => (
              <li key={skill} className="skill-capsule">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
