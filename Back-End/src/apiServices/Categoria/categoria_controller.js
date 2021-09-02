const Categoria=require('./categoria_model');
const categotia_dto=require('./categoria_dto');

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
    }
}
