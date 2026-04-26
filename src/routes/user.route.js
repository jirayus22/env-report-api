const express = require("express");
const validate = require("../middlewares/validate");
const router = express.Router();

const userController = require("../controllers/user.controller");
const userValidation = require("../validations/user.validation")

router.get("/", userController.getUsers);
router.post("/", validate(userValidation.createUser), userController.createUser);

module.exports = router;
