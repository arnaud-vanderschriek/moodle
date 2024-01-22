import { RematchDispatch } from '@rematch/core';
import { User } from '../types';
import { RootState } from '.';

// type UsersState = Readonly<User[]>;
// const INITIAL_STATE: UsersState = '';
const INITIAL_STATE: User = {
    email: '',
    password: ''
};

const model = {
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

export default model;

export const test = (state: RootState) => state.model;