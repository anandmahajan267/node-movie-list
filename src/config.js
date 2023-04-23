const path = require('path')

const getMovieDataPath = () => path.resolve(__dirname, './data/movies.json');

module.exports = {
    getMovieDataPath,
};
