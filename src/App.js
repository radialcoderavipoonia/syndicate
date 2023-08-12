import "./App.css";
import "../src/bijender.css";
import "../src/ravi.css";
import "../src/sumit.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WelcomeTo from "./components/WelcomeTo";
// import MyNav from "./components/MyNav";
import MyHero from "./components/MyHero";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Game from "./components/Game";
import Preloader from "./components/Preloader";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
    <BackToTop/>
    <Preloader/>
      <MyHero />
      <WelcomeTo />
      <Roadmap/>
      <Team/>
      <Game/>
    </>
  );
}

export default App;
