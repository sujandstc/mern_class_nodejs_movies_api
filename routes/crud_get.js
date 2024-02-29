const moviesModel = require("../models/movies.model");

const getMovies = async (req, res) => {
  const moviesData = await moviesModel.find({});

  res.status(200).json({
    status: "success",
    records: moviesData.length,
    data: moviesData,
  });
};

module.exports = getMovies;
