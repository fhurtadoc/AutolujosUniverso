const User_abog = require("../modelo/user_abog");
const User = require("../modelo/user_user");
const passport = require('passport');
const encrypt = require("../tools/encrypt");
const User_user = require("../modelo/user_user");
const jwt = require('jsonwebtoken');


/**
 * @author  Fabio Alejandro <fabiohurtadoc@gmail.com>
 * @description funcion que permite hacer el login  
 * recibe el request y ejecuta una funcion de passport que va a estar en ./passport.js 
 * @return retorna codigo 200 se registro correctamente el usuario y un 400 si no se pudo hacer el registro
 * si notan es un callback que tiene un donde al final con la res con un token. 
 * 
*/
exports.login= async function(req, res, next){
    passport.authenticate('local.singin', async function(err, User){        
        if(err) return res.send(err);
        if(!user_user){
            return res.status(400).send({message: "el usuario no es" })
        }else{
            const token=await jwt.sign({user: user_user}, 'process.env.TOKEN_FORGOT');
            res.status(200).json({token});            
        }
        
    })(req, res, next);
};