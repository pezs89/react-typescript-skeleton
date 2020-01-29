import {
  loadStreamsAsync,
  createStreamAsync,
  deleteStreamAsync,
  editStreamAsync,
  loadStreamAsync
} from './actions';

export interface Stream {
  title: string;
  description: string;
  id: number;
  createdBy?: string;
}

export interface StreamEdit {
  id: number;
  stream: Stream;
}

export type StreamsState = {
  streamList: Stream[];
};

export enum StreamsActionTypes {
  FETCH_STREAMS_REQUEST = '@@streams/FETCH_STREAMS_REQUEST',
  FETCH_STREAMS_SUCCESS = '@@streams/FETCH_STREAMS_SUCCESS',
  FETCH_STREAMS_FAILURE = '@@streams/FETCH_STREAMS_FAILURE'
}

export enum StreamActionTypes {
  CREATE_STREAM_REQUEST = '@@stream/CREATE_STREAM_REQUEST',
  CREATE_STREAM_SUCCESS = '@@stream/CREATE_STREAMS_SUCCESS',
  CREATE_STREAM_FAILURE = '@@stream/CREATE_STREAM_FAILURE',
  FETCH_STREAM_REQUEST = '@@stream/FETCH_STREAM_REQUEST',
  FETCH_STREAM_SUCCESS = '@@stream/FETCH_STREAM_SUCCESS',
  FETCH_STREAM_FAILURE = '@@stream/FETCH_STREAM_FAILURE',
  EDIT_STREAM_REQUEST = '@@stream/EDIT_STREAM_REQUEST',
  EDIT_STREAM_SUCCESS = '@@stream/EDIT_STREAM_SUCCESS',
  EDIT_STREAM_FAILURE = '@@stream/EDIT_STREAM_FAILURE',
  DELETE_STREAM_REQUEST = '@@stream/DELETE_STREAM_REQUEST',
  DELETE_STREAM_SUCCESS = '@@stream/DELETE_STREAM_SUCCESS',
  DELETE_STREAM_FAILURE = '@@stream/DELETE_STREAM_FAILURE'
}

export type StreamsReducerActions =
  | ReturnType<typeof loadStreamsAsync.success>
  | ReturnType<typeof loadStreamsAsync.failure>
  | ReturnType<typeof createStreamAsync.success>
  | ReturnType<typeof loadStreamAsync.success>
  | ReturnType<typeof loadStreamAsync.failure>
  | ReturnType<typeof deleteStreamAsync.success>
  | ReturnType<typeof editStreamAsync.success>;
