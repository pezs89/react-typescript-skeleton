import axios from './axios';
import { RequestTypes } from '../enums/RequestTypes';

const getMethod = (method: string) => {
  switch (method) {
    case RequestTypes.POST:
      return axios.post;
    case RequestTypes.PUT:
      return axios.put;
    case RequestTypes.DELETE:
      return axios.delete;
    case RequestTypes.PATCH:
      return axios.patch;
    default:
      return axios.get;
  }
};

export async function callApi<T>(method: string, path: string, data?: T) {
  const requestType = getMethod(method);
  const res = await requestType<T>(`/${path}`, data);
  return res;
}
