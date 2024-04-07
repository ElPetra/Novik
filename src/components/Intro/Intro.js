import "./Intro.css";
import burger from "../../icons/burger.svg";
import mainphoto from "../../img/main.jpg";

function Intro() {
  return (
    <div className="underHeader">
      <div className="topContent">
        <div className="maininfo">
          <h1 id="home">
            Denis
            <br />
            Novik
          </h1>
          <p>UX | UI designer 24 years old, Minsk</p>
        </div>
        <button className="burger">
          <img src={burger} alt="burger-btn" />
        </button>
      </div>
      <img className="mainphoto" src={mainphoto} alt="Мое фото" />
    </div>
  );
}

export default Intro;
