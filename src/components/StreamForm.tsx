import React from 'react';
import { Field, reduxForm, FormErrors } from 'redux-form';
import Button from './Button';
import Input from './Input';
import { Stream } from '../store/features/streams/types';
import { connect } from 'react-redux';

interface StreamFormProps {
  onSubmit: (stream: Stream) => void
}

const StreamForm: React.FC<StreamFormProps> = ({ onSubmit }: StreamFormProps) => {
  return (
    <div>
      asd
    </div>
    // <form className="form" onSubmit={handleSubmit(onSubmit)}>
    //   <Field name="title" label="Title" component={Input} />
    //   <Field name="description" label="Description" component={Input} />
    //   <Button type={'submit'} label={'Submit'} callback={() => { }}></Button>
    // </ form>
  )
}


const validate = (formValues: Stream): FormErrors<Stream> => {
  const errors: FormErrors<Stream> = {};
  if (!formValues.title) {
    errors.title = 'Title is required';
  }

  if (!formValues.description) {
    errors.description = 'Description is required';
  }

  return errors;
}

const wrappedForm = reduxForm<Stream, StreamFormProps>({
  form: 'streamCreate',
  validate
})(StreamForm);

export default connect()(wrappedForm);