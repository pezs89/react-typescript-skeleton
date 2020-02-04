import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { loadStreamAsync, deleteStreamAsync, editStreamAsync } from '../store/features/streams/actions';
import { ApplicationState } from '../store';
import StreamEdit from './StreamEdit';
import StreamDelete from './StreamDelete';
import StreamShow from './StreamShow';
import { Stream } from '../store/features/streams/types';

const mapStateToProps = ({ streams }: ApplicationState, ownProps: RouteComponentProps<{ id: string }>) => ({
  stream: streams.streamList.find(stream => stream.id === +ownProps.match.params.id)
});

const mapDispatchToProp = {
  loadStream: loadStreamAsync.request,
  deleteStream: deleteStreamAsync.request,
  editStream: editStreamAsync.request,
};

export interface CustomStreamInnerComponentProps<T> {
  callback: (id: T) => void;
  stream?: Stream;
}

export enum StreamWrapperType {
  EDIT,
  NEW,
  DELETE,
  SHOW
}

interface StreamWrapperCustomProps {
  type: StreamWrapperType
}

type StreamWrapperProps = typeof mapDispatchToProp & ReturnType<typeof mapStateToProps> & RouteComponentProps<{ id: string }> & StreamWrapperCustomProps;


class StreamWrapper extends Component<StreamWrapperProps> {
  componentDidMount(): void {
    const { id } = this.props.match.params;
    this.props.loadStream(+id);
  }

  handleStreamDelete = (id: number): void => {
    this.props.deleteStream(id);
  }

  handleStreamEdit = (stream: Stream): void => {
    this.props.editStream({ id: stream.id, stream });
  }

  render(): JSX.Element {
    switch (this.props.type) {
      case StreamWrapperType.EDIT:
        return <StreamEdit {...this.props} callback={this.handleStreamEdit} />
      case StreamWrapperType.DELETE:
        return <StreamDelete {...this.props} callback={this.handleStreamDelete} />
      default:
        return <StreamShow {...this.props} />
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProp)(StreamWrapper));