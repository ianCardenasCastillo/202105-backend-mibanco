var mongoose = require('mongoose'); //ODM para mongoDB NodeJs

mongoose.connect('mongodb://localhost/'+process.env.MONGO_DB);
mongoose.Promise=global.Promise;
var db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error:'));
db.once('open',()=>{
    console.log('Conexión establecida')
});

module.exports=db;