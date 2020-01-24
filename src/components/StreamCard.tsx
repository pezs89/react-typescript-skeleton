import React from 'react';
import { Stream } from '../store/features/streams/types';
import placeholder from '../assets/images/video-placeholder-1.png';
import { MdDelete, MdEdit } from 'react-icons/md';
import { IconContext } from 'react-icons';

interface StreamCardProps extends Stream {
  currentUserId: string;
}

const StreamCard: React.FC<StreamCardProps> = ({ id, description, title, createdBy, currentUserId }: StreamCardProps): JSX.Element => {
  const hasActions = currentUserId === createdBy;
  return (
    <div className="stream-card" key={id}>
      <div className="stream-card__image">
        <img src={placeholder} alt={description} />
        {hasActions ? <div className="stream-card__actions actions">
          <IconContext.Provider value={{ className: "actions__icon" }}>
            <MdEdit />
            <MdDelete />
          </IconContext.Provider>
        </div>
          : null
        }
      </div>
      <div className="stream-card__description">
        <h4>{title}</h4>
        <small>{description}</small>
      </div>
    </div>
  )
}

export default StreamCard;