import { createAsyncAction } from 'typesafe-actions';
import { StreamsActionTypes, Stream } from './types';

export const loadStreamsAsync = createAsyncAction(
  StreamsActionTypes.FETCH_STREAMS,
  StreamsActionTypes.FETCH_STREAMS_SUCCESS,
  StreamsActionTypes.FETCH_STREAMS_FAILURE
)<string, Stream[], Error>();
