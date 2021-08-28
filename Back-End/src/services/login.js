const User_abog = require("../modelo/user_abog");
const User = require("../modelo/user_user");
const passport = require('passport');
const encrypt = require("../tools/encrypt");
const User_user = require("../modelo/user_user");
const jwt = require('jsonwebtoken');


/**
 * @author  Fabio Alejandro <fabiohurtadoc@gmail.com>
 * @description funcion que permite hacer el logup o registro de usuarios
 * recibe el request y ejecuta una funcion de passport que va a estar en ./passport.js 
 * @return retorna codigo 200 se registro correctamente el usuario y un 400 si no se pudo hacer el registro
 * si notan es un callback que tiene un donde al final con la res. 
 * 
*/
exports.logup = async function (req, res, next) {
    passport.authenticate('local.singup', async function(err, id_user) {        
        if(err) return res.send(err);
        if(!id_user) return res.status(400).send({message: "no se creo el usuario" })
        if(id_user){
            const token=await jwt.sign({id: id_user}, 'process.env.TOKEN_FORGOT');
            res.status(200).json({token});
        }        
    })(req, res, next);
  };