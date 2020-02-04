import { createAction } from 'typesafe-actions';
import { AuthActionTypes, LoginActionPayload } from './types';

export const login = createAction(
  AuthActionTypes.LOGIN_SUCCESS,
  (payload: LoginActionPayload) => {
    return { ...payload };
  }
)<LoginActionPayload>();
export const logout = createAction(AuthActionTypes.LOGOUT_SUCCESS)();
