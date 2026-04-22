const express = require("express");
const validate = require("../middlewares/validate")
const router = express.Router();

const operationController = require("../controllers/operation.controller");
const operationValidation = require("../validations/operation.validation")

router.post("/", validate(operationValidation.createOperation), operationController.createOperation);

module.exports = router;
