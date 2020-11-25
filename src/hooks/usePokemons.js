import useSWR from 'swr';
import getPokemons from 'helpers/getPokemons';

function usePokemons(url) {
  const { data, error } = useSWR(url, getPokemons);

  return {
    pokemons: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default usePokemons;
