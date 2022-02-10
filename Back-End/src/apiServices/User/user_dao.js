const pool=require('../../services/conexionMYSQL');
const { edit_pass } = require('./user_model');

const INSERT=('INSERT INTO usuarios set ?');
const LIST=("SELECT * from usuarios");
const SELECT=("SELECT * from usuarios WHERE id_usuario=?");
const SELECT_LOGIN=("SELECT u.*, p.* FROM usuarios u INNER JOIN permisos p on u.permisos=p.id_permisos WHERE  u.correo=?");
const UPDATE=("UPDATE usuarios SET nom_usuario=?, contrasena=?, perfil=?, correo=? WHERE id_usuario=? ");
const DELETE=("UPDATE usuarios SET estado=0 WHERE id_usuario=?");
const SELECT_PERMISOS=("SELECT * FROM permisos");
const SELECT_WORD=("SELECT * FROM usuarios WHERE correo LIKE '%'?'%'");

module.exports={

    async crear_user(nuevo_user, done){
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

    async buscar_login(correo, done){
        pool.query(SELECT_LOGIN, correo, (err, res)=>{
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
    async delete(id, done){
        pool.query(DELETE, id, (err, res)=>{
            if(err){
                done(err);
            }else{
                done(res);
            }
        })
    },

    async permiso(done){
        pool.query(SELECT_PERMISOS, (err, res)=>{
            if(err){
                done(err);
            }else{
                done(res);
            }
        })
    },

    async findAsync(word, done){
        if(word){
            pool.query( "SELECT * FROM usuarios WHERE correo LIKE"+"'%"+word+"%'", (err, res)=>{
                if(err){
                    done(err);
                }else{
                    done(res);                
                }
            })
        }else{
            console.log('no hay palabras');
        }        
    },

    async edit_pass(id, pass, done){
        //console.log("UPDATE usuarios SET contrasena='"+pass+"', estado=1  WHERE id_usuario="+id);
        pool.query("UPDATE usuarios SET contrasena='"+pass+"', estado=1  WHERE id_usuario="+id, (err, res)=>{
            if(err){
                done(err);
            }else{
                done(res);                
            }
        })
    }

}