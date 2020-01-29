import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Stream } from '../store/features/streams/types';
import { createStreamAsync } from '../store/features/streams/actions';
import StreamForm from './StreamForm';

const mapDispatchToProps = {
  createStream: createStreamAsync.request
};

export type StreamCreateProps = typeof mapDispatchToProps;

class StreamCreate extends Component<StreamCreateProps> {
  onSubmit = (event: Stream) => {
    this.props.createStream(event);
  }

  render(): JSX.Element {
    return (
      <div className="stream-create">
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(StreamCreate) 
