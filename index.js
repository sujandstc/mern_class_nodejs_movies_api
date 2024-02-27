const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const createData = require("./crud_create");

const app = express();

mongoose
  .connect(process.env.mongo_connect, {})
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.log("Connection failed!");
  });

// Creating an schema (Table headers)

app.get("/addData", createData);

// Starting a server
app.listen(4000, () => {
  console.log("Server started successfully!!!");
});
