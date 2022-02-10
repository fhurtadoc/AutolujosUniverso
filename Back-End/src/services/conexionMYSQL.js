'use strict';

//hacemos la conexion a base de datos 
const mysql=require('mysql');
//luego importamos la libreria util mas especificamente el modulo promisify que nos permite
// hacer promesas con mysql teniendo en cuenta que este no soporta las mimas. 
let {promisify}=require("util");
//importamos la configuracion de la Base de Datos 
let localhost=require('../config');

let pool=mysql.createPool(localhost);

pool.getConnection((err, connection)=>{
    if(err){ 

        
              
        if (err.code==='ER_NOT_SUPPORTED_AUTH_MODE' || err.code==='ER_ACCESS_DENIED_ERROR' ){
            console.log('conexion a la DB genera error revise contraseñas y usuarios');
        }

        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.log('conexion a DB esta cerrada');
        }
        if(err.code ==='ER_CON_COUNT_ERROR'){
            console.log('Database tiene este numero de conexiones');
        }
        if(err.code=== 'ECONNREFUSED'){
            console.log('Database consulta rechazada');
        }
    }
    if(connection){        
        connection.release();
        
    }
    return
});

pool.query=promisify(pool.query);
module.exports=pool;