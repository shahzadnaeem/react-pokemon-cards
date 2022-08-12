import "./monster.css";

import Monster from "./monster";

export default function Monsters({ monsters }) {
  return (
    <ul class="cards">
      {monsters.map((monster) => {
        return <Monster key={monster.name} monster={monster} />;
      })}
    </ul>
  );
}
