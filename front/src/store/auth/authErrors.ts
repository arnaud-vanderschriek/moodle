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
    }
  },
  effects: (dispatch: RematchDispatch<any>) => ({
    setErrors: (error: any) => {
      dispatch.authErrors.setErrors(error)
    }
  }),
};

export default authErrors;
