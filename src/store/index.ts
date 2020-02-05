import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { RouterState, routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { FormStateMap } from 'redux-form';

import { AuthState } from './features/auth/types';
import { StreamsState } from './features/streams/types';
import { rootSaga, createRootReducer } from './root-reducer';
import { NotificationState } from './features/notification/types';

export interface ApplicationState {
  auth: AuthState;
  streams: StreamsState;
  notifications: NotificationState;
  form?: FormStateMap;
  router?: RouterState;
}

// create store
export const configureStore = (
  history: History,
  initialState: ApplicationState
): any => {
  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = composeEnhancers(
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  );
  const store = createStore(createRootReducer(history), initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};
