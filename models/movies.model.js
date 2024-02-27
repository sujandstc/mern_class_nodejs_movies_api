const mongoose = require("mongoose");

const moviesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    info: {
      type: String,
    },

    image: {
      type: String,
    },
    rating: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

// Creating a table (Model)

const moviesModel = mongoose.model("movies", moviesSchema);

module.exports = moviesModel;
