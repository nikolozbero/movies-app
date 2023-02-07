import * as types from './favorites.actionTypes';

const initialState = {
  movies: [],
  isFavorite: false,
};

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_FAVORITE_MOVIE:
      if (!state.movies.find(item => item.id === action.favorite.id)) {
        return {
          ...state,
          movies: [...state.movies, action.favorite],
          isFavorite: true,
        };
      } else {
        return state;
      }
    case types.REMOVE_FAVORITE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(item => item.id !== action.imdbID),
      };
    default:
      return state;
  }
};

export default favorites;
