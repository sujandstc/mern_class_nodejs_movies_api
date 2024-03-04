const moviesModel = require("../models/movies.model");

const getSingleMovie = async (req, res) => {
  const { movie_id } = req.params;

  const moviesData = await moviesModel.findOne({
    _id: movie_id,
  });

  res.status(200).json({
    status: "success",
    moviesData: moviesData,
  });
};

module.exports = getSingleMovie;
