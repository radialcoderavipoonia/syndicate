import "./App.css";
import "../src/bijender.css";
import "../src/ravi.css";
import "../src/sumit.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WelcomeTo from "./components/WelcomeTo";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";

function App() {
  return (
    <>
      <WelcomeTo />
      <Roadmap/>
      <Team/>
    </>
  );
}

export default App;
