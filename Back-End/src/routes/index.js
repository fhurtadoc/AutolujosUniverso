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
router.getAsync('/users', user_routes);
router.getAsync('/atributos', atributos_routes);
router.getAsync('/perfil', perfil_routes);
router.getAsync('/permisos', permisos_routes);


//ARTICULOS


//INVENTARIO

module.exports = router;