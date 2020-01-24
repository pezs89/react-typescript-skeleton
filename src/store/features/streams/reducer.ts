import { createReducer } from 'typesafe-actions';
import { omit } from 'lodash';
import { StreamsState } from './types';
import {
  loadStreamsAsync,
  createStreamAsync,
  loadStreamAsync,
  editStreamAsync,
  deleteStreamAsync
} from './actions';
import { StreamState } from 'http2';

export const initialState: StreamsState = {
  streamList: []
};

export const streamsReducer = createReducer(initialState)
  .handleAction(
    loadStreamsAsync.success,
    (
      state: StreamsState,
      action: ReturnType<typeof loadStreamsAsync.success>
    ) => {
      return { ...state, streamList: action.payload };
    }
  )
  .handleAction(loadStreamsAsync.failure, (state: StreamsState) => {
    return state;
  })
  .handleAction(
    createStreamAsync.success,
    (
      state: StreamsState,
      action: ReturnType<typeof createStreamAsync.success>
    ) => {
      return { ...state, ...action.payload };
    }
  )
  .handleAction(
    loadStreamAsync.success,
    (state: StreamState, action: ReturnType<typeof loadStreamAsync.success>) =>
      state
  )
  .handleAction(
    loadStreamAsync.failure,
    (state: StreamState, action: ReturnType<typeof loadStreamAsync.failure>) =>
      state
  )
  .handleAction(
    deleteStreamAsync.success,
    (
      state: StreamState,
      action: ReturnType<typeof deleteStreamAsync.success>
    ) => omit(state, action.payload)
  )
  .handleAction(
    editStreamAsync.success,
    (
      state: StreamState,
      action: ReturnType<typeof editStreamAsync.success>
    ) => {
      let newState = { ...state };
      if (action.payload.id) {
        newState = { ...state, [action.payload.id]: action.payload };
      }
      return newState;
    }
  );
