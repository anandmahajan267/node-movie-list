const schemas = require('./schemas');

const validateNewMovie = async (data) => {
  const validatMovie = {
    name: data.name,
    details: data.details,
    genre: data.genre,
    actors: data.actors,
    release_date: data.release_date,
    language: data.language
  };
  
  const { error } = schemas.movieSchema.validate(validatMovie);
  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return { type: null, message: '' };
};

module.exports = {
  validateNewMovie,
};
