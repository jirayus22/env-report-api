const Joi = require("joi");
const { objectId } = require("./custom.validation");

const createUser = {
  body: Joi.object().keys({
    pre_name: Joi.number().required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    role: Joi.number().optional(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.custom(objectId).required(),
  }),
};

module.exports = {
  createUser,
  getUser,
};
