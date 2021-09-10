const User=require('./user_model');
const user_dto=require('./user_dto');
const encrypt= require('../../helpers/encrypt');

module.exports = {
    //CREAR USUARIOS 
    async createUser(req, res){                 
        if (!req.body.nom_usuario) return res.sendStatus(400);
        if (!req.body.contrasena) return res.sendStatus(400);
        if (!req.body.permisos) return res.sendStatus(400);
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
        let new_user=new User(nom_usuario, password_encrypt, perfil, correo, estado);        
        User.crear( new_user,  (new_user,err)=>{
            if(err) return res.send({menssaje:"error en query", codigo: 404})
            if(new_user)return res.send(user_dto.single(Usersnew, req.user));
        }); 
        
        
    },
    //LISTAR USUARIOS
    async listUser(req, res){        
        User.listar_usuarios((Users, err)=>{
            if(err) return res.send({menssaje:"error en query", codigo: 404})
            if(Users)return res.send(user_dto.multiple(Users, req.users));
        })
    },
    //BUSCAR USUARIOS
    //BUSCAR UN USUARIO X ID
    async find_id(req, res)
    {
        let id=req.params.id
        User.Buscar_id(id, (usuario, err)=>{
            if(err) return res.send({menssaje:"error en query", codigo: 404})            
            if(usuario)return res.send(user_dto.single(usuario[0]));
        })
    },

    async login(req, res)
    {
        if (!req.body.correo) return res.sendStatus(400);
        if (!req.body.contrasena) return res.sendStatus(400); 
        let correo=req.body.correo;        
        let contrasena=req.body.contrasena;       
        User.buscarLogin(correo, async (usuario, err)=>{            
            if(err) return res.send({menssaje:"error en query", codigo: 402});            
            if(usuario.length<=0) return res.send({menssaje:"el correo no existe", codigo: 402});            
            let validPassword=await encrypt.matchPassword(contrasena, usuario[0].contrasena);
            if(!validPassword){
                return res.send({menssaje: 'contraseña es incorrecta'});
              }else{        
                return res.send ({estado:200, usuario:user_dto.single(usuario[0])}); 
              } 
        })
    },

    //BUSCAR USUARIO POR PARAMETROS 
    //pendiente de realizar


    //ELIMINAR USUARIO 

    async delete_user(req, res){
        let id=req.params.id
        User.delete(id, (usuario, err)=>{
            if(err) return res.send({menssaje:"error en query", codigo: 404})            
            res.sendStatus(204);
        })
    }
  
}