import { useSelector } from 'react-redux';
import useFavorites from 'hooks/useFavorites';

import Card from 'components/Card';

const Pokemons = () => {
  const {
    data: { favorites },
  } = useSelector((state) => state);

  const { handlerFavorites, isFavorite } = useFavorites();

  return (
    <section className="py-4 flex flex-col justify-center items-center sm:mx-4">
      <h2 className="text-xl font-bold uppercase">Favorites</h2>
      {favorites.length > 0 ? (
        <div className="relative w-full my-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
          {favorites.map((pokemon) => (
            <Card
              pokemon={pokemon}
              key={pokemon.id}
              handlerFavorite={handlerFavorites}
              isFavorite={isFavorite(pokemon)}
            />
          ))}
        </div>
      ) : (
        <p className="my-4">There are no favorites yet</p>
      )}
    </section>
  );
};

export default Pokemons;