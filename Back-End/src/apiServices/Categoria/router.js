const express = require('express');
const controller = require('./categoria_controller');

const router = express.Router();

router.post('/nuevo', controller.crear_categoria);
router.get('/listar', controller.listCategory);
router.get('/buscar/:id?', controller.buscar);
router.delete('/delete/:id?', controller.delete);

module.exports = router;