import "./App.css";
import "../src/bijender.css";
import "../src/ravi.css";
import "../src/sumit.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WelcomeTo from "./components/WelcomeTo";
import Rarity from "./components/Rarity";

function App() {
  return (
    <div className="bg-black">
      <WelcomeTo />
      <Rarity/>
    </div>
  );
}

export default App;
