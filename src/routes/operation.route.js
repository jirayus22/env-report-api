const express = require("express");
const validate = require("../middlewares/validate")
const router = express.Router();

const operationController = require("../controllers/operation.controller");
const operationValidation = require("../validations/operation.validation")

router.get("/" , operationController.getOperation );
router.post("/", validate(operationValidation.createOperation), operationController.createOperation);
router.put("/", validate(operationValidation.updateOperation), operationController.updateOperation);

module.exports = router;
