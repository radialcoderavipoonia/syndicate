import "./App.css";
import "../src/bijender.css";
import "../src/ravi.css";
import "../src/sumit.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WelcomeTo from "./components/WelcomeTo";
import MyNav from "./components/MyNav";
import MyHero from "./components/MyHero";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Rarity from "./components/Rarity";
import RoyaltyStash from "./components/RoyaltyStash";

function App() {
  return (
    <div className="bg-black">
      <MyHero />
      <WelcomeTo />
      <Roadmap/>
      <Team />
      <Rarity />
      <RoyaltyStash/>
    </div>
  );
}

export default App;
