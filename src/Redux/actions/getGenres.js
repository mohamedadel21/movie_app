import {
  GET_GENRES_ATTEMPING,
  GET_GENRES_FAILED,
  GET_GENRES_SUCCESS,
} from './Types';
import axios from 'axios';
import {ServiceURL} from '../../api/api';

export const getGenres = () => {
  return async dispatch => {
    dispatch({
      type: GET_GENRES_ATTEMPING,
    });

    try {
      const {data} = await axios(ServiceURL.getGenres, {method: 'GET'});
      dispatch({type: GET_GENRES_SUCCESS, payload: data.genres});
    } catch (error) {
      dispatch({
        type: GET_GENRES_FAILED,
        payload: error.response.data.errors[0],
      });
    }
  };
};
