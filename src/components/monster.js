import "./monster.css";

export default function Monster({ monster }) {
  return (
    <li className="card" key={monster.name}>
      <h2>{monster.name}</h2>
      <img
        className="card-img"
        alt={monster.name}
        src={monster.sprites.other["official-artwork"].front_default}
      />
      <ul className="card-stats">
        {monster.stats.map((stat) => {
          return (
            <li key={stat.stat.name}>
              {stat.stat.name.toUpperCase() + ":" + stat.base_stat}
            </li>
          );
        })}
      </ul>
    </li>
  );
}
