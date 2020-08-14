const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  active_periods: [
    {
      start_time: { type: String },
      end_time: { type: String },
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
