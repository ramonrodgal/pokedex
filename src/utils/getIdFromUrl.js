export default function getIdFromUrl(url){
  let id = ""

  for(let i = url.length - 2; i >= 0; i--){
    if(url[i] === "/"){
      break;
    }
    id += url[i];
  }
 return id.split("").reverse().join("");
}
