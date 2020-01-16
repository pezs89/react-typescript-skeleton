import { Epic } from 'redux-observable';
import { RootAction, RootState, Services, isActionOf } from 'typesafe-actions';
import { loadStreamsAsync } from './actions';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';

export const loadTodosEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, $state, { api }) => {
  return action$.pipe(
    filter(isActionOf(loadStreamsAsync.request)),
    switchMap(action => {
      console.log(action);
      return from(api.streams.loadStreams(action.payload)).pipe(
        map(val => loadStreamsAsync.success(val.data)),
        catchError((msg: string) =>
          of(loadStreamsAsync.failure(new Error(msg)))
        )
      );
    })
  );
};
