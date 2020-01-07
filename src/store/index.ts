import { combineReducers, createStore } from 'redux';
import { AuthState } from './features/auth/types';
import { authReducer } from './features/auth/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface ApplicationState {
  auth: AuthState;
}

const createRootReducer = () => combineReducers({ auth: authReducer });

export const configureStore = () => {
  const composeEnhancers = composeWithDevTools({});
  const store = createStore(createRootReducer(), composeEnhancers());
  return store;
};

//Client-id: 630462222615-es4s716t5m9a1b252qgsc5gkuvgtf4t4.apps.googleusercontent.com
