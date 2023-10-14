import { Request,Response} from 'express';
import { AppDataSource } from '../data-source';
import { Auth } from '../entity/Auth';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import userService from '../services/userService';
import UserAuth from '../models/userAuth';

class authController{
    async store(req: Request,res:Response){
        

        console.log('chegou aqui 1');


        const repository = AppDataSource.getRepository(Auth);
        const {email,password} = req.body;

        const passCrypted = bcrypt.hashSync(password,8);
        //Create request TO send user
        //const userExists
        console.log(passCrypted);

        const userChecked = await userService.getUserByEmailAndPassword(email,passCrypted);

        if(userChecked){
            const token = jwt.sign({id:email },'secret',{expiresIn:'1d'});
            
            const auth = repository.create({
                login : email,
                token:token,
                dateLogin: new Date().getDate()
            });

            await repository.save(auth);

            //Request to Database RIO
            let userAuth =  new UserAuth();
            userAuth.name = auth.login;
            userAuth.token = auth.token;

            const tokenSaved = await userService.saveToken(userAuth);

            return res.json(userAuth);
        }
        else{
            res.status(404).json(
                {
                "status": "Not Found",
                "message":"user not Found"
            });
        }
    }

}

export default new authController();