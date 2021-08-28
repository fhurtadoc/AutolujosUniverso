const User=require('./user_model');
const user_dto=require('./user_dto');
const encrypt = require("../../helpers/encrypt");

module.exports = {

    async createUser(req, res){
        if (!req.body.username) return res.sendStatus(400);
        if (!req.body.password) return res.sendStatus(400);
        if (!req.body.email) return res.sendStatus(400);
        //recuperamos las variables del body
        var user_name=req.body.user_name;
        var password=req.body.password;
        var perfil=req.body.perfil;
        var email=req.body.email;
        //encriptacion del password
        password_encrypt = await encrypt.encryptPassword(password);
        //creamos un Usuario
        new_user=new User(user_name, password_encrypt, perfil, email);        
        var new_userPersis=User.crear(new_user);
        return res.send(user_dto.single(new_userPersis, req.user));
    },
}