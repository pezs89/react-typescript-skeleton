import React from 'react';
import { WrappedFieldProps, WrappedFieldMetaProps } from 'redux-form';

interface InputProps extends WrappedFieldProps {
  label: string
}

const Input: React.FC<InputProps> = (props: InputProps): JSX.Element => {
  const { input, label, meta } = props;

  const renderErrorMessage = ({ error, touched }: WrappedFieldMetaProps): JSX.Element | null => {
    if (error && touched) {
      return (<small className="field__error">{meta.error}</small>);
    }
    return null;
  }

  const hasError = meta.touched && meta.error;
  return (
    <div className="field">
      <label className="field__label">{label}</label>
      <input className={"field__input" + (hasError ? " field__input--error" : "")} {...input} />
      {renderErrorMessage(meta)}
    </div>
  );
}

export default Input;