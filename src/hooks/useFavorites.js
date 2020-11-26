import { useSelector, useDispatch } from 'react-redux';
import { SET_FAVORITE, DELETE_FAVORITE } from 'state/types';

const useFavorites = () => {
  const dispatch = useDispatch();

  const {
    data: { favorites },
  } = useSelector((state) => state);

  const isFavorite = (favorite) => {
    return favorites.find((elem) => elem.id === favorite.id);
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

  const handlerFavorites = (fav) => {
    if (isFavorite(fav)) {
      dispatch({
        type: DELETE_FAVORITE,
        payload: findFavoriteIndex(fav),
      });
    } else {
      dispatch({ type: SET_FAVORITE, payload: fav });
    }
  };

  return { handlerFavorites, isFavorite };
};

export default useFavorites;
