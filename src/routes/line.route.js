const express = require('express');
const { line, config } = require('../configs/line');
const lineController = require('../controllers/line.controller');
const router = express.Router();

const app = express();

router.post('/webhook', line.middleware(config), lineController.webhook);

module.exports = router;