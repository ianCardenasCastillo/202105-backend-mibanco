var Destinatario = require('../../models/destinatario');

module.exports =()=>({
    destinatarioCreate: (req,res)=>{
        let destinatario = new Destinatario({
            usuario:req.body.usuario,
            nombre:req.body.nombre,
            rut:req.body.rut,
            correo:req.body.correo,
            telefono:req.body.telefono,
            bankId:req.body.bankId,
            tipoCuenta:req.body.tipoCuenta,
            numeroCuenta:req.body.numeroCuenta
        });
        Destinatario.add(destinatario,(err,success)=>{
            if (err){
                // console.log(err.errors['phone'].message)
                return res.status(500).send(err._message)
            }
            return res.status(201).json({destinatario:success})
        })
    },
    destinatarioFind: (req,res)=>{
        let nombre = req.query.nombre;
        let usuario = req.query.usuario;
        Destinatario.findByName(nombre,usuario,(err,success)=>{
            if (err){
                return res.status(500).send(err._message)
            }
            return res.status(200).json({destinatarios:success})
        })
    }
});