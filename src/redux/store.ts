import {configureStore} from '@reduxjs/toolkit';
import {authReducer, postReducer} from './slices';

const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
