import { RematchDispatch } from '@rematch/core';


const INITIAL_STATE: any = {
    code: '',
    message: '',
    isError: false
};

const authErrors = {
  name: 'authErrors',
  state: INITIAL_STATE,
  reducers: {
    setErrors: (error: any) => {
      return {
        code: error.type,
        message: error.message,
        isError: true
      }
    }, 
    cleanErrors: (state: any) => {
      return {
        ...state,
        code: '',
        message: '',
        isError: false
      }
    }
  },
  effects: (dispatch: RematchDispatch<any>) => ({
    setLoginErrors: (error: any) => {
      console.log("tetetetete")
      dispatch.authErrors.setErrors(error)
    },
    cleanLoginErrors: () => {
      dispatch.authErrors.cleanErrors()
    },
  }),
};

export default authErrors;
