var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
var SALT_WORK_FACTOR = 10;

var usuarioSchema = new Schema({
    username: {
        type: String, 
        uppercase: true, 
        required: true,
        validate: {
            validator: function (v) {
                return v.length>0;
            },
            message: props => `${props.value} Nombre vacio`
        },
        index: { unique: true }
    },
    rut: { 
        type: String, 
        uppercase: true
    },
    password: { type: String, required: true }

});

usuarioSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

usuarioSchema.statics.comparePassword = function(candidatePassword,userPassword, cb) {
    bcrypt.compare(candidatePassword, userPassword, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

usuarioSchema.statics.add = function (usuario, cb) {
    this.create(usuario, cb)
    // destinatario.save(cb);
}

usuarioSchema.statics.findUser = function (rut, cb) {
    return this.findOne({rut:rut}, cb)
};

module.exports = mongoose.model('Usuario', usuarioSchema);
