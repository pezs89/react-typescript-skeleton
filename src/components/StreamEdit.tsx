import React from 'react';
import _ from 'lodash';

import StreamForm from './StreamForm';
import { Stream } from '../store/features/streams/types';
import { CustomStreamInnerComponentProps } from './StreamWrapper';

const StreamEdit: React.FC<CustomStreamInnerComponentProps<Stream>> = ({ stream, callback }: CustomStreamInnerComponentProps<Stream>) => {
  const handleSubmit = (stream: Stream) => {
    callback(stream);
  }

  if (stream) {
    return (
      <div className="stream-create">
        <StreamForm
          initialValues={_.pick(stream, 'title', 'description')}
          onSubmit={handleSubmit}
        />
      </div>
    )
  }
  return <div>Loading...</div>;
}

export default StreamEdit;