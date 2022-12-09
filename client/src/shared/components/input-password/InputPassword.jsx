import React from 'react'
import { Controller } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { InputText } from 'primereact/inputtext';


export function Input(props) {
  const { error, name, label, style, icon, control, rules } = props


  return (
    <div className="field">
      <span className={style?.span}>
        {icon && <i className={icon} />}
        <label htmlFor={name} className={classNames({ 'p-error': !!error[name] })}>{label}: </label>
        <Controller name={name} control={control}
          rules={rules}
          render={({ field, fieldState }) => (
            <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
            )} />
      </span>
      {error[name] && <small className="p-error">{error[name].message}</small>}
    </div>
  );
}