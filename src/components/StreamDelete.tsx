import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Button from './Button';
import Modal from './Modal';
import { CustomStreamInnerComponentProps } from './StreamWrapper';
import { DeleteModalActionTypes } from '../enums/DeleteModalActionTypes';

type StreamDeleteProps = CustomStreamInnerComponentProps<number> & RouteComponentProps<{ id: string }>;

const StreamDelete: React.FC<StreamDeleteProps> = ({ stream, callback, history, match }: StreamDeleteProps): JSX.Element => {
  const handleClick = (actionType: DeleteModalActionTypes) => {
    if (actionType === DeleteModalActionTypes.Delete) {
      const { id } = match.params;
      callback(+id);
    } else {
      history.push('/');
    }
  }

  const onClickoutSide = () => {
    history.push('/');
  }

  const renderActions = (): JSX.Element => {
    return (
      <>
        <Button type="button" label="Delete" callback={() => handleClick(DeleteModalActionTypes.Delete)}></Button>
        <Button type="button" label="Cancel" callback={() => handleClick(DeleteModalActionTypes.Cancel)}></Button>
      </>
    )
  }

  return (
    <div>
      <Modal
        title={'Delete Stream'}
        content={`Do you really want to delete ${stream ? stream.title : 'this'} stream?`}
        actions={renderActions()}
        clickOutSide={onClickoutSide}
      />
    </div>
  )
}

export default StreamDelete;