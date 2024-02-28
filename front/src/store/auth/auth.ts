import { RematchDispatch } from '@rematch/core';
import apiService from '../../services/ApiService';
import { LoginData, LoginFormData } from '../../types';


const INITIAL_STATE: LoginData = {
    user: null,
    token: null,
    isAuthenticated: false
};

const auth = {
  name: 'auth',
  state: INITIAL_STATE,
  reducers: {
    login: (state: LoginData, { user, token }: LoginData) => { 
        return { 
          ...state,
          user,
          token,
          isAuthenticated: true
        }
     },
     logout: (state: LoginData) => {
        return {
          ...state,
          user: null,
          token: null,
          isAuthenticated: false
        }   
      }    
  },
  effects: (dispatch: RematchDispatch<any>) => ({
    loginUser: async ({ username, password }: LoginFormData ) => {
      try {
        dispatch.authErrors.cleanLoginErrors();
        const response = await apiService.post('/Security', { username, password });
        const { user, token } = await response.data;

        dispatch.auth.login({user, token});
        dispatch.user.saveUser({user, token});

      } catch (error) {
        dispatch.authErrors.setErrors(error);
      }
    },

    logoutUser: () => {
        dispatch.auth.logout();
    }
  }),
};

export default auth;

