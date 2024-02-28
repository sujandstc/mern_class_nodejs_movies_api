const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const createData = require("./routes/crud_create");

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.mongo_connect, {})
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.log("Connection failed!");
  });


app.post("/addData", createData);

// Starting a server
app.listen(4000, () => {
  console.log("Server started successfully!!!");
});
