export enum PostsActionTypes {
  fetchPosts,
}

export interface Post {
  id: number;
  title: string;
  descpition: string;
}

export interface FetchTodosAction {
  type: PostsActionTypes;
  payload?: Post[];
}
