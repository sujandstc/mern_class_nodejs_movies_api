const createData = async (req, res) => {
  const moviesModel = require("./models/movies.model");

  try {
    await moviesModel.create({
      info: "Good movie",
      rating: 10,
      location: "Oke",
      name: "Oke",
    });

    res.status(200).json({
      status: "success",
      message: "Data created successfully!",
    });
  } catch (e) {
    console.log(e);

    res.status(400).json({
      status: "error",
      message: "Data could not be created!",
    });
  }
};

module.exports = createData;
