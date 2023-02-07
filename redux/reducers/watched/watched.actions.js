import * as types from './watched.actionTypes';

export const setWatched = watched => {
  return async dispatch => {
    try {
      dispatch({type: types.ADD_TO_WATCHED, payload: watched});
    } catch (error) {
      console.log(error);
    }
  };
};
