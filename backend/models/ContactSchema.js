const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const contactUser = mongoose.model("contactUser", contactSchema);

module.exports = contactUser;
