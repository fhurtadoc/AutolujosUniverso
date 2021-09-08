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
        Categoria.crear(new_categoria, done, (new_categoria, err)=>{
            if(err) return res.send({menssaje:"error en query", codigo: 404})
            if(new_categoria){
                categotia_dto.single(new_categoria, req.categoria)
                return res.send(articulo_dto);
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
            if(categoria)return res.send(categoria_dto.single(categoria, req.categoria));
        })
    },

    async delete(req, res){
        let id=req.params.id
        Categoria.delete( id, (res, err)=>{
            if(err) return res.send({menssaje:"error en query", codigo: 404})
            if(res)return res.sendStatus(200);
        })
    }
}
