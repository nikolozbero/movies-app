import * as types from './favorites.actionTypes';

const initialState = {
  movies: [],
  isFavorite: false,
};

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_FAVORITE_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.favorite],
        isFavorite: true,
      };
    case types.REMOVE_FAVORITE_MOVIE:
      return {};
    default:
      return state;
  }
};

export default favorites;
