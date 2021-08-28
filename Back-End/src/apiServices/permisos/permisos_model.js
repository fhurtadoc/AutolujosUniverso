const dao=require('./user_dao')

class Permisos {
    constructor (name_permisos,){
        this.name_permisos=name_permisos;        
    }

}

Permisos.crear=function(nuevo_permisos, res){
    res=dao.crear_permisos(nuevo_permisos, res);
    return res;    
}

Permisos.editar=function(nuevo_permisos, res){
    res=dao.editar_permisos(nuevo_permisos, res);
    return res;    
}

Permisos.eliminar=function(nuevo_permisos, res){
    res=dao.eliminar_permisos(nuevo_permisos, res);
    return res;    
}

Permisos.listar=function(nuevo_permisos, res){
    res=dao.listar_permisos(nuevo_permisos, res);
    return res;    
}

Permisos.buscar=function(nuevo_permisos, res){
    res=dao.buscar_permisos(nuevo_permisos, res);
    return res;    
}