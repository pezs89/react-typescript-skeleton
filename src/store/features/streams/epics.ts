import { Epic } from 'redux-observable';
import { RootAction, RootState, Services, isActionOf } from 'typesafe-actions';
import {
  loadStreamsAsync,
  createStreamAsync,
  loadStreamAsync,
  editStreamAsync,
  deleteStreamAsync
} from './actions';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';

export const loadStreamsEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, $state, { api }) => {
  return action$.pipe(
    filter(isActionOf(loadStreamsAsync.request)),
    switchMap(action => {
      return from(api.streams.loadStreams()).pipe(
        map(val => loadStreamsAsync.success(val.data)),
        catchError((msg: string) =>
          of(loadStreamsAsync.failure(new Error(msg)))
        )
      );
    })
  );
};

export const createStreamEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, { api }) => {
  return action$.pipe(
    filter(isActionOf(createStreamAsync.request)),
    switchMap(action =>
      from(api.streams.createStream(action.payload)).pipe(
        map(response => createStreamAsync.success(response.data)),
        catchError(message => of(createStreamAsync.failure(message)))
      )
    )
  );
};

export const loadStreamEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, { api }) => {
  return action$.pipe(
    filter(isActionOf(loadStreamAsync.request)),
    switchMap(action =>
      from(api.streams.loadStream(action.payload)).pipe(
        map(response => loadStreamAsync.success(response.data)),
        catchError(message => of(loadStreamAsync.failure(message)))
      )
    )
  );
};

export const editStreamEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, { api }) => {
  return action$.pipe(
    filter(isActionOf(editStreamAsync.request)),
    switchMap(action =>
      from(api.streams.editStream(action.payload)).pipe(
        map(response => editStreamAsync.success(response.data)),
        catchError(message => of(editStreamAsync.failure(message)))
      )
    )
  );
};

export const deleteStreamEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, { api }) => {
  return action$.pipe(
    filter(isActionOf(loadStreamAsync.request)),
    switchMap(action =>
      from(api.streams.deleteStream(action.payload)).pipe(
        map(response => deleteStreamAsync.success(response.data)),
        catchError(message => of(deleteStreamAsync.failure(message)))
      )
    )
  );
};
