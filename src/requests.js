const key = process.env.API_KEY;
console.log(key);
const requests = {
	requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
	requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
	requestTrending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`,
	requestToprated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&page=1`,
	requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
	requestTvLatest: `https://api.themoviedb.org/3/tv/latest?api_key=${key}&language=en-US`,
};
export default requests;
