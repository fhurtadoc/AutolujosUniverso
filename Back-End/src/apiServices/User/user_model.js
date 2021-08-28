const dao=require('./user_dao')

class User {
    constructor (user_name, password, perfil, email){
        this.user_name=user_name;
        this.password=password;
        this.perfil=perfil;
        this.email=email;
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
