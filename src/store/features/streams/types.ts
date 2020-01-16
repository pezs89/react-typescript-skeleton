export interface Stream {
  title: string;
  description: string;
}

export type StreamsState = {
  streams: Array<Stream>;
};

export enum StreamsActionTypes {
  FETCH_STREAMS = 'FETCH_STREAMS',
  FETCH_STREAMS_SUCCESS = 'FETCH_STREAMS_SUCCESS',
  FETCH_STREAMS_FAILURE = 'FETCH_STREAMS_FAILURE'
}
