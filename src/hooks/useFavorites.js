import { useSelector, useDispatch } from 'react-redux';
import { SET_FAVORITE, DELETE_FAVORITE } from 'state/types';

const useFavorites = () => {
  const dispatch = useDispatch();

  const {
    data: { favorites },
  } = useSelector((state) => state);

  const isFavorite = (favorite) => {
    return favorites.includes(favorite);
  };

  const deleteFavorite = (index) => {
    const newFavorites = favorites;
    newFavorites.splice(index, 1);
    return newFavorites;
  };

  const findFavoriteIndex = (favorite) => {
    const index = favorites.findIndex((elm) => elm.id === favorite.id);
    if (index > -1) {
      return deleteFavorite(index);
    }
    return index;
  };

  const handlerFavorites = (favorite) => {
    if (isFavorite(favorite)) {
      dispatch({
        type: DELETE_FAVORITE,
        payload: findFavoriteIndex(favorite),
      });
    } else {
      dispatch({ type: SET_FAVORITE, payload: favorite });
    }
  };

  return { handlerFavorites, isFavorite };
};

export default useFavorites;
