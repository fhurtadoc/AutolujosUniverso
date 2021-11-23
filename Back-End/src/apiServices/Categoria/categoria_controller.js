const Categoria=require('./categoria_model');
const categoria_dto=require('./categoria_dto');

module.exports = {
    async crear_categoria(req, res){
        if (!req.body.nombre) return res.sendStatus(400);
        if (!req.body.descripcion) return res.sendStatus(400);
        if (!req.body.estado) return res.sendStatus(400);
        let nombre=req.body.nombre;
        let descripcion=req.body.descripcion;
        let estado=req.body.estado; 
        let new_categoria=new Categoria(nombre, descripcion, estado);
        Categoria.crear(new_categoria, (new_categoria_res, err)=>{
            if(err) return res.send({menssaje:"error en query", codigo: 404})
            if(new_categoria_res.insertId){
                new_categoria.id_categoria=new_categoria_res.insertId;                
                return res.send(categoria_dto.single(new_categoria, req.new_categoria ));
            }
        });
    },

    async listCategory(req, res){
        Categoria.buscarAll((categorias, err)=>{
            if(err) return res.send({menssaje:"error en query", codigo: 404})
            if(categorias)return res.send(categoria_dto.multiple(categorias, req.categorias));
        })
    },

    async buscar(req, res){
        let id=req.params.id;
        Categoria.buscar(id, (categoria, err)=>{
            if(err) return res.send({menssaje:"error en query", codigo: 404})                        
            if(categoria)return res.send(categoria_dto.single(categoria[0], req.categoria));
        })
    },

    async delete(req, res){
        let id=req.params.id
        Categoria.delete( id, (response, err)=>{
            if(err) return res.send({menssaje:"error en query", codigo: 404})
            if(res)return res.send({codigo:200});
        })
    }
}
