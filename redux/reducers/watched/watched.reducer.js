import * as types from './watched.actionTypes';

const initialState = {
  watched: [],
};

const watched = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_WATCHED:
      if (!state.watched.includes(action.payload)) {
        return {...state, watched: [...state.watched, action.payload]};
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default watched;
