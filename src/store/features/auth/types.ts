export type AuthState = {
  isLoggedIn: boolean;
  userId: string;
};

export enum AuthActionTypes {
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
}
