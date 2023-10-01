import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
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
      <Skill skillName="HTML + CSS" emoji="👌" backgroundColor="red" />
      <Skill skillName="JavaScript" emoji="👌" backgroundColor="yellow" />
      <Skill skillName="React" emoji="👌" backgroundColor="green" />
      <Skill skillName="Strapi" emoji="👌" backgroundColor="blue" />
    </ul>
  );
}
function Skill(props) {
  return (
    <li className="skill" style={{ backgroundColor: props.backgroundColor }}>
      {props.skillName} {props.emoji}
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
