import { showNotification, hideNotification } from './actions';

export enum NotificationTypes {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  FAILURE = 'FAILURE'
}

export interface NotificationActionPayload {
  type: NotificationTypes | null;
  message: string;
}

export interface NotificationState extends NotificationActionPayload {}

export enum NotificationActionTypes {
  SHOW_NOTIFICATION = '@@notification/SHOW_NOTIFICATION',
  HIDE_NOTIFICATION = '@@notification/HIDE_NOTIFICATION',
}

export type NotificationAction =
  | ReturnType<typeof showNotification>
  | ReturnType<typeof hideNotification>;
