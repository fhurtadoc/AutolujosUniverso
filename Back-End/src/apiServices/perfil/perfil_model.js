const dao=require('./user_dao')

class Perfil {
    constructor (name_perfil, id_permisos ){
        this.name_perfil=name_perfil;        
        this.id_permisos=id_permisos;        
    }

}

Perfil.crear=function(nuevo_perfil, res){
    res=dao.crear_perfil(nuevo_perfil, res);
    return res;    
}

Perfil.editar=function(nuevo_perfil, res){
    res=dao.editar_perfil(nuevo_perfil, res);
    return res;    
}

Perfil.eliminar=function(nuevo_perfil, res){
    res=dao.eliminar_perfil(nuevo_perfil, res);
    return res;    
}

Perfil.listar=function(nuevo_perfil, res){
    res=dao.listar_perfil(nuevo_perfil, res);
    return res;    
}

Perfil.buscar=function(nuevo_perfil, res){
    res=dao.buscar_perfil(nuevo_perfil, res);
    return res;    
}