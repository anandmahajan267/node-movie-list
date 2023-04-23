
const movieService = require('../services/movie.service');
const errorMap = require('../utils/errorMap');

const error500message = 'Internal error';

const getMovies = async (_req, res) => {
  try {
    const { message } = await movieService.getMovies();

    return res.status(200).json(message);
  } catch (err) {
    return res.status(500).json({ message: error500message });
  }
};

const addMovie = async (req, res) => {
  try {
    const movieData = req.body
    const { type, message } = await movieService.addMovie(movieData);
    if (type) return res.status(errorMap.mapError(type)).json({ message });
    return res.status(201).json(message);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const updateMovie = async (req, res) => {
  try {
    const id = req.params.id
    const movieData = req.body
    console.log('movieData2 :', movieData);
    const { type, message } = await movieService.updateMovie(movieData, id);
    if (type) return res.status(errorMap.mapError(type)).json({ message });

    return res.status(200).json(message);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const daleteMovie = async (req, res) => {
  try {
    const id = req.params.id
    const { type, message } = await movieService.daleteMovie(id);
    if (type) return res.status(errorMap.mapError(type)).json({ message });

    return res.status(204).json(message);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const getMovie = async (req, res) => {
  try {
    const id = req.params.id
    const { type, message } = await movieService.getMovie(id);
    if (type) return res.status(errorMap.mapError(type)).json({ message });

    return res.status(200).json(message);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports = {
  getMovies,
  addMovie,
  updateMovie,
  daleteMovie,
  getMovie,
};
