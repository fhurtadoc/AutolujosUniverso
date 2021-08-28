const express = require('express');
const controller = require('./user_controller');

const router = express.Router();

router.post('/nuevo', controller.createUser);
router.get('/listar', controller.listUser);
router.get('/usuario/:id?', controller.find_id);

module.exports = router;