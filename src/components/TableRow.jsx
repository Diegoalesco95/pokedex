import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SET_POKEMON } from 'state/types';

import usePokemon from 'hooks/usePokemon';

const TableRow = ({ url, selected }) => {
  const { pokemon, isLoading } = usePokemon(url);

  let isSelected;

  if (!isLoading) {
    isSelected = selected.id === pokemon.id;
  }

  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch({ type: SET_POKEMON, payload: pokemon });
  }, [pokemon]);

  return (
    <tr
      className={`text-center cursor-pointer ${
        isSelected ? 'bg-blue-200' : ''
      } hover:bg-gray-200`}
      onClick={handleClick}
    >
      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 capitalize">
        {isLoading ? 'Loading...' : pokemon.name}
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
        {isLoading ? 'Loading...' : pokemon.weight / 10}
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
        {isLoading ? 'Loading...' : pokemon.height * 10}
      </td>
    </tr>
  );
};

export default TableRow;
