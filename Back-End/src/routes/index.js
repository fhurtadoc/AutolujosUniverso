const express = require('express');
const router = express.Router();
const user_routes=require('../apiServices/User/routes');
const login=require('../services/login')
/**
 * funcion para traer las rutas por clase ubicadas en la capa de negocios
 * 
 * */
//LOGIN 
router.post('/login', login.login);

//USUARIOS 
router.use('/users', user_routes);

//ARTICULOS


//INVENTARIO

module.exports = router;