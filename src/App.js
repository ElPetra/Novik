import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import PortfolioContent from "./components/PortfolioContent/PortfolioContent";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";


import './App.css';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <AboutMe title={"About me"} />
      <Skills title={"Skills"} />
      <PortfolioContent title={"Portfolio"} />
      <Contacts title={"Contacts"} />
      <Footer />
    </>
  );
}

export default App;
