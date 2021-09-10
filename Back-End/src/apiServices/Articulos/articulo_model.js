const dao=require('./articulo_dao');

class Articulo {

    constructor (id_categoria, codigo, nombre, precio_venta, stock, descripcion,imagen, estado, precio_compra){
        this.id_categoria=id_categoria;
        this.codigo=codigo;
        this.nombre=nombre;
        this.precio_venta=precio_venta;
        this.stock=stock;
        this.descripcion=descripcion;
        this.imagen=imagen;
        this.estado=estado;
        this.precio_compra=precio_compra;
    }
}

Articulo.crear=function(newArticulo, done){
    res=dao.crear_articulo( newArticulo, done, (res, err )=>{
        if(err){
            return err;    
        }else{
            return res;    
        }
    });    

}

Articulo.listar_articulos=function(done){
    dao.buscarAll(done, (err, res)=>{ 
        if(err){
            done(err);            
        }else{
            done(res);
            
        }
    })
}

Articulo.Buscar_id=function(id, done){
    dao.buscar(id, done, (err, res)=>{
        if(err){
            done(err);            
        }else{
            done(res);            
        }
    })    
}
Articulo.delete=function(id, done){
    dao.delete(id, done, (err, res)=>{
        if(err){
            done(err);            
        }else{
            done(res);            
        }
    }) 
}

module.exports=Articulo;