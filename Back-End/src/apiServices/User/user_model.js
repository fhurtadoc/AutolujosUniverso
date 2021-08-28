const dao=require('./user_dao')

class User {

    constructor (user_name, password, perfil, email){
        this.nom_usuario=user_name;
        this.contrasena=password;
        this.perfil=perfil;
        this.correo=email;
    }

}

User.crear=function(nuevo_user){
    res=dao.crear_user(nuevo_user, (err, res)=>{
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
module.exports=User;