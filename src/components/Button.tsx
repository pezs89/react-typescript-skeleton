import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  callback: (value: string) => void;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps): JSX.Element => {
  return (
    <div className='button-container'>
      <button className={'button-container__button'}
        type={props.type}
        value={props.value}
        onClick={(e: React.FormEvent<HTMLButtonElement>) => props.callback((e.target as HTMLButtonElement).value)}>
        {props.label}
      </button>
    </div>
  )
}

export default Button;