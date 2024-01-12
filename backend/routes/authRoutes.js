const express = require("express");
const route = express.Router();
// importing controllers routes
const {
  home,
  register,
  login,
  contact,
} = require("../controllers/authControllers");

//home page
route.get("/", home);

//register page
route.post("/register", register);

//login page
route.post("/login", login);

//contact us
route.post("/contact", contact);

module.exports = route;
