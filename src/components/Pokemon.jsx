import usePokemons from 'hooks/usePokemon';

const Pokemon = ({ url }) => {
  const { pokemon, isLoading } = usePokemons(url);

  if (isLoading) return <p>Loading</p>;

  return <div className="border p-4">{pokemon.name}</div>;
};

export default Pokemon;
