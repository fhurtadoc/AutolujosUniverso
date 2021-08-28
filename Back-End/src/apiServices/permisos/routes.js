const express = require('@awaitjs/express');
const controller = require('./controller');

const router = express.Router();

router.getAsync('/', controller.getPermisos);
router.postAsync('/', controller.createPermiso);
router.getAsync('/:id', controller.getPermiso);
router.patchAsync('/:id', controller.updatePermiso);
router.deleteAsync('/:id', controller.deletePermiso);

module.exports = router;