import { Stream } from '../store/features/streams/types';
import { FormErrors } from 'redux-form';

export const validate = (formValues: Stream): FormErrors<Stream> => {
  const errors: FormErrors<Stream> = {};
  if (!formValues.title) {
    errors.title = 'Title is required';
  }
  if (!formValues.description) {
    errors.description = 'Description is required';
  }
  return errors;
};
