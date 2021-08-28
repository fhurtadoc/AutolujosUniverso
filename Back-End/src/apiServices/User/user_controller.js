const User=require('./user_model');
const user_dto=require('./user_dto');
const encrypt = require("../../helpers/encrypt");

module.exports = {

    async createUser(req, res, done){                 
        if (!req.body.nom_usuario) return res.sendStatus(400);
        if (!req.body.contrasena) return res.sendStatus(400);
        if (!req.body.perfil) return res.sendStatus(400);
        if (!req.body.correo) return res.sendStatus(400);
        if (!req.body.estado) return res.sendStatus(400);        
        //recuperamos las letiables del body
        let nom_usuario=req.body.nom_usuario;        
        let contrasena=req.body.contrasena;
        let perfil=req.body.perfil;
        let correo=req.body.correo;        
        let estado=req.body.estado;        
        //encriptacion del password
        password_encrypt = await encrypt.encryptPassword(contrasena);
        //creamos un Usuario
        new_user=new User(nom_usuario, password_encrypt, perfil, correo, estado);        
        User.crear( nuevo_user,  Usersnew, (err)=>{
            if(err) return res.send({menssaje:"error en query", codigo: 404})
            if(new_user)return res.send(user_dto.single(Usersnew, req.user));
        });
        
            
        
        
    },

    async listUser(req, res){        
        User.listar_usuarios((Users, err)=>{
            if(err) return res.send({menssaje:"error en query", codigo: 404})
            if(Users)return res.send(user_dto.multiple(Users, req.users));
        })
        
        

    }


  
}