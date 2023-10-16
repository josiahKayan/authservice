import axios from 'axios';
import UserAuth from '../models/userAuth';


const httpUsers = axios.create({
    baseURL: 'http://localhost:8001',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const httpRiverLever = axios.create({
    baseURL: 'http://localhost:3002',
    headers: {
      'Content-Type': 'application/json'
    }
  });

class UserService{
    
    async getUserByEmailAndPassword(email: string, password: string) {

        console.log('ENTROU NO AXIOS');

        let payload = { username: email, password: password };

        console.log('Payload',payload);

        const userExists = await httpUsers.post('/users/validateUser', payload);

        console.log(userExists);

        return userExists;
    }

    async saveToken(userAuth : UserAuth) {
        const userExists = await httpRiverLever.post('/sign-in',userAuth );

        console.log(userExists);

        return userExists;
    }



}

export default new UserService();