const dao=require('./user_dao')

class User {

    constructor (user_name, password, perfil, email){
        this.nom_usuario=user_name;
        this.contrasena=password;
        this.permisos=permisos;
        this.correo=email;
        this.estado=estado;
    }

}

User.crear=function(nuevo_user, done){
    res=dao.crear_user( nuevo_user, done, (err, res)=>{
        if(err){
            return err;    
        }else{
            return res;    
        }
    });    
}

User.buscarLogin=function(email){
    where=email;    
    res=dao.buscar(where,  (err, res)=>{
        if(err){
            return err;    
        }else{
            return res;    
        }
    });    
}

User.listar_usuarios=function(done){
    dao.buscarAll(done, (err, res)=>{ 
        if(err){
            done(err);            
        }else{
            done(res);
            
        }
    })
}

User.Buscar_id=function(id, done){
    dao.buscar(id, done, (err, res)=>{
        if(err){
            done(err);            
        }else{
            done(res);            
        }
    })    
}

User.delete=function(id, done){
    dao.delete(id, done, (err, res)=>{
        if(err){
            done(err);            
        }else{
            done(res);            
        }
    }) 
}

module.exports=User;