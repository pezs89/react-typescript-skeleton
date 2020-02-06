import React from 'react'

import { CustomStreamInnerComponentProps } from './StreamWrapper';
import { Stream } from '../store/features/streams/types';

const StreamShow: React.FC<CustomStreamInnerComponentProps<Stream>> = ({ stream }: CustomStreamInnerComponentProps<Stream>) => {
  if (stream) {
    return (
      <div className="stream-create stream-create--column">
        <iframe width="100%" height="500px" title={stream.title} src="https://www.youtube.com/embed/pxw-5qfJ1dk" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <h3>
          {stream.title}
        </h3>
      </div>
    )
  }
  return <div>Loading...</div>
}

export default StreamShow;