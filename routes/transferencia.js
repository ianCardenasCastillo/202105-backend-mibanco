var express = require('express');
var router = express.Router();

var transferenciaController = require('../controllers/v1/transferencia');
var transferenciaHandler = transferenciaController();

router.post('/', transferenciaHandler.transferenciaCreate);
router.get('/', transferenciaHandler.transferenciaGet);

module.exports = router; // Se exporta el router