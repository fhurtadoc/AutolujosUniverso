const User=require('./user_model');
const user_dto=require('./user_dto');
const encrypt = require("../../helpers/encrypt");

module.exports = {

    async createUser(req, res){ 
        console.log(req.body);        
        if (!req.body.user_name) return res.sendStatus(400);
        if (!req.body.password) return res.sendStatus(400);
        if (!req.body.email) return res.sendStatus(400);
        //recuperamos las letiables del body
        let user_name=req.body.user_name;        
        let password=req.body.password;
        let perfil=req.body.perfil;
        let email=req.body.email;        
        //encriptacion del password
        password_encrypt = await encrypt.encryptPassword(password);
        //creamos un Usuario
        new_user=new User(user_name, password_encrypt, perfil, email);        
        let new_userPersis=User.crear(new_user);
        if(new_userPersis==undefined || new_userPersis==null){
            return res.send({menssaje:"error en query", codigo: 404})
        }
        return res.send(user_dto.single(new_userPersis, req.user));
    },
}