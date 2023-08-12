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
import Rarity from "./components/Rarity";
import RoyaltyStash from "./components/RoyaltyStash";
import Game from "./components/Game";
import MyFooter from "./components/MyFooter";
import BackToTop from "./components/BackToTop";
import Preloader from "./components/Preloader";

function App() {
  return (
    <div className="bg-black">
      <Preloader />
      <BackToTop />
      <MyHero />
      <WelcomeTo />
      <Roadmap />
      <Team />
      <Rarity />
      <RoyaltyStash />
      <Game />
      <MyFooter />
    </div>
  );
}

export default App;
