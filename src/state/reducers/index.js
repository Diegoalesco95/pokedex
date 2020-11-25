import * as types from 'state/types';

const pokemonsReducer = (state, { type, payload }) => {
  switch (type) {
    case types.SET_POKEMONS:
      return {
        ...state,
        data: {
          ...state.data,
          pokemons: payload,
        },
      };
    case types.SET_POKEMON:
      return {
        ...state,
        data: {
          ...state.data,
          pokemon: payload,
        },
      };
    case types.SET_FAVORITE:
      return {
        ...state,
        data: {
          ...state.data,
          favorites: [...state.data.favorites, payload],
        },
      };
    case types.DELETE_FAVORITE:
      return {
        ...state,
        data: {
          ...state.data,
          favorites: payload,
        },
      };
    default:
      return state;
  }
};

export default pokemonsReducer;
