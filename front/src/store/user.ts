import { RematchDispatch } from '@rematch/core';
import { User } from '../types';


const INITIAL_STATE: User = {
    id: 0,
    username: '',
    email: '',
    roleID: 0,
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
    
  }),
};

export default user;
