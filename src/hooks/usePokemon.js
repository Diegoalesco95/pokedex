import useSWR from 'swr';
import getPokemon from 'helpers/getPokemon';

function usePokemon(url) {
  const { data, error } = useSWR(url, getPokemon);

  return {
    pokemon: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default usePokemon;
