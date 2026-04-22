const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createOperation = {
  body: Joi.object().keys({
    project_id: Joi.custom(objectId).required(),
    work_date: Joi.string().required(),
    system_status: Joi.boolean().optional(),
    pump_status: Joi.boolean().optional(),
    aerator_status: Joi.boolean().optional(),
    sludge_pump_status: Joi.boolean().optional(),
    chlorine_status: Joi.boolean().optional(),
    do_value: Joi.number().optional(),
    sv30_value: Joi.number().optional(),
    ph_value: Joi.number().optional(),
  }),
};

const getOperation= {
  params: Joi.object().keys({
    operationId: Joi.custom(objectId).required(),
  }),
};

module.exports = {
  createOperation,
  getOperation,
};