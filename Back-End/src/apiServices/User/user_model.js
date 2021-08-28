const dao=require('./user_dao')

class User {
    constructor (user_name, password, perfil, email){
        this.user_name=user_name;
        this.password=password;
        this.perfil=perfil;
        this.email=email;
    }

}

User.crear=function(nuevo_user, res){
    res=dao.crear_user(nuevo_user, res);
    return res;    
}

User.editar=function(nuevo_user, res){
    res=dao.editar_user(nuevo_user, res);
    return res;    
}

User.eliminar=function(nuevo_user, res){
    res=dao.eliminar_user(nuevo_user, res);
    return res;    
}

User.listar=function(nuevo_user, res){
    res=dao.listar_user(nuevo_user, res);
    return res;    
}

User.buscar=function(nuevo_user, res){
    res=dao.buscar_user(nuevo_user, res);
    return res;    
}

