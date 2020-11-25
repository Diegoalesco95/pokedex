import Card from 'components/Card';

const Pokemons = ({ pokemons }) => {
  return (
    <div className="grid gap-4 sm:justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {pokemons.results.map((pokemon) => (
        <Card url={pokemon.url} key={pokemon.name} />
      ))}
    </div>
  );
};

export default Pokemons;
