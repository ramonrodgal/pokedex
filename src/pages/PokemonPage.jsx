import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MoveDisplay from "../components/MoveDisplay";

import getPokemonById from "../api/getPokemonById";
import getMoveByUrl from "../api/getMoveByUrl";

export default function PokemonPage() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState({});

  const [selectedMove, setSelectedMove] = useState({});
  const [selectedMoveUrl, setSelectedMoveUrl] = useState("");

  useEffect(() => {
    getPokemonById(id).then((response) => {
      setPokemon(response);
    });
  }, [id]);

  useEffect(() => {
    if (!selectedMoveUrl) return;
    getMoveByUrl(selectedMoveUrl)
      .then((response) => {
        setSelectedMove(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedMoveUrl]);

  const handleSelect = (event) => {
    console.log(event.target.value);
    setSelectedMoveUrl(event.target.value);
  };

  const handleClick = (event) => {
    navigate(-1);
  };

  if (Object.keys(pokemon).length === 0) {
    return;
  }

  return (
    <div>
      <button onClick={handleClick}>Go back</button>
      <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
      <h2>Pokemon number: {id}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
      <h3>Types:</h3>
      <ul>
        {pokemon.types.map((element) => {
          return <li>{element.type.name}</li>;
        })}
      </ul>
      <h3>Size:</h3>
      <ul>
        <li>weight: {parseInt(pokemon.weight) / 10} kg</li>
        <li>height: {parseInt(pokemon.height) * 10} cm</li>
      </ul>
      <h3>Stats:</h3>
      <ul>
        {pokemon.stats.map((element) => {
          return (
            <li>
              {element.stat.name} : {element.base_stat}
            </li>
          );
        })}
      </ul>
      <h3>Abilities</h3>
      <ul>
        {pokemon.abilities.map((element) => {
          return <li>{element.ability.name}</li>;
        })}
      </ul>
      <h3>Moves:</h3>
      <select onChange={handleSelect}>
        <option selected disabled>
          Select a move:
        </option>
        {pokemon.moves.map((element, index) => {
          return (
            <option key={index} value={element.move.url}>
              {element.move.name}
            </option>
          );
        })}
      </select>
      {Object.keys(selectedMove).length > 0 && (
        <MoveDisplay move={selectedMove} />
      )}
    </div>
  );
}
