import React from 'react'
import { Controller } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import {Dropdown} from 'primereact/dropdown';
export default function SelectTest(props) {
const { error, name, label, style, icon, control, rules,selectOptions } = props

  return (
    <div className="field">
      <span className={style?.span}>
        {icon && <i className={icon} />}
        <label htmlFor={name} className={classNames({ 'p-error': !!error[name] })}>{label}: </label>        
          <Controller name={name} control={control}
            rules={rules} render={({ field, fieldState }) => (
            <Dropdown id={field.name}  value={field.value} optionLabel='label' onChange={(e)=>{field.onChange(e.value)}} options={selectOptions} placeholder="Select a userTypeId" className={classNames({ 'p-invalid': fieldState.invalid })} />)} />
              </span>
      {error[name] && <small className="p-error">{error[name].message}</small>}
    </div>
  )
}


// const { error, name, label, style, icon, control, rules } = props


// return (
//   <div className="field">
//     <span className={style?.span}>
//       {icon && <i className={icon} />}
//       <label htmlFor={name} className={classNames({ 'p-error': !!error[name] })}>{label}: </label>
//       <Controller name={name} control={control}
//         rules={rules}
//         render={({ field, fieldState }) => (
//           <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
//           )} />
//     </span>
//     {error[name] && <small className="p-error">{error[name].message}</small>}
//   </div>