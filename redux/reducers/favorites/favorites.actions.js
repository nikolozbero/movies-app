import * as types from './favorites.actionTypes';

export const setFavoriteMovie = favorite => {
  return async dispatch => {
    try {
      dispatch({type: types.ADD_FAVORITE_MOVIE, favorite: favorite});
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeFavoriteMovie = favoriteId => {
  return async dispatch => {
    try {
      dispatch({type: types.REMOVE_FAVORITE_MOVIE, imdbID: favoriteId});
    } catch (error) {
      console.log(error);
    }
  };
};
