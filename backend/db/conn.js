const mongoose = require("mongoose");

const database = mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("database is connected");
  })
  .catch((e) => {
    console.log("connection failed to database");
  });

module.exports = database;
