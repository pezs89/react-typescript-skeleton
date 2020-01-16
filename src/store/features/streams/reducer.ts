import { createReducer, ActionType } from 'typesafe-actions';
import { StreamsState } from './types';
import { loadStreamsAsync } from './actions';

export const initialState: StreamsState = {
  streams: []
};

type StreamsAction = ActionType<typeof loadStreamsAsync>;

export const streamsReducer = createReducer(initialState)
  .handleAction(loadStreamsAsync.success, (state, action) => {
    console.log('ye');
    return { ...state, streams: [...action.payload] };
  })
  .handleAction(loadStreamsAsync.failure, (state, action) => {
    console.log(state, action, 'fuck');
    return state;
  });
