import { createReducer } from 'typesafe-actions';
import { omit } from 'lodash';
import { StreamsState, StreamsReducerActions } from './types';
import {
  loadStreamsAsync,
  createStreamAsync,
  loadStreamAsync,
  editStreamAsync,
  deleteStreamAsync
} from './actions';

export const initialState: StreamsState = {
  streamList: []
};

export const streamsReducer = createReducer<
  StreamsState,
  StreamsReducerActions
>(initialState)
  .handleAction(loadStreamsAsync.success, (state, action) => {
    return { ...state, streamList: [...action.payload] };
  })
  .handleAction(loadStreamsAsync.failure, state => {
    return state;
  })
  .handleAction(createStreamAsync.success, (state, action) => {
    return { ...state, ...action.payload };
  })
  .handleAction(loadStreamAsync.success, (state, action) => {
    const hasItemAlreadyLoaded = state.streamList.find(
      stream => stream.id === +action.payload.id
    );
    if (!hasItemAlreadyLoaded) {
      const newState = {
        ...state,
        streamList: [...state.streamList, action.payload]
      };
      return newState;
    }
    return state;
  })
  .handleAction(deleteStreamAsync.success, (state, action) => {
    return omit(state, action.payload);
  })
  .handleAction(editStreamAsync.success, (state, action) => {
    let newState = { ...state };
    if (action.payload.id) {
      newState = { ...state, [action.payload.id]: action.payload };
    }
    return newState;
  });
