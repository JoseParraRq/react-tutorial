import React from 'react'
import { Controller } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { InputText } from 'primereact/inputtext';


function Input(props) {
  const { register, error, name, label } = props
  console.log(register)

  return (
    <div className="field">
      <span className="p-float-label">
        <InputText className={classNames({ 'p-invalid': error[name] })} />
        <label htmlFor={name} className={classNames({ 'p-error': !!error[name] })}>{label}</label>
      </span>
      {error[name] && <small className="p-error">{error[name].message}</small>}
    </div>
  );
}

Input.propTypes = {};
export default Input;