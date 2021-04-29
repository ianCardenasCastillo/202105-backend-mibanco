var Trasnferencia = require('../../models/transferencia');

module.exports =()=>({
    transferenciaCreate: (req,res)=>{
        let transferencia = new Trasnferencia({
            destinatario:req.body.destinatario,
            monto:req.body.monto,
        });
        if (transferencia.monto<1){
            return res.status(400).json({error:'Monto de transferencia debe ser superior a 0'});
        }
        Trasnferencia.add(transferencia,(err,success)=>{
            if (err) res.status(500).json({error:err});
            return res.status(201).json({transferencia:success})
        })
    },
    transferenciaGet: (req,res)=>{
        Trasnferencia.listAll((err,success)=>{
            if (err) res.status(500).json({error:err});
            return res.status(200).json({transferencias:success})
        })
    }
});