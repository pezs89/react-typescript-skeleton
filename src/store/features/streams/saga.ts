import { all, call, fork, put, takeEvery, select } from 'redux-saga/effects';
import { callApi } from '../../../utils/api';
import { StreamsActionTypes, StreamActionTypes } from './types';
import {
  loadStreamsAsync,
  loadStreamAsync,
  createStreamAsync,
  editStreamAsync,
  deleteStreamAsync
} from './actions';
import { ApplicationState } from '../..';
import { push } from 'connected-react-router';
import { showNotification } from '../notification/actions';
import { NotificationTypes } from '../notification/types';

const getCurrentUserId = ({ auth }: ApplicationState) => auth.userId;

function* fetchStreams() {
  try {
    const res = yield call(callApi, 'GET', 'streams');
    if (res.error) {
      yield all([
        put(loadStreamsAsync.failure(res.error)),
        put(
          showNotification({
            type: NotificationTypes.ERROR,
            message: res.error
          })
        )
      ]);
    } else {
      yield put(loadStreamsAsync.success(res.data));
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield [
        put(loadStreamsAsync.failure(err)),
        put(
          showNotification({
            type: NotificationTypes.ERROR,
            message: err.message
          })
        )
      ];
    } else {
      yield all([
        put(loadStreamsAsync.failure(new Error('An unknown error occured.'))),
        put(
          showNotification({
            type: NotificationTypes.ERROR,
            message: 'An unknown error occured.'
          })
        )
      ]);
    }
  }
}

function* fetchStream(action: ReturnType<typeof loadStreamAsync.request>) {
  try {
    const res = yield call(callApi, 'GET', `streams/${action.payload}`);
    if (res.error) {
      yield all([
        put(loadStreamAsync.failure(res.error)),
        put(
          showNotification({
            type: NotificationTypes.ERROR,
            message: res.error
          })
        )
      ]);
    } else {
      yield put(loadStreamAsync.success(res.data));
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield all([
        put(loadStreamAsync.failure(err)),
        put(
          showNotification({
            type: NotificationTypes.ERROR,
            message: err.message
          })
        )
      ]);
    } else {
      yield all([
        put(loadStreamAsync.failure(new Error('An unknown error occured.'))),
        put(
          showNotification({
            type: NotificationTypes.ERROR,
            message: 'An unknown error occured.'
          })
        )
      ]);
    }
  }
}

function* createStream(action: ReturnType<typeof createStreamAsync.request>) {
  try {
    // To call async functions, use redux-saga's `call()`
    const userId = yield select(getCurrentUserId);
    const res = yield call(callApi, 'POST', `streams`, {
      ...action.payload,
      createdBy: userId
    });
    if (res.error) {
      yield all([
        put(createStreamAsync.failure(res.error)),
        put(
          showNotification({
            type: NotificationTypes.ERROR,
            message: res.error
          })
        )
      ]);
    } else {
      yield all([
        put(createStreamAsync.success(res.data)),
        put(
          showNotification({
            type: NotificationTypes.SUCCESS,
            message: `${res.data.title} successfully created`
          })
        )
      ]);
    }
    yield put(push('/'));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield all([
        put(createStreamAsync.failure(err)),
        put(
          showNotification({
            type: NotificationTypes.ERROR,
            message: err.message
          })
        )
      ]);
    } else {
      yield all([
        put(createStreamAsync.failure(new Error('An unknown error occured.'))),
        put(
          showNotification({
            type: NotificationTypes.ERROR,
            message: 'An unknown error occured.'
          })
        )
      ]);
    }
  }
}

function* editStream(action: ReturnType<typeof editStreamAsync.request>) {
  try {
    console.log(action)
    // To call async functions, use redux-saga's `call()`
    const res = yield call(callApi, 'PATCH', `streams/${action.payload.id}`, {
      ...action.payload.stream
    });
    if (res.error) {
      yield all([
        put(editStreamAsync.failure(res.error)),
        put(
          showNotification({
            type: NotificationTypes.ERROR,
            message: res.error
          })
        )
      ]);
    } else {
      yield all([
        put(editStreamAsync.success(res.data)),
        put(
          showNotification({
            type: NotificationTypes.SUCCESS,
            message: `${res.data.title} is succesfully edited`
          })
        )
      ]);
    }
    yield put(push('/'));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield all([
        put(editStreamAsync.failure(err)),
        put(
          showNotification({
            type: NotificationTypes.ERROR,
            message: err.message
          })
        )
      ]);
    } else {
      yield all([
        put(editStreamAsync.failure(new Error('An unknown error occured.'))),
        put(
          showNotification({
            type: NotificationTypes.ERROR,
            message: 'An unknown error occured.'
          })
        )
      ]);
    }
  }
}

function* deleteStream(action: ReturnType<typeof deleteStreamAsync.request>) {
  try {
    // To call async functions, use redux-saga's `call()`
    const res = yield call(callApi, 'DELETE', `streams/${action.payload}`);
    if (res.error) {
      yield all([
        put(deleteStreamAsync.failure(res.error)),
        put(
          showNotification({
            type: NotificationTypes.ERROR,
            message: res.error
          })
        )
      ]);
    } else {
      yield all([
        put(deleteStreamAsync.success(action.payload)),
        put(
          showNotification({
            type: NotificationTypes.SUCCESS,
            message: 'Successful delete'
          })
        )
      ]);
    }
    yield put(push('/'));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield all([
        put(deleteStreamAsync.failure(err)),
        put(
          showNotification({
            type: NotificationTypes.ERROR,
            message: err.message
          })
        )
      ]);
    } else {
      yield all([
        put(deleteStreamAsync.failure(new Error('An unknown error occured.'))),
        put(
          showNotification({
            type: NotificationTypes.ERROR,
            message: 'An unknown error occured.'
          })
        )
      ]);
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* requestWatcher() {
  yield takeEvery(StreamsActionTypes.FETCH_STREAMS_REQUEST, fetchStreams);
  yield takeEvery(StreamActionTypes.FETCH_STREAM_REQUEST, fetchStream);
  yield takeEvery(StreamActionTypes.CREATE_STREAM_REQUEST, createStream);
  yield takeEvery(StreamActionTypes.EDIT_STREAM_REQUEST, editStream);
  yield takeEvery(StreamActionTypes.DELETE_STREAM_REQUEST, deleteStream);
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* streamsSaga() {
  yield all([fork(requestWatcher)]);
}

export default streamsSaga;
