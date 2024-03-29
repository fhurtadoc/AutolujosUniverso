
const articulo_dto=require('./articulo_dto');
const Articulo = require('./articulo_model');
const Categoria=require('../Categoria/categoria_model');



module.exports = {

    async crear_articulo(req, res){
        
        if (!req.body.id_categoria) return res.sendStatus(400);
        if (!req.body.codigo) return res.sendStatus(400);
        if (!req.body.nombre) return res.sendStatus(400);
        if (!req.body.precio_venta) return res.sendStatus(400);
        if (!req.body.stock) return res.sendStatus(400);  
        if (!req.body.descripcion) return res.sendStatus(400);
        if (!req.body.imagen) return res.sendStatus(400);
        if (!req.body.estado) return res.sendStatus(400);
        if (!req.body.precio_compra) return res.sendStatus(400);

        let id_categoria=req.body.id_categoria;
        let codigo=req.body.codigo;
        let nombre=req.body.nombre;
        let precio_venta=req.body.precio_venta;
        let stock=req.body.stock;
        let descripcion=req.body.descripcion;
        let imagen=req.body.imagen;
        let estado=req.body.estado;
        let precio_compra=req.body.precio_compra;
        //Validar si el Articulo ya Existe
        Articulo.BuscarCodigo(codigo, (articulo ,err)=>{
            if(err) return res.send({menssaje:"error en query", codigo: 404})            
            if(articulo.length!=0){
                return res.send({menssaje:"El articulo ya existe", codigo: 400})
            }else{
                let new_articulo=new Articulo(id_categoria, codigo, nombre, precio_venta, stock, descripcion, imagen,  estado,  precio_compra );
                Articulo.crear(new_articulo, ( new_articulo_data, err)=>{                     
                if(err) return res.send({menssaje:"error en query", codigo: 404})            
                if(new_articulo_data){                
                let id_categoria=new_articulo.id_categoria                
                    Categoria.buscar(id_categoria, (categoria, err)=>{                    
                        let nom_categoria=categoria[0].nombre;                    
                        new_articulo.id_categoria=nom_categoria;                                                             
                        return res.send(articulo_dto.single(new_articulo, req.new_articulo));
                    });                
            }
            
        })
            }            
        });        
    }, 
    
    async listar_articulos(req, res){
        Articulo.listar_articulos((articulos, err)=>{
            if(err) return res.send({menssaje:"error en query", codigo: 404})
            if(articulos)return res.send(articulo_dto.multiple(articulos, req.articulos));            
        })
    },

    async buscar(req, res){
        let id=req.params.id;
        Articulo.Buscar_id(id, (articulo ,err)=>{
            if(err) return res.send({menssaje:"error en query", codigo: 404})
            if(articulo)return res.send(articulo_dto.single(articulo, req.articulo));            
        })
    },

    async buscarforCodigoAsync(codigo){        
        Articulo.BuscarCodigo(codigo, (articulo ,err)=>{
            if(err) return res.send({menssaje:"error en query", codigo: 404})
            if(articulo)return res.send(articulo_dto.single(articulo, req.articulo));
        })
    },

    async delete(req, res){
        let id=req.params.id;
        console.log(id);
        Articulo.delete(id, (res_data, err)=>{            
            if(err) return res.send({menssaje:"error en query", codigo: 404})
            if(res)return res.send( {menssaje: "Eliminado Correctamente", codigo:200});
        })

    }
     


}