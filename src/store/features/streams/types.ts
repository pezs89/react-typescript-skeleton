export interface Stream {
  title: string;
  description: string;
  id?: number;
}

export type StreamsState = {
  streamList: Stream[];
};

export enum StreamsActionTypes {
  FETCH_STREAMS_REQUEST = 'FETCH_STREAMS_REQUEST',
  FETCH_STREAMS_SUCCESS = 'FETCH_STREAMS_SUCCESS',
  FETCH_STREAMS_FAILURE = 'FETCH_STREAMS_FAILURE'
}

export enum StreamActionTypes {
  CREATE_STREAM_REQUEST = 'CREATE_STREAM_REQUEST',
  CREATE_STREAM_SUCCESS = 'CREATE_STREAMS_SUCCESS',
  CREATE_STREAM_FAILURE = 'CREATE_STREAM_FAILURE',
  FETCH_STREAM_REQUEST = 'FETCH_STREAM_REQUEST',
  FETCH_STREAM_SUCCESS = 'FETCH_STREAM_REQUEST',
  FETCH_STREAM_FAILURE = 'FETCH_STREAM_REQUEST',
  EDIT_STREAM_REQUEST = 'EDIT_STREAM_REQUEST',
  EDIT_STREAM_SUCCESS = 'EDIT_STREAM_REQUEST',
  EDIT_STREAM_FAILURE = 'EDIT_STREAM_REQUEST',
  DELETE_STREAM_REQUEST = 'DELETE_STREAM_REQUEST',
  DELETE_STREAM_SUCCESS = 'DELETE_STREAM_REQUEST',
  DELETE_STREAM_FAILURE = 'DELETE_STREAM_REQUEST'
}
