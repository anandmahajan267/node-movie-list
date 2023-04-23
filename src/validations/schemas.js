const Joi = require('joi');

const movieSchema = Joi.object({
  name: Joi.string().required(),
  details: Joi.string().required(),
  genre: Joi.string().required(),
  actors: Joi.string().required(),
  release_date: Joi.date().required(),
  language: Joi.string().required(),
});

module.exports = {
  movieSchema,
};
