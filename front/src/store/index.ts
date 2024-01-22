import { init, RematchRootState } from '@rematch/core';
import user from './user';

const models = {
    user,
    // va contenir mes différents modèles... 
}

const store = init({
    models,
});

export default store;

export type RootState = RematchRootState<typeof models>;
export type RootDispatch = typeof store.dispatch;
export type Store = typeof store