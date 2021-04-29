var express = require('express');
var router = express.Router();

var destinatarioController = require('../controllers/v1/destinatario');
var destinatarioHandler = destinatarioController();

router.post('/', destinatarioHandler.destinatarioCreate);
router.get('/', destinatarioHandler.destinatarioFind);

module.exports = router; // Se exporta el router