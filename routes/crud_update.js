const moviesModel = require("../models/movies.model");

const updateMovie = async (req, res) => {
  const { movie_id, name, rating, info } = req.body;

  try {
    if (!movie_id) throw "Movie id is required!";

    await moviesModel.updateOne(
      {
        _id: movie_id,
      },
      {
        name: name,
        rating: rating,
        info: info,
      }
    );

    res.status(200).json({
      status: "success",
      message: "Updated successfully!",
    });
  } catch (error) {
    if (typeof error == "string") {
      res.status(400).json({
        status: "error",
        message: error,
      });
    } else {
      res.status(400).json({
        status: "error",
        message: "Something went wrong!",
      });
    }
  }
};

module.exports = updateMovie;
