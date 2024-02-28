import { RematchDispatch } from '@rematch/core';
import { User } from '../../types';


const INITIAL_STATE: any = {
  user: {
    id: null,
    userName: "",
    email:"",
    roleID: null,
    cursusId: null,
    roles:null,
    cursus:null
  } as User,
  
  token: ""
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
