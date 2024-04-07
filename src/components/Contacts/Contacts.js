import imgIn from "../../icons/in.svg"
import imgInstagram from "../../icons/instagram.svg"
import imgBehance from "../../icons/behance.svg"
import imgDribble from "../../icons/dribble.svg"
import "./Contacts.css";

function Contacts({ title }) {
  return (
    <section id="contacts" className="contacts">
      <h2>{title}</h2>
      <p>
        Want to know more or just chat? <br /> You are welcome!
      </p>
      <button>Send message</button>
      <div className="social">
        <a href="#">
          <img src={imgIn} alt="LinkedIn" />
        </a>
        <a href="#">
          <img src={imgInstagram} alt="Instagram" />
        </a>
        <a href="#">
          <img src={imgBehance} alt="Behince" />
        </a>
        <a href="#">
          <img src={imgDribble} alt="Dribble" />
        </a>
      </div>
    </section>
  );
}

export default Contacts;