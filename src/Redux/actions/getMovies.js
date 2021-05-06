import {
  GET_MOVIES_ATTEMPING,
  GET_MOVIES_FAILED,
  GET_MOVIES_SUCCESS,
} from './Types';
import axios from 'axios';
import {ServiceURL} from '../../api/api';

export const getMovies = query => {
  return async dispatch => {
    dispatch({
      type: GET_MOVIES_ATTEMPING,
    });

    try {
      const {data} = await axios(ServiceURL.getMovies(query), {method: 'GET'});
      dispatch({type: GET_MOVIES_SUCCESS, payload: data.results});
    } catch (error) {
      dispatch({
        type: GET_MOVIES_FAILED,
        payload: error.response.data.errors[0],
      });
    }
  };
};
