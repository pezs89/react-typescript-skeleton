import { createReducer, ActionType } from 'typesafe-actions';
import { AuthState } from './types';
import { login, logout } from './actions';

export const initialState: AuthState = {
  isLoggedIn: false,
  userId: '',
  profileImg: null
};

type LoginAction = ActionType<typeof login>;

export const authReducer = createReducer<AuthState>(initialState)
  .handleAction(login, (state: AuthState, action: LoginAction) => {
    return { ...state, isLoggedIn: true, ...action.payload };
  })
  .handleAction(logout, () => {
    return { ...initialState, isLoggedIn: false };
  });
