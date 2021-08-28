const express = require('@awaitjs/express');
const controller = require('./controller');

const router = express.Router();

router.getAsync('/', controller.getAtributos);
router.postAsync('/', controller.createAtributo);
router.getAsync('/:id', controller.getAtributo);
router.patchAsync('/:id', controller.updateAtributo);
router.deleteAsync('/:id', controller.deleteAtributo);

module.exports = router;