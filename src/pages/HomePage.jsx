import {useState, useEffect} from 'react';
import Header from "../components/Header";
import getAllPokemons from "../api/getAllPokemons";
import getIdFromUrl from '../utils/getIdFromUrl';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  const [pokemons, setPokemons] = useState([])
  const [selectedId, setSelectedId] = useState("");

  console.log("pokemons in component = ", pokemons)

  useEffect(()=>{
    getAllPokemons().then(response => {
      setPokemons(response);
    });
  }, [])

  const handleSelect = (event) => {
    console.log("selected")
    setSelectedId(event.target.value);
  }

  const handleClick = (event) => {
    if(!selectedId) return;
    navigate(`/pokemon/${selectedId}`);
  }

  return (
    <div>
      <Header title={"Pokedex React"}/>
      <select onChange={handleSelect}>
        <option selected disabled>Select a pokemon</option>
        {pokemons.map((pokemon, index) => {
          return <option key={index} value={getIdFromUrl(pokemon.url)}>{pokemon.name}</option>
        })}
      </select>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

