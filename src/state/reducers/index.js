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
    default:
      return state;
  }
};

export default pokemonsReducer;
