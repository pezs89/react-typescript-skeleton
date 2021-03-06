import { ActionType } from 'typesafe-actions';
import { login } from './actions';

export type AuthState = {
  isLoggedIn: boolean;
  userId: string;
  profileImg: string | null;
};

export interface LoginActionPayload {
  id: string;
  profileImg: string;
}

export enum AuthActionTypes {
  LOGIN_SUCCESS = '@@auth/LOGIN_SUCCESS',
  LOGOUT_SUCCESS = '@@auth/LOGOUT_SUCCESS'
}

export type LoginAction = ActionType<typeof login>;
