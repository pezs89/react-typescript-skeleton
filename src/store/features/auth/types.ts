export type AuthState = {
  isLoggedin: boolean;
};

export enum AuthActions {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
}

interface LoginSuccessAction {
  type: typeof AuthActions.LOGIN_SUCCESS;
}

interface LogoutSuccessAction {
  type: typeof AuthActions.LOGIN_SUCCESS;
}

export type AuthActionTypes = LoginSuccessAction | LogoutSuccessAction;
