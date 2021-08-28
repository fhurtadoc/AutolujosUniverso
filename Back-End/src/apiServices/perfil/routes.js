const express = require('@awaitjs/express');
const controller = require('./controller');

const router = express.Router();

router.getAsync('/', controller.getPerfiles);
router.postAsync('/', controller.createPerfil);
router.getAsync('/:id', controller.getPerfil);
router.patchAsync('/:id', controller.updatePerfil);
router.deleteAsync('/:id', controller.deletePerfil);

module.exports = router;