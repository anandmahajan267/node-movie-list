const validations = require('../validations/validateInputValues');
const movie = require('../models/movie.model');

const getMovies = async () => {
  const users = await movie.getMovies();
  return { type: null, message: users };
};

const addMovie = async (movieData) => {
  //  
  const error = await validations.validateNewMovie(movieData);
  if (error.type) return error;

  const users = await movie.addMovie(movieData);

  return { type: null, message: users };
};

const updateMovie = async (movieData, id) => {
  //  
  const error = await validations.validateNewMovie(movieData);
  if (error.type) return error;


  const doesMovieExist = await movie.getMovieById(id);
  if (!doesMovieExist) return { type: 'NOT_FOUND', message: 'Movie not found.' };

  
  const users = await movie.updateMovie(movieData, id);

  return { type: null, message: users };
};

const daleteMovie = async (id) => {

  const doesMovieExist = await movie.getMovieById(id);
  if (!doesMovieExist) return { type: 'NOT_FOUND', message: 'Movie not found.' };

  const users = await movie.daleteMovie(id);

  return { type: null, message: users };
};

const getMovie = async (id) => {

  const movieDetails = await movie.getMovieById(id);
  if (!movieDetails) return { type: 'NOT_FOUND', message: 'Movie not found.' };


  return { type: null, message: movieDetails };
};

module.exports = {
  getMovies,
  addMovie,
  updateMovie,
  daleteMovie,
  getMovie,
};
