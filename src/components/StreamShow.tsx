import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { ApplicationState } from '../store';
import { loadStreamAsync } from '../store/features/streams/actions';

const mapStateToProps = ({ streams }: ApplicationState, ownProps: RouteComponentProps<{ id: string }>) => ({
  stream: streams.streamList.find(stream => stream.id === +ownProps.match.params.id)
})

const mapDispatchToProp = {
  loadStream: loadStreamAsync.request
}

type StreamShowProps = typeof mapDispatchToProp & ReturnType<typeof mapStateToProps> & RouteComponentProps<{ id: string }>;

class StreamShow extends Component<StreamShowProps> {
  componentDidMount() {
    this.props.loadStream(+this.props.match.params.id);
  }

  render() {
    const { stream } = this.props;
    if (stream) {
      return (
      <div>
        <video></video>
        {stream.title}
      </div>
      )
    }
    return <div>Loading...</div>
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(StreamShow);