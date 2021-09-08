const User = require('../User/user_model');
const dao=require('./categoria_dao');

class Categoria {

    constructor (nombre, descripcion, estado){
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.estado=estado;        
    }
}

Categoria.crear=function(categoria, done){
    dao.crear_categoria(categoria, done, (res, err)=>{
        if(err){
            return err;    
        }else{
            return res;    
        }
    });
}, 

Categoria.buscar=function(id, done){
    dao.buscar(id, done, (res, err)=>{
        if(err){
            return err;    
        }else{
            return res;    
        }
    });
}, 

Categoria.buscarAll=function(done){
    dao.buscarAll(done, (res, err)=>{
        if(err){
            return err;    
        }else{
            return res;    
        }
    })
}, 

Categoria.delete=function(id, done){
    dao.delete(id, done, (res, err)=>{
        if(err){
            return err;    
        }else{
            return res;    
        }
    })
}

module.exports=Categoria;