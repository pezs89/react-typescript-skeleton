import React, { Component } from 'react';
import { Field, reduxForm, InjectedFormProps, FormErrors } from 'redux-form';
import Input from './Input';
import Button from './Button';
import { connect } from 'react-redux';
import { Stream } from '../store/features/streams/types';
import { createStreamAsync } from '../store/features/streams/actions';

const mapDispatchToProps = {
  createStream: createStreamAsync.request
};

type StreamCreateProps = typeof mapDispatchToProps;

class StreamCreate extends Component<StreamCreateProps & InjectedFormProps<Stream, StreamCreateProps>> {
  onSubmit = (event: Stream) => {
    this.props.createStream(event);
  }

  render(): JSX.Element {
    const { handleSubmit } = this.props;
    return (
      <div className="stream-create">
        <form className="form" onSubmit={handleSubmit(this.onSubmit)}>
          <Field name="title" label="Title" component={Input} />
          <Field name="description" label="Description" component={Input} />
          <Button type={'submit'} label={'Submit'} callback={() => { }}></Button>
        </ form>
      </div>
    )
  }
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

const wrappedForm = reduxForm<Stream, StreamCreateProps>({
  form: 'streamCreate',
  validate
})(StreamCreate);

export default connect(null, mapDispatchToProps)(wrappedForm) 
