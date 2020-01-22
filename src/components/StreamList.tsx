import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadStreamsAsync } from '../store/features/streams/actions';
import { ApplicationState } from '../store';
import StreamCard from './StreamCard';
import { Stream } from '../store/features/streams/types';

const dispatchProps = {
  loadStreams: loadStreamsAsync.request
}

const mapStateToProps = ({ streams }: ApplicationState) => ({
  streams: streams.streamList
})

type StreamListProps = typeof dispatchProps & ReturnType<typeof mapStateToProps>;

class StreamList extends Component<StreamListProps> {
  componentDidMount() {
    this.props.loadStreams();
  }

  render(): JSX.Element {
    const { streams } = this.props;
    return <div className="stream-list">
      {streams.map((stream: Stream) =>
        <StreamCard key={stream.id} {...stream} />
      )}
    </div>
  }
}

export default connect(mapStateToProps, dispatchProps)(StreamList);