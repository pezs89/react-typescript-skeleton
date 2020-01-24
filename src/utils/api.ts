import axios from './axios';

export async function callApi<T>(
  method: string,
  path: string,
  data?: T
) {
  const requestType = getMethod(method);
  const res = await requestType<T>(`/${path}`, data);
  return res;
}

const getMethod = (method: string) => {
  switch (method) {
    case 'POST':
      return axios.post;
    case 'PUT':
      return axios.put;
    case 'DELETE':
      return axios.delete;
    default:
      return axios.get;
  }
};
