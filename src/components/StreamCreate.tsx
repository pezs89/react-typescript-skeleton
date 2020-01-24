import React, { Component } from 'react';
import { Field, reduxForm, InjectedFormProps, FormErrors } from 'redux-form';
import Input from './Input';
import Button from './Button';
import { connect } from 'react-redux';
import { Stream } from '../store/features/streams/types';
import { createStreamAsync } from '../store/features/streams/actions';
import StreamForm from './StreamForm';

const mapDispatchToProps = {
  createStream: createStreamAsync.request
};

export type StreamCreateProps = typeof mapDispatchToProps;

class StreamCreate extends Component<StreamCreateProps & InjectedFormProps<Stream, StreamCreateProps>> {
  onSubmit = (event: Stream) => {
    this.props.createStream(event);
  }

  render(): JSX.Element {
    console.log(this.props);
    return (
      <div className="stream-create">
        {/* <StreamForm {...this.props} /> */}
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(StreamCreate) 
