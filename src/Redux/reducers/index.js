import {combineReducers} from 'redux';
import movies from './movies';
import genres from './genres';
import movieCredits from './movieCredits';

export default combineReducers({
  movies,
  genres,
  movieCredits
});
