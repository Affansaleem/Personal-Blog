// App.jsx
import { useState } from "react";
import "../styles/Content.scss"; // Import your main stylesheet
import "../styles/Sidebar.scss";
import Header from "../components/Header";

function Content() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const articles = [
    {
      id: 1,
      title: "The Philosophy of Existentialism",
      content: "Exploring the concepts of existence, freedom, and choice.",
    },
    {
      id: 2,
      title: "Artificial Intelligence and Ethics",
      content:
        "Debating the ethical implications of AI and its impact on society.",
    },
    {
      id: 3,
      title: "Quantum Mechanics: The Strange World of Subatomic Particles",
      content:
        "Delving into the bizarre and counterintuitive nature of quantum physics.",
    },
    {
      id: 4,
      title: "The Neuroscience of Consciousness",
      content:
        "Investigating the biological basis of consciousness and self-awareness.",
    },
    {
      id: 5,
      title: "The Search for Extraterrestrial Intelligence (SETI)",
      content:
        "Examining efforts to detect signals from alien civilizations and the implications for humanity.",
    },
    {
      id: 6,
      title: "Philosophical Foundations of Democracy",
      content:
        "Exploring the principles and values that underpin democratic governance.",
    },
    {
      id: 7,
      title: "Ethical Dilemmas in Medical Practice",
      content:
        "Analyzing moral challenges faced by healthcare professionals in patient care.",
    },
    {
      id: 8,
      title: "The Psychology of Decision Making",
      content:
        "Understanding the cognitive processes and biases that influence human decision-making.",
    },
    {
      id: 9,
      title: "The Role of Women in Science Throughout History",
      content:
        "Highlighting the contributions of women scientists and the challenges they faced.",
    },
    {
      id: 10,
      title: "The Philosophy of Mind: Dualism vs. Materialism",
      content:
        "Debating different theories of mind and their implications for understanding consciousness.",
    },
    {
      id: 11,
      title: "The Future of Space Exploration",
      content:
        "Speculating on the possibilities and challenges of humanity's expansion into the cosmos.",
    },
    {
      id: 12,
      title: "Environmental Ethics and Sustainability",
      content:
        "Examining moral principles and practices concerning the environment and ecological balance.",
    },
  ];

  const renderArticleCard = (article) => (
    <li className="article-card" key={article.title}>
      <h2>{article.title}</h2>
      <p className="article-excerpt">{article.content}</p>

      <a href={article.link} className="article-link">
        Read More
      </a>
    </li>
  );
  return (
    <div className="app-container">
      <Header toggleSidebar={toggleSidebar} />
      <div className={`container ${isOpen ? "container--sidebar-open" : ""}`}>
        <ul className="article-list">{articles.map(renderArticleCard)}</ul>
      </div>
      <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isOpen && "X"}
        </button>
      </aside>
    </div>
  );
}

export default Content;
