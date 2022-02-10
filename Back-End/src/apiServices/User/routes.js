const express = require('express');
const controller = require('./user_controller');

const router = express.Router();

router.post('/nuevo', controller.createUser);
router.get('/listar', controller.listUser);
router.get('/usuario/:id?', controller.find_id);
router.get('/permisos', controller.permisos);
router.get('/findAsync/:word?', controller.findAsync);
router.put('/edit_pass', controller.edit_pass);


module.exports = router;