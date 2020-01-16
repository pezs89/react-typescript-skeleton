import React, { Component } from 'react';
import { Field, reduxForm, InjectedFormProps, FormErrors } from 'redux-form';
import Input from './Input';
import Button from './Button';

interface StreamCreateFormProps {
  title: string;
  description: string;
}

class StreamCreate extends Component<InjectedFormProps<StreamCreateFormProps>> {
  onSubmit(event: StreamCreateFormProps) {
    console.log(event.title)
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

const validate = (formValues: StreamCreateFormProps): FormErrors<StreamCreateFormProps> => {
  const errors: FormErrors<StreamCreateFormProps> = {};
  if (!formValues.title) {
    errors.title = 'Title is required';
  }

  if (!formValues.description) {
    errors.description = 'Description is required';
  }

  return errors;
}

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);