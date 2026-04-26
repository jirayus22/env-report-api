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

const updateOperation = async (id, data) => {
  return await Operation.findByIdAndUpdate(id, data, {
    returnDocument: "after",
  });
};

module.exports = {
  createOperation,
  getOperation,
  getOperationById,
  updateOperation,
};
