import * as types from 'state/types';

export const setPokemons = (payload) => ({
  type: types.SET_POKEMONS,
  payload,
});

export const setPokemon = (payload) => ({
  type: types.SET_POKEMON,
  payload,
});
