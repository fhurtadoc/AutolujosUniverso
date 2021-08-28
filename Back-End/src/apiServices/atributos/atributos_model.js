const dao=require('./user_dao')

class Atributos {
    constructor (nombre_atributos){
        this.nombre_atributos=nombre_atributos;        
        
    }

}

Atributos.crear=function(nuevo_atributo, res){
    res=dao.crear_atributos(nuevo_atributo, res);
    return res;    
}

Atributos.editar=function(nuevo_atributo, res){
    res=dao.editar_atributos(nuevo_atributo, res);
    return res;    
}

Atributos.eliminar=function(nuevo_atributo, res){
    res=dao.eliminar_atributos(nuevo_atributo, res);
    return res;    
}

Atributos.listar=function(nuevo_atributo, res){
    res=dao.listar_atributos(nuevo_atributo, res);
    return res;    
}

Atributos.buscar=function(nuevo_atributo, res){
    res=dao.buscar_atributos(nuevo_atributo, res);
    return res;    
}