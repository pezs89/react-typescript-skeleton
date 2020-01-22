import React from 'react';
import { Stream } from '../store/features/streams/types';
import placeholder from '../assets/images/placeholder.png';

const StreamCard: React.FC<Stream> = ({ id, description, title }: Stream): JSX.Element => {
  return (
    <div className="stream-card" key={id}>
      <div className="stream-card__image">
        <img src={placeholder} alt={description} />
      </div>
      <div className="stream-card__description">
        <h4>{title}</h4>
        <small>{description}</small>
      </div>
    </div>
  )
}

export default StreamCard;