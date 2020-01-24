export type AuthState = {
  isLoggedIn: boolean;
  userId: string;
};

export enum AuthActionTypes {
  LOGIN_SUCCESS = '@@auth/LOGIN_SUCCESS',
  LOGOUT_SUCCESS = '@@auth/LOGOUT_SUCCESS'
}
