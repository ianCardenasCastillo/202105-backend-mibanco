var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinatarioSchema = new Schema({
    nombre: { type: String, uppercase: true },
    rut: { type: String, uppercase: true },
    correo: { type: String, uppercase: true },
    telefono: String,
    bank_id: String,
    tipo_cuenta: { type: String, uppercase: true },
    numero_cuenta: String
})

/**
 * Crea una instancia del Documento Destinatario
 * y la retorna
 * 
 * @param {String} nombre Nombre del destinatario
 * @param {String} rut Rut del destinatario
 * @param {String} correo Correo del destinatario
 * @param {String} telefono Telefono del destinatario
 * @param {String} bank_id Id del banco a transferir
 * @param {String} tipo_cuenta Tipo de cuenta 
 * @param {String} numero_cuenta Numero de la cuenta
 * @returns {Document} Retorna un destinatario Document
 */
destinatarioSchema.statics.createInstance = function(nombre,rut,correo,telefono,bank_id,tipo_cuenta,numero_cuenta) {
    return new this({
        nombre:nombre,
        rut:rut,
        correo:correo,
        telefono:telefono,
        bank_id:bank_id,
        tipo_cuenta:tipo_cuenta,
        numero_cuenta:numero_cuenta
    })
}

/**
 * Crea un nuevo documento Destinatario
 * 
 * @param {Schema} destinatario Instancia del destinatario
 * @param {Callback} cb Callback del add
 */
destinatarioSchema.statics.add = function(destinatario,cb) {
    this.create(destinatario,cb)
    // destinatario.save(cb);
}

/**
 * 
 * @param {String} nombre Nombre del destinatario
 * @param {Callback} cb Callback del Find
 * @returns Retorna un DocumentQuery
 */
destinatarioSchema.statics.findByName = function(nombre,cb) {
    return this.find({nombre:{ $regex: '.*' + nombre + '.*' }},cb)
};

module.exports = mongoose.model('Destinatario', destinatarioSchema);