const pool=require('../../services/conexionMYSQL');



const INSERT=('INSERT INTO articulos set ?');
const LIST=("SELECT * from articulos");
const SELECT=("SELECT * from articulos WHERE id_articulo=?");
const SELECT_CODIGO=("SELECT * from articulos WHERE codigo=?");
const UPDATE=("UPDATE articulos SET id_categoria=?, codigo=?, nombre=?, precio_venta=?, stock=?, descripcion=?, imagen=?,  estado=? WHERE id_usuario=? ");
const DELETE=("DELETE FROM articulos WHERE id_articulo=?");

module.exports={
    async crear_articulo(new_articulo, done){
        pool.query(INSERT, new_articulo, (err, res)=>{
            if(err){ 
                console.log(err);                               
                done(err);
            }else{                
                console.log(res);                               
                done(res);
            }
        })
    },

    async buscarAll(done){
        pool.query(LIST, (err, res)=>{
            if(err){
                done(err);
            }else{
                done(res);
            }
        })
    },

    async buscar(){
        pool.query(SELECT, new_articulo, (err, res)=>{
            if(err){
                done(err);
            }else{
                done(res);
            }
        })
    }, 
    async delete(id, done){
        pool.query(DELETE, id, (err, res)=>{
            if(err){
                console.log(err);
                done(err);
            }else{
                done(res);
            }
        })
    },

    async buscar_codigo(codigo, done){
        pool.query(SELECT_CODIGO, codigo,(err, res)=>{
            if(err){
                done(err);
            }else{
                done(res);
            }
        })
    },

    async buscar_async(codigo, done){
        pool.query("SELECT * from articulos WHERE codigo=%?%", codigo,(err, res)=>{
            if(err){
                done(err);
            }else{
                done(res);
            }
        })
    }
}
