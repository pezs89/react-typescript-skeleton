import axios from '../store/middlewares/axios';
import { Stream } from '../store/features/streams/types';

export const loadStreams = () => {
  return axios.get<Stream[]>('streams');
};

export const createStream = (stream: Stream) => {
  return axios.post<Stream>('streams', stream);
};

export const loadStream = (id: number) => {
  return axios.get<Stream>(`streams/${id}`);
};

export const deleteStream = (id: number) => {
  return axios.delete<number>(`streams/${id}`);
};

export const editStream = (editedStream: Stream) => {
  return axios.put<Stream>(`streams/${editedStream.id}`, editedStream);
};
