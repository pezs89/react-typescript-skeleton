import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import _ from 'lodash';

import StreamForm from './StreamForm';
import { ApplicationState } from '../store';
import { loadStreamAsync, editStreamAsync } from '../store/features/streams/actions';
import { Stream } from '../store/features/streams/types';

const mapStateToProps = ({ streams }: ApplicationState, ownProps: RouteComponentProps<{ id: string }>) => ({
  editedStream: streams.streamList.find(stream => stream.id === +ownProps.match.params.id)
});

const mapDispatchToProps = {
  loadStream: loadStreamAsync.request,
  editStream: editStreamAsync.request
}

type StreamEditProps = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps> & RouteComponentProps<{ id: string }>;

class StreamEdit extends Component<StreamEditProps> {
  componentDidMount(): void {
    const { id } = this.props.match.params;
    this.props.loadStream(+id);
  }

  handleSubmit = (stream: Stream) => {
    const { id } = this.props.match.params;
    this.props.editStream({ id: +id, stream });
  }

  render() {
    const { editedStream } = this.props;
    if (editedStream) {
      return (
        <div className="stream-create">
          <StreamForm
            initialValues={_.pick(editedStream, 'title', 'description')}
            onSubmit={this.handleSubmit}
          />
        </div>
      )
    }
    return (<div>Loading...</div>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit);