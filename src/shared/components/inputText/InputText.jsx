import React from 'react'
import { Controller } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { InputText } from 'primereact/inputtext';


 function Input(props) {
  return (
    <div className="field">
      <span className="p-float-label">
        <Controller name="name" control={props.control} rules={{ required: 'Name is required.' }} render={({ field, fieldState }) => (
          <InputText id={field.name} {...field} autoFocus className={classNames({ 'p-invalid': fieldState.invalid })} />
        )} />
        <label htmlFor={props.name} className={classNames({ 'p-error': props.errors.name })}>{props.name}</label>
      </span>
      {props.getFormErrorMessage('name')}
    </div>
  )
}

Input.propTypes = {};
export default Input;