var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tipoCuentaSchema = new Schema({
    nombre: { type: String, uppercase: true },
})

module.exports = mongoose.model('TipoCuenta', tipoCuentaSchema);