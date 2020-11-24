import axios from 'axios';

async function getPokemons(endpoint) {
  const { data } = await axios.get(`${process.env.API_URL}/${endpoint}`);
  return data;
}

export default getPokemons;
