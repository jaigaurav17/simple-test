import {createSlice} from '@reduxjs/toolkit';
import {Post} from '../../data/models';

export const POST_FEATURE_KEY = 'post';

export interface PostState {
  post: Post[];
  error?: string | null;
  isLoading: boolean;
  currentPage: number;
}

export const initialPostState: PostState = {
  post: [],
  error: null,
  isLoading: false,
  currentPage: 1,
};

export const postSlice = createSlice({
  name: POST_FEATURE_KEY,
  initialState: initialPostState,
  reducers: {
    startLoading: state => {
      return {...state, isLoading: true};
    },
    stopLoading: state => {
      return {...state, isLoading: false};
    },
    setPost: (state, action) => {
      return {...state, post: action.payload};
    },
    appendPost: (state, action) => {
      const posts = [...state.post, ...action.payload];
      return {...state, post: posts};
    },
  },
});

export const postReducer = postSlice.reducer;

export const postActions = postSlice.actions;
