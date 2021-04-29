var Destinatario = require('../../models/destinatario');

module.exports =()=>({
    destinatarioCreate: (req,res)=>{
        let destinatario = new Destinatario({
            nombre:req.body.nombre,
            rut:req.body.rut,
            correo:req.body.correo,
            telefono:req.body.telefono,
            bank_id:req.body.bank_id,
            tipo_cuenta:req.body.tipo_cuenta,
            numero_cuenta:req.body.numero_cuenta
        });
        Destinatario.add(destinatario,(err,success)=>{
            console.log(err);
            console.log(success);

            if (err) res.status(500)
            res.status(201).json({destinatario:success})
        })
    },
    destinatarioFind: (req,res)=>{
        let nombre = req.query.nombre;
        Destinatario.findByName(nombre,(err,success)=>{
            if (err) res.status(500)
            res.status(200).json({destinatarios:success})
        })
    }
});