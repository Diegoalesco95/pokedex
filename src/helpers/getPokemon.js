import axios from 'axios';

async function getPokemon(url) {
  const { data } = await axios.get(url);
  return data;
}

export default getPokemon;
