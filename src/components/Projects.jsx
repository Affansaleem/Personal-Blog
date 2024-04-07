import "../styles/Projects.scss"; // Import the Sass file

const ProjectCard = ({ title, description, technologies, link, imageUrl }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />{" "}
      {/* Add image */}
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <ul className="project-technologies">
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <a
        href={link}
        className="project-link"
        target="_blank"
        rel="noreferrer noopener"
      >
        View Project
      </a>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Attendance Mobile Application",
      description:
        "A fully response and interactive mobile applicaion. You can manage your whole attendance system online.",
      technologies: ["Flutter", "Dart", "BLOC"],
      link: "https://github.com/Affansaleem/Pioneer-Final-Version",
      imageUrl: "src/assets/flutterapplication.jpeg", // Replace with your image URL
    },
    {
      title: "Use PopCorn",
      description:
        "A React web application where you can search, delete and add your favourite movies.",
      technologies: ["React.js", "javascript", "Tailwind CSS", "Api Fetching"],
      link: "https://github.com/Affansaleem/usepopcorn-app",
      imageUrl: "src/assets/usePopcorn.PNG", // Replace with your image URL
    },
    {
      title: "World Wise",
      description:
        "Another React web application which provide you to add your favoutie locations from map, pinpoint your current location, search countries and even cities where you want to visit and alsohave authentication added!",
      technologies: [
        "React+Vite",
        "Leaflet",
        "React Router",
        "Country flag",
        "Authentication",
      ],
      link: "https://github.com/Affansaleem/the-wild-oasis",
      imageUrl: "src/assets/worldwise.PNG", // Replace with your image URL
    },
    {
      title: "Fast Pizza",
      description:
        "A React Pizza Application to place your online order do billing and confirm your order finally!",
      technologies: ["React.js", "Css", "React Router"],
      link: "https://github.com/Affansaleem/fast-react-pizza",
      imageUrl: "src/assets/fastreactpizza.PNG", // Replace with your image URL
    },
    {
      title: "Todo List",
      description:
        "A simple but responsive Todo-List application which main function is its real world interactive api created with .NET Core to manage data realtime.",
      technologies: ["React.js", "Javascript", "Tailwind", ".NetCore"],
      link: "https://github.com/Affansaleem/.Net-Core-Web-Api-Todo-List-React-Application",
      imageUrl: "src/assets/todolist.PNG", // Replace with your image URL
    },
  ];

  return (
    <section className="projects-container">
      <h2 className="section-title">My Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
