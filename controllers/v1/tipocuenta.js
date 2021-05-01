var TipoCuenta = require('../../models/tipoCuenta');

module.exports =()=>({
    tipoCuenta: (req,res)=>{
        TipoCuenta.find({},(err,success)=>{
            if (err) return res.status(500)
            return res.status(200).json({tipos:success})
        })
    }
});