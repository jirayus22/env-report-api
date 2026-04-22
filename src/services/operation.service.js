const Operation = require("../models/Operation");

const createOperation = async (data) => {
  const operation = await Operation.create(data);

  return operation?._id ?? '';
};

module.exports = {
  createOperation,
};