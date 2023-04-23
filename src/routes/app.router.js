const express = require('express');

const movieController = require('../controllers/movie.controller');

const router = express.Router();

router.get('/movies', movieController.getMovies);
router.post('/movie', movieController.addMovie);
router.put('/movie/:id', movieController.updateMovie);
router.delete('/movie/:id', movieController.daleteMovie);
router.get('/movie/:id', movieController.getMovie);

// router.post('/', UserController.createUser);

// router.delete('/me', auth, UserController.deleteUser);

// router.get('/:id', auth, UserController.getUserById);

module.exports = router;
