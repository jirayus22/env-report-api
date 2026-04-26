const express = require("express");
const validate = require("../middlewares/validate");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.get("/", userController.getUsers);

module.exports = router;
