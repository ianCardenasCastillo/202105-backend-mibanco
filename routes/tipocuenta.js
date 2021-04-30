var express = require('express');
var router = express.Router();

var tipoCuentaController = require('../controllers/v1/tipocuenta');
var tipoCuentaHandler = tipoCuentaController();

router.get('/', tipoCuentaHandler.tipoCuenta);

module.exports = router; // Se exporta el router