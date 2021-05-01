var mongoose = require('mongoose'); //ODM para mongoDB NodeJs

var TipoCuenta = require('./models/tipoCuenta')

var user=process.env.MONGO_USER
var password=process.env.MONGO_PASSWORD
var host=process.env.MONGO_HOST
var db=process.env.MONGO_DB

const url = "mongodb+srv://"+user+":"+password+"@"+host+"/"+db+"?retryWrites=true&w=majority";


mongoose.connect(url, { useNewUrlParser: true,useUnifiedTopology: true });
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