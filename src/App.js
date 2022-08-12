import "./App.css";

import Monsters from "./components/monsters";

import { monsters } from "./data/monsters";

function App() {
  return (
    <>
      <h1>Pokemon Trading Cards</h1>

      <Monsters monsters={monsters} />
    </>
  );
}

export default App;
