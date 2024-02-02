import { RematchDispatch } from '@rematch/core';
import { User } from '../types';

// type UsersState = Readonly<User[]>;
// const INITIAL_STATE: UsersState = '';
const INITIAL_STATE: User = {
    username: '',
    email: '',
    userType: 0,
    isAuthenticated: false
};

const user = {
  name: 'user',
  state: INITIAL_STATE,
  reducers: {
    saveUser: (state: User, payload: User) => { 
        return { ...state, ...payload }
     },
    
  },
  effects: (dispatch: RematchDispatch<any>) => ({
    // utiliser le dispatcher pour gérer mes actions ...
  }),
};

export default user;
