import "./SkillCard.css";
import imgStar from "./star-black.svg";

function SkillCard({ img, alt, text, st1, st2, st3, st4, st5 }) {
  return (
    <div className="skillCard">
      <img className="skillImg" src={img} alt={alt} />
      <p>{text}</p>
      <div className="raiting">
        <img src={imgStar} alt="star" className={st1 ? "starGrey" : ""} />
        <img src={imgStar} alt="star" className={st2 ? "starGrey" : ""} />
        <img src={imgStar} alt="star" className={st3 ? "starGrey" : ""} />
        <img src={imgStar} alt="star" className={st4 ? "starGrey" : ""} />
        <img src={imgStar} alt="star" className={st5 ? "starGrey" : ""} />
      </div>
    </div>
  );
}

export default SkillCard;