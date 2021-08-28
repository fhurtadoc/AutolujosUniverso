const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../apiServices/User/user_model");
const encrypt = require("../helpers/encrypt");
const pool = require("./conexionMYSQL");

/**
 *  @description funcion de passport para registro singup
 *  CREACION DEL USUARIO
 */
 passport.use("local.singin", new LocalStrategy({
  usernameField: "email",
  passwordField: "password",   
  passReqToCallback: true,

}, async(req, email, password, done )=>{    
//ejecutamos el query con un callback 
User.buscarLogin(email, async (err, result)=>{
//resultado es el usario completo 
if(result.length>0){
  let userDB=result[0];      
  //validamos el password con el usuario con un metodo que se encuentra en 
  //encrypt.js
  let validPassword=await encrypt.matchPassword(password, userDB.PASSWORD)
  if(!validPassword){
    return done({err: 'pass es incorrecto'});
  }else{        
    return done (null, userDB); 
  } 

}else{
  return done({err: 'el usuario no existe'});
}

});

}));


  
  passport.deserializeUser(async (id, done) => {
  const rows = await pool.query('SELECT * FROM username_user WHERE id = ?', [id]);
  done(null, rows[0]);
  });
  

