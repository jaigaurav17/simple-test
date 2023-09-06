import {createSlice} from '@reduxjs/toolkit';
import {User} from '../../data/models';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  user: User | null;
  error?: string | null;
  isSignedIn: boolean;
}

export const initialAuthState: AuthState = {
  user: null,
  error: null,
  isSignedIn: false,
};

export const authSlice = createSlice({
  name: AUTH_FEATURE_KEY,
  initialState: initialAuthState,
  reducers: {
    loginSuccess: (state, action) => {
      return {...state, user: action.payload, error: null, isSignedIn: true};
    },
    loginFailure: (state, action) => {
      return {...state, user: null, error: action.payload};
    },
    logout: state => {
      return {...state, user: null, error: null, isSignedIn: false};
    },
  },
});

export const authReducer = authSlice.reducer;

export const authActions = authSlice.actions;
