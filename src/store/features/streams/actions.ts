import { createAsyncAction } from 'typesafe-actions';
import { StreamsActionTypes, Stream, StreamActionTypes } from './types';

export const loadStreamsAsync = createAsyncAction(
  StreamsActionTypes.FETCH_STREAMS_REQUEST,
  StreamsActionTypes.FETCH_STREAMS_SUCCESS,
  StreamsActionTypes.FETCH_STREAMS_FAILURE
)<undefined, Stream[], Error>();

export const createStreamAsync = createAsyncAction(
  StreamActionTypes.CREATE_STREAM_REQUEST,
  StreamActionTypes.CREATE_STREAM_SUCCESS,
  StreamActionTypes.CREATE_STREAM_FAILURE
)<Stream, Stream, Error>();

export const loadStreamAsync = createAsyncAction(
  StreamActionTypes.FETCH_STREAM_REQUEST,
  StreamActionTypes.FETCH_STREAM_SUCCESS,
  StreamActionTypes.FETCH_STREAM_FAILURE
)<number, Stream, Error>();

export const deleteStreamAsync = createAsyncAction(
  StreamActionTypes.DELETE_STREAM_REQUEST,
  StreamActionTypes.DELETE_STREAM_SUCCESS,
  StreamActionTypes.DELETE_STREAM_FAILURE
)<number, number, Error>();

export const editStreamAsync = createAsyncAction(
  StreamActionTypes.EDIT_STREAM_REQUEST,
  StreamActionTypes.EDIT_STREAM_SUCCESS,
  StreamActionTypes.EDIT_STREAM_FAILURE
)<Stream, Stream, Error>();


// export const loadStreamsRequest = () =>
//   action(StreamsActionTypes.FETCH_STREAMS_REQUEST);
// export const loadStreamsSuccess = (streams: Stream[]) =>
//   action(StreamsActionTypes.FETCH_STREAMS_SUCCESS, streams);
// export const loadStreamsError = (message: string) =>
//   action(StreamsActionTypes.FETCH_STREAMS_FAILURE, message);

// export const loadStreamRequest = (id: number) =>
//   action(StreamActionTypes.FETCH_STREAM_REQUEST, id);
// export const loadStreamSuccess = (stream: Stream) =>
//   action(StreamActionTypes.FETCH_STREAM_SUCCESS, stream);
// export const loadStreamError = (message: string) =>
//   action(StreamActionTypes.FETCH_STREAM_FAILURE, message);

// export const createStreamRequest = (stream: Stream) =>
//   action(StreamActionTypes.CREATE_STREAM_REQUEST, stream);
// export const createStreamSuccess = (stream: Stream) =>
//   action(StreamActionTypes.CREATE_STREAM_SUCCESS, stream);
// export const createStreamError = (message: string) =>
//   action(StreamActionTypes.CREATE_STREAM_FAILURE, message);

// export const deleteStreamRequest = (id: number) =>
//   action(StreamActionTypes.DELETE_STREAM_REQUEST, id);
// export const deleteStreamSuccess = (id: number) =>
//   action(StreamActionTypes.DELETE_STREAM_SUCCESS, id);
// export const deleteStreamError = (message: string) =>
//   action(StreamActionTypes.DELETE_STREAM_FAILURE, message);

// export const editStreamRequest = (stream: Stream) =>
//   action(StreamActionTypes.EDIT_STREAM_REQUEST, stream);
// export const editStreamSuccess = (stream: Stream) =>
//   action(StreamActionTypes.EDIT_STREAM_SUCCESS, stream);
// export const editStreamError = (message: string) =>
//   action(StreamActionTypes.EDIT_STREAM_FAILURE, message);