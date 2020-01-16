import { createAction } from 'typesafe-actions';
import { AuthActionTypes } from './types';

export const login = createAction(
  AuthActionTypes.LOGIN_SUCCESS,
  (id: string) => id
)<string>();
export const logout = createAction(AuthActionTypes.LOGOUT_SUCCESS)();
