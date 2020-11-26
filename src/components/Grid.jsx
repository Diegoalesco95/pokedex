import { useSelector } from 'react-redux';

import Card from 'components/Card';

const Grid = () => {
  const {
    data: { pokemons },
  } = useSelector((state) => state);

  return (
    <section className="relative w-full my-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {pokemons.results.map((poke) => (
        <Card key={poke.name} url={poke.url} />
      ))}
    </section>
  );
};

export default Grid;
