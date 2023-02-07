import * as types from './watched.actionTypes';

const initialState = {
  watched: [],
};

const watched = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_WATCHED:
      return {...state, watched: [...state.watched, action.payload]};
    default:
      return state;
  }
};

export default watched;
