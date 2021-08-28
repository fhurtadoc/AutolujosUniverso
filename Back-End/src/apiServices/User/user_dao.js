const pool=require('../../services/conexionMYSQL');

const INSERT=('INSERT INTO usuarios set ?');
const LIST=("SELECT * from usuarios");
const SELECT=("SELECT * from usuarios WHERE id_usuario=?");
const SELECT_LOGIN=("SELECT * from usuarios WHERE email=?");
const UPDATE=("UPDATE usuarios SET nom_usuario=?, contrasena=?, perfil=?, correo=? WHERE id_usuario=? ");
const DELETE=("UPDATE usuarios SET estado=? WHERE id_usuario=?");

module.exports={

    async crear_user(nuevo_user){
        pool.query(INSERT, nuevo_user, (err, res)=>{            
            if(err){
                return(err);
            }else{
                return(res);
            }
        })
    },

    async buscar(where){
        pool.query(INSERT, where, (err, res)=>{
            if(err){
                return(err, null);
            }else{
                return(null, res);
            }
        })
    },

}