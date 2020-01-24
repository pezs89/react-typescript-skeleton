import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadStreamsAsync } from '../store/features/streams/actions';
import { ApplicationState } from '../store';
import StreamCard from './StreamCard';
import { Stream } from '../store/features/streams/types';
import { Link } from 'react-router-dom';

const dispatchProps = {
  loadStreams: loadStreamsAsync.request
}

const mapStateToProps = ({ streams, auth }: ApplicationState) => ({
  streams: streams.streamList,
  currentUserId: auth.userId,
  isLoggedIn: auth.isLoggedIn
})

type StreamListProps = typeof dispatchProps & ReturnType<typeof mapStateToProps>;

class StreamList extends Component<StreamListProps> {
  componentDidMount(): void {
    this.props.loadStreams();
  }

  render(): JSX.Element {
    const { streams, currentUserId, isLoggedIn } = this.props;
    return (
      <div className="streams">
        {isLoggedIn ?
          <div className="streams__create">
            <Link to="/streams/new">
              Create Stream
            </Link>
          </div>
          :
          null
        }
        <div className="streams__list">
          {streams.map((stream: Stream) =>
            <StreamCard key={stream.id} {...stream} currentUserId={currentUserId} />
          )}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, dispatchProps)(StreamList);