const express = require("express");
const user = require("../models/userSchema");
const bcrypt = require("bcrypt");
const contactUser = require("../models/ContactSchema");

// get all docs
const home = async (req, res) => {
  try {
    const response = await user.find();
    res.status(200).send(response);
  } catch (e) {
    res.status(400).send("error in home page!!!");
  }
};

// post form
const register = async (req, res) => {
  const { userName, email, phone, password, isAdmin } = req.body;
  try {
    const response = await user.create({
      userName,
      email,
      phone,
      password,
      isAdmin,
    });
    // generation of token using jwt
    const token = await response.getToken();

    res.status(200).json({ response, token, userId: response._id.toString() });
  } catch (e) {
    res.status(400).send(`Error in register page!!! ${e.message}`);
  }
};

//post login docs

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExists = await user.findOne({ email });

    // check existance of user
    if (!userExists) {
      return res.status(400).send("User not found!!!");
    }

    // Validation of password
    const uservalidity = await bcrypt.compare(password, userExists.password);

    if (!uservalidity) {
      return res.status(400).send("Incorrect password!!!");
    }

    // Sending token
    const token = await userExists.getToken();

    res
      .status(200)
      .json({ userExists, token, userId: userExists._id.toString() });
  } catch (e) {
    res.status(500).send(`Login page error ${e}`);
  }
};

const contact = async (req, res) => {
  const { userName, email, message } = req.body;
  try {
    const response = await contactUser.create({ userName, email, message });
    res.status(200).json(response);
  } catch (e) {
    res.status(400).send("contact page error!!!");
  }
};
module.exports = { home, register, login, contact };
