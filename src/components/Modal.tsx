import React, { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';

interface ModalProps extends PropsWithChildren<{}> {
  actions: React.ReactNode;
  title: string | React.ReactNode;
  content: string | React.ReactNode;
  clickOutSide?: Function
}

const Modal: React.FC<ModalProps> = ({ title, content, actions, clickOutSide }: ModalProps): JSX.Element | null => {
  const el = document.querySelector('#modal');
  if (el) {
    return ReactDOM.createPortal(
      <Backdrop onDismiss={clickOutSide}>
        <div className="modal" onClick={event => event.stopPropagation()}>
          <div className="modal__header">
            <h2>{title}</h2>
          </div>
          <div className="modal__body">
            {content}
          </div>
          <div className="modal__actions">
            {actions}
          </div>
        </div>
      </Backdrop>,
      el
    );
  }
  return null;
}

export default Modal;