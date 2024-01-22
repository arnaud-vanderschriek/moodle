import axios from 'axios';
import {  } from '@rematch/core';
import store from '../store';
import { User } from '../types';

const AuthService = {
  login: async ({ email , password }: User) => {
    try {
      const response = await axios.post('....', { email, password });

      if(response.data) {
          store.dispatch.user.saveUser({email, password});
      }

      return response.data;

    } catch (error: any) {
      throw error.response.data;
    }
  },

  logout: () => {
    // supprimer les 
  }
};

export default AuthService;