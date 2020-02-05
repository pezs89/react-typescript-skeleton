import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  callback: (value: string) => void;
  extraClass?: string
}

const Button: React.FC<ButtonProps> = ({ type, value, label, callback, extraClass, children }: ButtonProps): JSX.Element => {
  return (
    <div className='button-container'>
      <button className={'button-container__button button-container__button--primary ' + extraClass}
        type={type}
        value={value}
        onClick={(e: React.FormEvent<HTMLButtonElement>) => callback((e.target as HTMLButtonElement).value)}>
        {label} {children}
      </button>
    </div>
  )
}

export default Button;