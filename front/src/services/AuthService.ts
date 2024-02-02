import axios from 'axios';
import { LoginData, User } from '../types';

const AuthService = {
  login: async ({ username , password }: LoginData) => {
    try {
      // const response = await axios.post('localhost:5471/api/login', { email, password });
      // return response.data;

      return { username, password } as User
      
    } catch (error: any) {
      throw error.response.data;
    }
  },

  logout: () => {
    // supprimer les données du user dans le store et rediriger vers la page de connection...
  }
};

export default AuthService;