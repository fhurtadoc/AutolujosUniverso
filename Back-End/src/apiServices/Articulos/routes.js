const express = require('express');
const controller = require('./articulo_controller');

const router = express.Router();

router.post('/newArticulo', controller.crear_articulo);
router.get('/list', controller.listar_articulos);
router.delete('/delete/:id', controller.delete);

module.exports = router;
