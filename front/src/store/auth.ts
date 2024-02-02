import { RematchDispatch } from '@rematch/core';
import { LoginData, User } from '../types';
import { store } from '.';

//const { dispatch} = store;
// type UsersState = Readonly<User[]>;
// const INITIAL_STATE: UsersState = '';
const INITIAL_STATE: LoginData = {
    username: '',
    password: '',
};

const auth = {
  name: 'auth',
  state: INITIAL_STATE,
  reducers: {
    saveUser: (state: LoginData, payload: LoginData) => { 

        const obj: User = {
          username: payload.username,
          email: "test@gmail.com",
          userType: 0,
          isAuthenticated: true
        }

        store.dispatch.user.saveUser(obj)
        return { ...state, ...payload }
     },
    
  },
  effects: (dispatch: RematchDispatch<any>) => ({
    
    // utiliser le dispatcher pour gérer mes actions ...
  }),
};

export default auth;

