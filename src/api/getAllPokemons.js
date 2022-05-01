import axios from "axios";

export default function getAllPokemons(){
  console.log("getAllpokemons called");

  const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151";

  return axios.get(url).then(response => {
    return response.data.results;
  })
}
