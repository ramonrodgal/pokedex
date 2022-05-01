import axios from "axios";

export default function getMoveByUrl(url){
  console.log("url =", url);
  return axios.get(url).then(response => {
    console.log(response.data);
    return response.data;
  })
}
