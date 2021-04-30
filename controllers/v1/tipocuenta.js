var TipoCuenta = require('../../models/tipoCuenta');

module.exports =()=>({
    tipoCuenta: (req,res)=>{
        TipoCuenta.find({},(err,success)=>{
            if (err) res.status(500)
            res.status(200).json({tipos:success})
        })
    }
});