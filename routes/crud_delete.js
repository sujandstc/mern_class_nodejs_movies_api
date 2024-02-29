const moviesModel = require("../models/movies.model");

const deleteMovie = async (req, res) => {
  const { movie_id } = req.params;

  await moviesModel.deleteOne({
    _id: movie_id,
  });

  res.status(200).json({
    status: "Data removed successfully!",
  });
};

module.exports = deleteMovie;
