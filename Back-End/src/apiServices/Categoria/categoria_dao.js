const pool=require('../../services/conexionMYSQL');

const INSERT=('INSERT INTO usuarios set ?');
const LIST=("SELECT * from usuarios");
const SELECT=("SELECT * from usuarios WHERE id_usuario=?");
const SELECT_LOGIN=("SELECT * from usuarios WHERE correo=?");
const UPDATE=("UPDATE usuarios SET nom_usuario=?, contrasena=?, perfil=?, correo=? WHERE id_usuario=? ");
const DELETE=("UPDATE usuarios SET estado=0 WHERE id_usuario=?");

module.exports={

    async crear_categoria(nuevo_user, done){
        pool.query(INSERT, nuevo_user, (err, res)=>{            
            if(err){
                done(err);
            }else{
                done(res);
            }
        })
    },

    async buscar(id, done){
        pool.query(SELECT, id, (err, res)=>{
            if(err){
                done(err);
            }else{
                done(res);
            }
        })
    },
    
    async buscarAll(done){
        pool.query(LIST, (err, res)=>{
            if(err){                
                done(err);
            }else{                  
                done(res)
            }
        })
    },

    async delete(id,done){
        pool.query(DELETE, id, (err, res)=>{
            if(err){
                done(err);
            }else{
                done(res);
            }
        })
    }

}