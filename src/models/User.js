const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
  },
  {
    last_name: {
      type: String,
      required: true,
    },
  },
  {
    role: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", userSchema, "User");
