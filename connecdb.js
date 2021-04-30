var mongoose = require('mongoose'); //ODM para mongoDB NodeJs

var TipoCuenta = require('./models/tipoCuenta')

mongoose.connect('mongodb://localhost/banco_ripley');
mongoose.Promise=global.Promise;
var db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error:'));
db.once('open',async()=>{
    console.log('Conexión establecida')
    TipoCuenta.find({},(err,success)=>{
        if(success.length<1){
            let cc = new TipoCuenta({nombre:"Cuenta Corriente"})
            let cv = new TipoCuenta({nombre:"Cuenta Vista"})
            let ca = new TipoCuenta({nombre:"Cuenta Ahorro"})
            cc.save();
            cv.save();
            ca.save();
        }
    });
});

module.exports=db;