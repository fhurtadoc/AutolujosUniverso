const express = require('express');
const controller = require('./user_controller');

const router = express.Router();

router.post('/', controller.createUser);

module.exports = router;