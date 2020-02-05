import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { all, fork } from 'redux-saga/effects';
import { History } from 'history';

import { streamsReducer } from './features/streams/reducer';
import { authReducer } from './features/auth/reducer';
import streamsSaga from './features/streams/saga';
import { notificationsReducer } from './features/notification/reducer';

export function* rootSaga() {
  yield all([fork(streamsSaga)]);
}

export const createRootReducer = (history: History) =>
  combineReducers({
    streams: streamsReducer,
    auth: authReducer,
    form: formReducer,
    notifications: notificationsReducer,
    router: connectRouter(history)
  });
