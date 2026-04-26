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

const updateOperation = async (data) => {
  return await Operation.findByIdAndUpdate(data._id, data, { new: true });
};

module.exports = {  
  createOperation,
  getOperation,
  getOperationById,
  updateOperation,
};
