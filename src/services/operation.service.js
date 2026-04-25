const Operation = require("../models/Operation");

const getOperation = async () => {
  const operation = await Operation.find();
  return operation ?? [];
};

const createOperation = async (data) => {
  const operation = await Operation.create(data);

  return operation;
};

const getOperationById = async (id) => {
  return await Operation.findById(id);
};

module.exports = {
  createOperation,
  getOperation,
  getOperationById,
};
