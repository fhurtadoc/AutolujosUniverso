const express = require('express');
const router = express.Router();
const user_routes=require('../apiServices/User/routes');
const atributos_routes=require('../apiServices/atributos/routes');
const perfil_routes=require('../apiServices/perfil/routes');
const permisos_routes=require('../apiServices/permisos/routes');

/**
 * funcion para traer las rutas por clase ubicadas en la capa de negocios
 * 
 * */

//USUARIOS 
router.use('/users', user_routes);

//ARTICULOS


//INVENTARIO

module.exports = router;