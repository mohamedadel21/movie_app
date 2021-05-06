import {
  GET_MOVIE_CREDITS_ATTEMPING,
  GET_MOVIE_CREDITS_FAILED,
  GET_MOVIE_CREDITS_SUCCESS
} from './Types';
import axios from 'axios';
import {ServiceURL} from '../../api/api';

export const getMovieCredits = (id) => {
  return async dispatch => {
    dispatch({
      type: GET_MOVIE_CREDITS_ATTEMPING,
    });

    try {
      const {data} = await axios(ServiceURL.getCredits(id), {method: 'GET'});
      dispatch({type: GET_MOVIE_CREDITS_SUCCESS, payload: data.cast});
    } catch (error) {
      dispatch({
        type: GET_MOVIE_CREDITS_FAILED,
        payload: error.response.data.errors[0],
      });
    }
  };
};
