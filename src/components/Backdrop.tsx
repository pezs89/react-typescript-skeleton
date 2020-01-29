import React, { PropsWithChildren } from 'react';

interface BackdropProps {
  onDismiss?: Function
}

const Backdrop: React.FC<PropsWithChildren<BackdropProps>> = ({ children, onDismiss }: PropsWithChildren<BackdropProps>) => {
  const onBackdropClick = () => {
    if (onDismiss) {
      onDismiss();
    }
  }
  
  return (
    <div className="backdrop" onClick={() => onBackdropClick()}>
      {children}
    </div>
  )
}

export default Backdrop;