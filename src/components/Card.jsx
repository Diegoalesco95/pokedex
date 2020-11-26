import Image from 'next/image';
import { MdFavorite } from 'react-icons/md';

import typeColor from 'helpers/typeColor';
import useFavorites from 'hooks/useFavorites';
import usePokemon from 'hooks/usePokemon';
import CardSkeleton from './CardSkeleton';

const Card = ({ pokemon, url }) => {
  const { handlerFavorites, isFavorite } = useFavorites(pokemon);

  let pokeData = { isLoading: true };

  if (url) {
    pokeData = usePokemon(url);
  }

  if (url && pokeData.isLoading) {
    return <CardSkeleton />;
  }

  const pokemonData = pokemon || pokeData.pokemon;

  const image = pokemonData.sprites.other.dream_world.front_default;

  const isHiddenAbility = pokemonData.abilities.find((element) => {
    return element.is_hidden === true;
  });

  return (
    <div
      className={`max-w-xs h-96 p-4 mx-auto rounded-lg shadow-2xl flex flex-col items-center opacity-0 animate-fadeIn bg-gradient-to-r ${typeColor(
        pokemonData.types[0].type.name
      )}`}
    >
      <div className="h-full w-full overflow-hidden">
        <div className="w-full py-2 text-center bg-black bg-opacity-60 rounded-t-md">
          <Image src={image} width="100" height="100" />
        </div>
        <div className="relative w-full h-56 p-4 rounded-b-md bg-white bg-opacity-60 flex flex-col items-center">
          <button
            type="button"
            className="absolute -top-4 left-4 focus:outline-none"
            onClick={() => handlerFavorites(pokemonData)}
          >
            <MdFavorite
              className={`text-4xl ${
                isFavorite(pokemonData) ? 'text-red-500' : 'text-gray-100'
              } `}
            />
          </button>
          <span
            className={`absolute z-10 -top-4 right-4 w-20 p-1 text-sm text-center tracking-widest text-gray-100 uppercase rounded-md bg-gradient-to-r ${typeColor(
              pokemonData.types[0].type.name
            )}`}
          >
            {pokemonData.types[0].type.name}
          </span>
          <h2 className="text-xl capitalize font-bold">{pokemonData.name}</h2>
          <div className="grid grid-cols-1 gap-y-0">
            {pokemonData.stats.map((stat) => (
              <div key={stat.stat.name} className="grid grid-cols-2 gap-x-4">
                <p className="text-sm font-light text-right capitalize">
                  {stat.stat.name}
                </p>
                <span className="text-sm">{stat.base_stat}</span>
              </div>
            ))}
          </div>
          <div className="w-full grid grid-cols-2">
            <div>
              <span className="text-xs uppercase">Ability</span>
              <p className="text-xs capitalize font-bold">
                {pokemonData.abilities[0].ability.name}
              </p>
            </div>
            <div className="justify-self-end">
              <span className="text-xs uppercase">Hidden ability</span>
              <p className="text-xs capitalize font-bold text-right">
                {isHiddenAbility ? isHiddenAbility.ability.name : ''}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
