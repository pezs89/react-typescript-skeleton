import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { RootAction, RootState, Services } from 'typesafe-actions';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AuthState } from './features/auth/types';
import { StreamsState } from './features/streams/types';

import rootReducer from './root-reducer';
import rootEpic from './root-epic';

import services from '../services';

export interface ApplicationState {
  auth: AuthState;
  streams: StreamsState;
}

export const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  Services
>({
  dependencies: services
});

const composeEnhancers = composeWithDevTools({});

// configure middlewares
const middlewares = [epicMiddleware];
// compose enhancers
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// rehydrate state on app start
const initialState = {};

// create store
const store = createStore(rootReducer, initialState, enhancer);

epicMiddleware.run(rootEpic);

// export store singleton instance
export default store;

//Client-id: 630462222615-es4s716t5m9a1b252qgsc5gkuvgtf4t4.apps.googleusercontent.com
