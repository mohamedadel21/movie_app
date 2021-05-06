import {
  GET_MOVIE_CREDITS_ATTEMPING,
  GET_MOVIE_CREDITS_FAILED,
  GET_MOVIE_CREDITS_SUCCESS
} from '../actions/Types';

const INITIAL_STATE = {
  loading: false,
  error: null,
  credits: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MOVIE_CREDITS_ATTEMPING:
      return {...INITIAL_STATE,loading: true};

    case GET_MOVIE_CREDITS_SUCCESS:
      return {loading: false, credits: action.payload};

    case GET_MOVIE_CREDITS_FAILED:
      return {loading: false, error: action.payload};

    default:
      return state;
  }
};
