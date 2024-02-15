import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import auth from './auth/auth';
import authErrors from './auth/authErrors';
import user from './user';
import courses from './courses/courses'


const models = {
    user,
    auth,
    authErrors,
    courses
}

export const store = init({
    models,
});


export type Store = typeof store
export type RootDispatch = RematchDispatch<typeof models>;
export type RootState = RematchRootState<typeof models>;