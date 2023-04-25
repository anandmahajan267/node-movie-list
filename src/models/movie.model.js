const fs = require('fs')
const {
  v1: uuidv1,
} = require('uuid');
const config = require('../config')

const saveMovieData = (data) => {
  const stringifyData = JSON.stringify(data)
  fs.writeFileSync(config.getMovieDataPath(), stringifyData)
}

const getMovies = async () => {
  const jsonData = fs.readFileSync(config.getMovieDataPath())
  return JSON.parse(jsonData)
};

const getFilterMovies = async (keyword) => {
  const movies = await getMovies()
  return movies.filter(word => word.name.toLowerCase().indexOf(keyword.toLowerCase().trim()) > -1)

}
const getMovieById = async (id) => {
  const existMovies = await getMovies()
  return existMovies.find(movie => movie.id === id);

}

const addMovie = async (movieData) => {
  const newMovieData = { ...movieData, id: uuidv1() }
  const existMovies = await getMovies()
  existMovies.push(newMovieData)
  saveMovieData(existMovies)

  return newMovieData;
};

const updateMovie = async (movieData, id) => {
  const existMovies = await getMovies()
  const updatedMovieData = { ...getMovieById(id), ...movieData }

  const movieIndex = existMovies.findIndex((movie => movie.id == id));
  existMovies[movieIndex] = updatedMovieData
  saveMovieData(existMovies)

  return updatedMovieData;
};

const daleteMovie = async (id) => {
  const existMovies = await getMovies()


  const movieIndex = existMovies.findIndex((movie => movie.id == id));
  existMovies.splice(movieIndex, 1);
  saveMovieData(existMovies)

  return true;
};

module.exports = {
  getMovies,
  addMovie,
  updateMovie,
  daleteMovie,
  getMovieById,
  getFilterMovies
};
