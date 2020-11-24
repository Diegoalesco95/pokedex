import Pokemon from 'components/Pokemon';

const Pokemons = ({ pokemons }) => {
  return (
    <div>
      {pokemons.results.map((pokemon) => (
        <Pokemon url={pokemon.url} key={pokemon.name} />
      ))}
    </div>
  );
};

export default Pokemons;
