const moviesModel = require("../models/movies.model");

const createData = async (req, res) => {
  // get data from user...
  const { name, rating, image, info } = req.body;

  // try catch block
  try {
    // If there is validation error, we throw an error which will be caught by catch block ..
    if (!name) throw "Name is required";
    if (name.length < 3) throw "Name must be more than 3 characters!";
    if (!image) throw "Image is required";
    if (!info) throw "Info is required";
    if (!rating) throw "Rating is required";

    // check if exists...

    const getExistingMovie = await moviesModel.findOne({
      name: name,
    });

    if (getExistingMovie) throw "This movie already exists!";

    // If there is no validation error, we will then create data on database...

    await moviesModel.create({
      rating: rating,
      name: name,
    });

    // send success status to user...

    res.status(200).json({
      status: "success",
      message: "Data created successfully!",
    });
  } catch (error) {
    // Check type of error!

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

module.exports = createData;
