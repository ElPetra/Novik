import SkillCard from "../SkillCard/SkillCard";
import "./Skills.css";
import photoshop from "./skills/ps.jpg";
import illustrator from "./skills/ai.jpg";
import effects from "./skills/ae.jpg";
import figma from "./skills/figma.png";

function Skills() {
  return (
    <section id="skills" className="skills">
        <h2>Skills</h2>
        <p className="descr">I work in such programs as</p>
        <div className="cards">
          <SkillCard img={photoshop} alt="Photoshop" text="Adobe Photoshop" />
          <SkillCard
            img={illustrator}
            alt="Adobe Illustrator"
            text="Adobe Illustrator"
            st4="1"
            st5="1"
          />
          <SkillCard
            img={effects}
            alt="Adobe After Effects"
            text="Adobe After Effects"
            st5="1"
          />
          <SkillCard img={figma} alt="Figma" text="Figma" st5="1" />
        </div>
      </section>
  );
}

export default Skills;
