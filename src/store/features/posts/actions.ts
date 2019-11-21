import { PostsActionTypes, Post, FetchTodosAction } from './types';
import getPosts from '../../middleware/middleware';
import { AxiosPromise } from 'axios';
import { Dispatch } from 'redux';

export const fetchPosts = () => async (dispatch: Dispatch) => {
  const response = await (getPosts('/posts') as AxiosPromise<Post[]>);
  dispatch<FetchTodosAction>({
    type: PostsActionTypes.fetchPosts,
    payload: response.data
  });
};
