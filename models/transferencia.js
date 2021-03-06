var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Destinatario = require('./destinatario');
var Usuario = require('./usuario');

var transferenciaSchema = new Schema({
    destinatario: { type: mongoose.Schema.Types.ObjectId, ref: 'Destinatario'},
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'},
    monto: Number
})

/**
 * Crea una instancia del Documento Transferencia
 * y la retorna
 * @param {String} destinatarioId _id del destinatario
 * @param {Number} monto Monto de Transferencia
 * @returns {Document} Retorna el documento Transferencia
 */
transferenciaSchema.statics.createInstance = function(destinatarioId,monto){
    return new this({
        destinatario:destinatarioId,
        monto:monto,
    })
}

/**
 * Crea un nuevo documento Transferencia
 * 
 * @param {Schema} transferencia Instancia de la transferencia
 * @param {Callback} cb Callback del add
 */
transferenciaSchema.statics.add = function(transferencia,cb) {
    this.create(transferencia,cb)
}

/**
 * 
 * @param {Callback} cb Callback del add
 * @returns {Callback} cb Callback del find
 */
transferenciaSchema.statics.listAll= function(usuario,cb){
    return this.find({usuario:usuario},cb).populate({path:'destinatario',select:'nombre rut bankId tipoCuenta',populate:{path:'tipoCuenta'}})
};

module.exports = mongoose.model('Transferencia', transferenciaSchema);