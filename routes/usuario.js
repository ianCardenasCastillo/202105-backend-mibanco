var express = require('express');
var router = express.Router();

var usuarioController = require('../controllers/v1/usuario');
var usuarioHandler = usuarioController();

router.post('/', usuarioHandler.usuarioCreate);


module.exports = router; // Se exporta el router