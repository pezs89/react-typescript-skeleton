import { AuthActionTypes, AuthState } from "./types";

export const initialState: AuthState = {
  isLoggedin: false
};

export const authReducer = (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    default:
      return state;
  }
};
