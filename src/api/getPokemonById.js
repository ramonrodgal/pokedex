import axios from "axios";

export default function getPokemonById(id){
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

  return axios.get(url).then(response => {
    console.log(response);
    return response.data;
  })
}
