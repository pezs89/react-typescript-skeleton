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

const getCurrentUserId = ({ auth }: ApplicationState) => auth.userId;

function* fetchStreams() {
  try {
    // To call async functions, use redux-saga's `call()`.
    const res = yield call(callApi, 'GET', 'streams');
    if (res.error) {
      yield put(loadStreamsAsync.failure(res.error));
    } else {
      yield put(loadStreamsAsync.success(res.data));
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(loadStreamsAsync.failure(err));
    } else {
      yield put(
        loadStreamsAsync.failure(new Error('An unknown error occured.'))
      );
    }
  }
}

function* fetchStream(action: ReturnType<typeof loadStreamAsync.request>) {
  try {
    // To call async functions, use redux-saga's `call()`.
    const res = yield call(callApi, 'GET', `streams/${action.payload}`);
    if (res.error) {
      yield put(loadStreamAsync.failure(res.error));
    } else {
      yield put(loadStreamAsync.success(res.data));
    }
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(loadStreamAsync.failure(err));
    } else {
      yield put(
        loadStreamAsync.failure(new Error('An unknown error occured.'))
      );
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
      yield put(createStreamAsync.failure(res.error));
    } else {
      yield put(createStreamAsync.success(res.data));
    }
    yield put(push('/'));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(createStreamAsync.failure(err));
    } else {
      yield put(
        createStreamAsync.failure(new Error('An unknown error occured.'))
      );
    }
  }
}

function* editStream(action: ReturnType<typeof editStreamAsync.request>) {
  try {
    // To call async functions, use redux-saga's `call()`
    const res = yield call(callApi, 'PATCH', `streams/${action.payload.id}`, {
      ...action.payload.stream
    });
    if (res.error) {
      yield put(editStreamAsync.failure(res.error));
    } else {
      yield put(editStreamAsync.success(res.data));
    }
    yield put(push('/'));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(editStreamAsync.failure(err));
    } else {
      yield put(
        editStreamAsync.failure(new Error('An unknown error occured.'))
      );
    }
  }
}

function* deleteStream(action: ReturnType<typeof deleteStreamAsync.request>) {
  try {
    // To call async functions, use redux-saga's `call()`
    const res = yield call(callApi, 'DELETE', `streams/${action.payload}`);
    if (res.error) {
      yield put(deleteStreamAsync.failure(res.error));
    } else {
      yield put(deleteStreamAsync.success(action.payload));
    }
    yield put(push('/'));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(deleteStreamAsync.failure(err));
    } else {
      yield put(
        deleteStreamAsync.failure(new Error('An unknown error occured.'))
      );
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  yield takeEvery(StreamsActionTypes.FETCH_STREAMS_REQUEST, fetchStreams);
  yield takeEvery(StreamActionTypes.FETCH_STREAM_REQUEST, fetchStream);
}

function* watchCreateStreamRequest() {
  yield takeEvery(StreamActionTypes.CREATE_STREAM_REQUEST, createStream);
  yield takeEvery(StreamActionTypes.EDIT_STREAM_REQUEST, editStream);
  yield takeEvery(StreamActionTypes.DELETE_STREAM_REQUEST, deleteStream);
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* streamsSaga() {
  yield all([fork(watchFetchRequest), fork(watchCreateStreamRequest)]);
}

export default streamsSaga;
