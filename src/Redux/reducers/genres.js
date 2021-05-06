import {
  GET_GENRES_ATTEMPING,
  GET_GENRES_FAILED,
  GET_GENRES_SUCCESS,
} from '../actions/Types';

const INITIAL_STATE = {
  loading: false,
  error: null,
  genres: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_GENRES_ATTEMPING:
      return {...INITIAL_STATE,loading: true};

    case GET_GENRES_SUCCESS:
      return {loading: false, genres: action.payload};

    case GET_GENRES_FAILED:
      return {loading: false, error: action.payload};

    default:
      return state;
  }
};
