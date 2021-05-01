var Usuario = require('../../models/usuario');

module.exports =()=>({
    usuarioCreate: (req,res)=>{
        let usuario = new Usuario({
            rut:req.body.rut,
            username:req.body.username,
            password:req.body.password
        });

        Usuario.add(usuario,(err,user)=>{
            if (err){
                return res.status(500).send(err._message)
            }
            return res.status(201).json({usuario:{_id:user._id,username:user.username,rut:user.rut}})
        })
    },
    usuarioLogin: (req,res)=>{
        let rut = req.body.rut;
        let password = req.body.password;
        Usuario.findUser(rut,(err,user)=>{
            if(!user){
                return res.status(204).send();
            }
            Usuario.comparePassword(password,user.password, function(err, isMatch) {
                if (err){
                    return res.status(500).send(err._message)
                }
                if (!isMatch){
                    return res.status(204).send()
                }
                return res.status(200).json({usuario:{_id:user._id,username:user.username,rut:user.rut}})
            });
        })
    }
});