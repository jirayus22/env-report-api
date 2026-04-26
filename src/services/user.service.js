const User = require("../models/User");

const getUsers = async () => {
  const users = await User.find();
  return users ?? [];
};

const createUser = async (data) => {
  console.log("data", data);
  const user = await User.create(data);
  console.log("🚀 ~ file: user.service.js:11 ~ createUser ~ user:", user);
  return user;
};

module.exports = {
  getUsers,
  createUser,
};
