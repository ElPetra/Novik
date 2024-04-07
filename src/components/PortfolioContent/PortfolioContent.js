import "./PortfolioContent.css";
import imgLevis from "../../img/portfolio/levis.jpg";
import imgReebok from "../../img/portfolio/reebok.jpg";
import imgBraun from "../../img/portfolio/braun.jpg";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

function PortfolioContent({ title }) {
  return (
    <section className="portfolio grey" id="portfolio">
      <h2>{title}</h2>
      <PortfolioItem
        img={imgLevis}
        alt={"сайт компании levis"}
        text={"Online fashion store - Homepage"}
      />
      <PortfolioItem
        img={imgReebok}
        alt={"сайт компании reebok"}
        text={"Reebok Store - Concept"}
      />
      <PortfolioItem
        img={imgBraun}
        alt={"сайт компании braun"}
        text={"Braun Landing Page - Concept"}
      />
    </section>
  );
}

export default PortfolioContent;
