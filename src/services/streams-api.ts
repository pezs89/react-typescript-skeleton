import axios from '../store/middlewares/axios';
import { Stream } from '../store/features/streams/types';

export const loadStreams = (urlParam: string) => {
  return axios.get<Stream[]>(urlParam);
};
