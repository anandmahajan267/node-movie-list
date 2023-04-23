const Joi = require('joi');

const movieSchema = Joi.object({
  name: Joi.string().required(),
  details: Joi.string().required(),
  genre: Joi.string().required(),
  actors: Joi.array().required(),
  release_date: Joi.date().required(),
  language: Joi.array().required(),
});

module.exports = {
  movieSchema,
};
