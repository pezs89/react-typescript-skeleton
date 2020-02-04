import React from 'react';
import { Stream } from '../store/features/streams/types';
import placeholder from '../assets/images/video-placeholder-1.png';
import { MdDelete, MdEdit } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { stopPropagation } from '../utils/helpers';
import { StreamWrapperType } from '../enums/StreanWrapperTypes';

interface StreamCardProps extends Stream {
  onCardClick: (id: number) => void;
  currentUserId?: string;
}

const StreamCard: React.FC<StreamCardProps> = ({ id, description, title, createdBy, currentUserId, onCardClick }: StreamCardProps): JSX.Element => {
  const hasActions = currentUserId === createdBy;
  return (
    <div className="stream-card" key={id} onClick={() => onCardClick(id)}>
      <div className="stream-card__image">
        <img src={placeholder} alt={description} />
        {hasActions ? <div className="stream-card__actions actions">
          <IconContext.Provider value={{ className: "actions__icon" }}>
          <Link to={`/streams/${StreamWrapperType.EDIT}/${id}`} onClick={stopPropagation}>
              <MdEdit />
            </Link>
            <Link to={`/streams/${StreamWrapperType.DELETE}/${id}`} onClick={stopPropagation}>
              <MdDelete />
            </Link>
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