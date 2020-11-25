import axios from 'axios';

async function getPokemons(url) {
  const { data } = await axios.get(url);
  return data;
}

export default getPokemons;
