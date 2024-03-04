const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const createData = require("./routes/crud_create");
const getMovies = require("./routes/crud_get");
const updateMovie = require("./routes/crud_update");
const deleteMovie = require("./routes/crud_delete");
const getSingleMovie = require("./routes/crud_single_get");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.mongo_connect, {})
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.log("Connection failed!");
  });

app.post("/movies", createData);
app.get("/movies", getMovies);
app.patch("/movies", updateMovie);
app.delete("/movies/:movie_id", deleteMovie);
app.get("/movie/:movie_id", getSingleMovie);

// Starting a server
app.listen(4000, () => {
  console.log("Server started successfully!!!");
});
