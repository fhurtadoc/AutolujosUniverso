const express = require('express');
const router = express.Router();
//LOGIN
const login=require('../services/login')
//USUARIOS
const user_routes=require('../apiServices/User/routes');
//ARTICULOS 
const articulo=require('../apiServices/Articulos/routes');
//CATEGORIAS
const categoria=require('../apiServices/Categoria/router');
/**
 * @description este modulo permite lanzar las rutas desde index a cada uno de los modulos 
 * @author Fabio Alejandro Hurtado Castillo  
 * */

//LOGIN 
router.post('/login', login.login);

//USUARIOS 
router.use('/users', user_routes);

//ARTICULOS
router.use('/articulo', articulo);

//CATEGORIA 
router.use('/categoria', categoria );

//INVENTARIO


module.exports = router;