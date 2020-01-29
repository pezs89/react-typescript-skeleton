import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import Button from './Button';
import Modal from './Modal';
import history from '../utils/history';
import { deleteStreamAsync, loadStreamAsync } from '../store/features/streams/actions';
import { ApplicationState } from '../store';

enum DeleteModalActionType {
  Delete,
  Cancel
}

const mapStateToProps = ({ streams }: ApplicationState, ownProps: RouteComponentProps<{ id: string }>) => ({
  stream: streams.streamList.find(stream => stream.id === +ownProps.match.params.id)
})

const mapDispatchToProp = {
  deleteStream: deleteStreamAsync.request,
  loadStream: loadStreamAsync.request
}

type StreamDeleteProps = typeof mapDispatchToProp & RouteComponentProps<{ id: string }> & ReturnType<typeof mapStateToProps>;

class StreamDelete extends Component<StreamDeleteProps> {
  componentDidMount() {
    this.props.loadStream(+this.props.match.params.id);
  }

  handleClick = (actionType: DeleteModalActionType) => {
    if (actionType === DeleteModalActionType.Delete) {
      const { id } = this.props.match.params;
      this.props.deleteStream(+id);
    }
    else {
      history.push('/');
    }
  };

  onClickoutSide = () => {
    history.push('/');
  };

  renderActions(): JSX.Element {
    return (
      <>
        <Button type="button" label="Delete" callback={() => this.handleClick(DeleteModalActionType.Delete)}></Button>
        <Button type="button" label="Cancel" callback={() => this.handleClick(DeleteModalActionType.Cancel)}></Button>
      </>
    )
  }


  render(): JSX.Element {
    const { stream } = this.props;
    return (
      <div>
        <Modal
          title={'Delete Stream'}
          content={`Do you really want to delete ${stream ? stream.title : 'this'} stream?`}
          actions={this.renderActions()}
          clickOutSide={this.onClickoutSide}
        />
      </div >
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(StreamDelete);