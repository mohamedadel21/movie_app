export const API_KEY = '4f298a53e552283bee957836a529baec';
export const API_BaseURL = `https://api.themoviedb.org/3`;

const getMovies = (type) => {
	return `${API_BaseURL}/movie/${type}?api_key=${API_KEY}`
}
export const ServiceURL = {
  getMovies,
};
