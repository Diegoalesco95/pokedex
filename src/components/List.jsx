import { useSelector } from 'react-redux';
import useFavorites from 'hooks/useFavorites';

import Card from 'components/Card';
import CardSkeleton from 'components/CardSkeleton';
import TableRow from 'components/TableRow';

const Pokemons = () => {
  const {
    data: { pokemons, pokemon },
  } = useSelector((state) => state);

  const { handlerFavorites, isFavorite } = useFavorites();

  const isPokemon = Object.keys(pokemon).length > 0;

  return (
    <section className="py-4 flex flex-col sm:flex-row sm:mx-4">
      <div className="relative  w-full h-96 mb-4 sm:w-1/2 lg:w-3/5 xl:w-3/4 overflow-auto shadow border-b border-gray-200 rounded-lg">
        <table className="relative min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th
                scope="col"
                className="sticky top-0 px-4 py-2 bg-indigo-500 text-center text-xs font-medium text-gray-100 uppercase tracking-wider lg:text-base"
              >
                Name
              </th>
              <th
                scope="col"
                className="sticky top-0 px-4 py-2 bg-indigo-500 text-center text-xs font-medium text-gray-100 uppercase tracking-wider lg:text-base"
              >
                Weight (kg)
              </th>
              <th
                scope="col"
                className="sticky top-0 px-4 py-2 bg-indigo-500 text-center text-xs font-medium text-gray-100 uppercase tracking-wider lg:text-base"
              >
                Height (cm)
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pokemons.results.map((poke) => (
              <TableRow url={poke.url} key={poke.name} selected={pokemon} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="relative sm:mx-4 sm:w-1/2 lg:w-2/5 xl:w-1/4">
        {isPokemon ? (
          <Card
            pokemon={pokemon}
            handlerFavorite={handlerFavorites}
            isFavorite={isFavorite(pokemon)}
          />
        ) : (
          <CardSkeleton />
        )}
      </div>
    </section>
  );
};

export default Pokemons;
