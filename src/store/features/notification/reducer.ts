import { createReducer } from 'typesafe-actions';
import {
  NotificationState,
  NotificationActionTypes
} from './types';

export const initialState: NotificationState = {
  type: null,
  message: ''
};

export const notificationsReducer = createReducer<NotificationState>(
  initialState
)
  .handleAction(
    NotificationActionTypes.SHOW_NOTIFICATION,
    (state: NotificationState, action: any) => {
      return { ...state, ...action.payload };
    }
  )
  .handleAction(
    NotificationActionTypes.HIDE_NOTIFICATION,
    (state: NotificationState) => {
      return { ...state, type: null, message: '' };
    }
  );
