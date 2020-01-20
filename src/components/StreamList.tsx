import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadStreamsAsync } from '../store/features/streams/actions';
import { ApplicationState } from '../store';

const dispatchProps = {
  loadStreams: loadStreamsAsync.request
}

const mapStateToProps = (state: ApplicationState) => ({
  streams: Object.values(state.streams.streamList)
})

type StreamListProps = typeof dispatchProps & ReturnType<typeof mapStateToProps>;

class StreamList extends Component<StreamListProps> {
  componentDidMount() {
    this.props.loadStreams();
  }

  render(): JSX.Element {
    const { streams } = this.props;
    console.log(streams);
    return <div>StreamList</div>
  }
}

export default connect(mapStateToProps, dispatchProps)(StreamList);