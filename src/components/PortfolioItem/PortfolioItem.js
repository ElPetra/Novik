import "./PortfolioItem.css";

function PortfolioItem({ img, alt, text }) {
  return (
    <>
      <a href="#">
        <img src={img} alt={alt} />
      </a>
      <p>
        <a href="#" className="portfolio_link">
          {text}
        </a>
      </p>
    </>
  );
}

export default PortfolioItem;
