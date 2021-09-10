const pool=require('../../services/conexionMYSQL');

const INSERT=('INSERT INTO categoria set ?');
const LIST=("SELECT * from categoria");
const SELECT=("SELECT * from categoria WHERE id_categoria=?");
const UPDATE=("");
const DELETE=("UPDATE categoria SET estado=0 WHERE estado=?");

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