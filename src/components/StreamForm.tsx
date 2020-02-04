import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { connect } from 'react-redux';

import Button from './Button';
import Input from './Input';
import { validate } from '../validators/StreamFormValidate';
import { Stream } from '../store/features/streams/types';

interface CustomProps {
  onSubmit: (stream: Stream) => void
}

type StreamFormProps = CustomProps & InjectedFormProps<Stream, CustomProps>

const StreamForm: React.FC<StreamFormProps> = ({ onSubmit, handleSubmit }: StreamFormProps) => {
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Field name="title" label="Title" component={Input} />
      <Field name="description" label="Description" component={Input} />
      <Button type={'submit'} label={'Submit'} callback={() => { }}></Button>
    </ form>
  )
}

const wrappedForm = reduxForm<Stream, CustomProps>({
  form: 'streamCreate',
  validate
})(StreamForm);

export default connect()(wrappedForm);