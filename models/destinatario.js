var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinatarioSchema = new Schema({
    nombre: {
        type: String, 
        uppercase: true, 
        validate: {
            validator: function (v) {
                return v.length>0;
            },
            message: props => `${props.value} Nombre vacio`
        }
    },
    rut: { 
        type: String, 
        uppercase: true
    },
    correo: { type: String, uppercase: true },
    telefono: String,
    bankId: String,
    tipoCuenta: { type: mongoose.Schema.Types.ObjectId, ref: 'TipoCuenta' },
    numeroCuenta: String,
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
})

/**
 * Crea una instancia del Documento Destinatario
 * y la retorna
 * 
 * @param {String} nombre Nombre del destinatario
 * @param {String} rut Rut del destinatario
 * @param {String} correo Correo del destinatario
 * @param {String} telefono Telefono del destinatario
 * @param {String} bankId Id del banco a transferir
 * @param {String} tipoCuenta Tipo de cuenta 
 * @param {String} numeroCuenta Numero de la cuenta
 * @returns {Document} Retorna un destinatario Document
 */
destinatarioSchema.statics.createInstance = function (nombre, rut, correo, telefono, bankId, tipoCuenta, numeroCuenta) {
    return new this({
        nombre: nombre,
        rut: rut,
        correo: correo,
        telefono: telefono,
        bankId: bankId,
        tipoCuenta: tipoCuenta,
        numeroCuenta: numeroCuenta
    })
}

/**
 * Crea un nuevo documento Destinatario
 * 
 * @param {Schema} destinatario Instancia del destinatario
 * @param {Callback} cb Callback del add
 */
destinatarioSchema.statics.add = function (destinatario, cb) {
    this.create(destinatario, cb)
    // destinatario.save(cb);
}

/**
 * 
 * @param {String} nombre Nombre del destinatario
 * @param {Callback} cb Callback del Find
 * @returns Retorna un DocumentQuery
 */
destinatarioSchema.statics.findByName = function (nombre,usuario, cb) {
    return this.find({ nombre: { $regex: '.*' + nombre + '.*' }, usuario: usuario }, cb)
};

module.exports = mongoose.model('Destinatario', destinatarioSchema);