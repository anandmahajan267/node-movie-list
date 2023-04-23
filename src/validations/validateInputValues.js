const schemas = require('./schemas');

const validateNewMovie = async (data) => {
  const { error } = schemas.movieSchema.validate(data);
  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return { type: null, message: '' };
};

module.exports = {
  validateNewMovie,
};
