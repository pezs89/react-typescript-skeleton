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
