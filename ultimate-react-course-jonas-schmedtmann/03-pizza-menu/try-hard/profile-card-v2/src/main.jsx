import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.jpg" alt="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Avis</h1>
      <p>
        Hi, I'm Moh Oktavi Aziz Nugraha, you can call me Avis!. I'm from
        Indonesia, and right now I'm Trying to become a fullstack web developer
        and a flutter developer.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.skill} />
      ))}
    </ul>
  );
}
function Skill({ skillObj }) {
  const { skill, level, color } = skillObj;
  return (
    <li className="skill" style={{ backgroundColor: color }}>
      {skill} {level === "beginner" && "👶"}
      {level === "intermediate" && "👌"}
      {level === "advanced" && "💪"}
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
