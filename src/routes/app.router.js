const express = require('express');

const movieController = require('../controllers/movie.controller');

const router = express.Router();

router.get('/movies', movieController.getMovies);
router.post('/movie', movieController.addMovie);
router.put('/movie/:id', movieController.updateMovie);
router.delete('/movie/:id', movieController.daleteMovie);
router.get('/movie/:id', movieController.getMovie);


module.exports = router;
