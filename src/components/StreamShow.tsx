import React from 'react'

import { CustomStreamInnerComponentProps } from './StreamWrapper';
import { Stream } from '../store/features/streams/types';

const StreamShow: React.FC<CustomStreamInnerComponentProps<Stream>> = ({ stream }: CustomStreamInnerComponentProps<Stream>) => {
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

export default StreamShow;