const Operation = require("../models/Operation");

const getOperation = async () => {
  const operation = await Operation.find();
  return operation ?? [];
};

const createOperation = async (data) => {
  const operation = await Operation.create(data);

  return operation?._id ?? "";
};

module.exports = {
  createOperation,
  getOperation,
};
