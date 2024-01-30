import axios from 'axios';
import { User } from '../types';

const AuthService = {
  login: async ({ email , password }: User) => {
    try {
      const response = await axios.post('....', { email, password });
      return response.data;
      
    } catch (error: any) {
      throw error.response.data;
    }
  },

  logout: () => {
    // supprimer les données du user dans le store et rediriger vers la page de connection...
  }
};

export default AuthService;