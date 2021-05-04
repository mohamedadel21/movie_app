import {
  GET_MOVIES_ATTEMPING,
  GET_MOVIES_FAILED,
  GET_MOVIES_SUCCESS,
} from '../actions/Types';

const INITIAL_STATE = {
  loading: false,
  error: null,
  movies: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MOVIES_ATTEMPING:
      return {...INITIAL_STATE,loading: true};

    case GET_MOVIES_SUCCESS:
      return {loading: false, movies: action.payload};

    case GET_MOVIES_FAILED:
      return {loading: false, error: action.payload};

    default:
      return state;
  }
};
