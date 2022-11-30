import React, { useState, useEffect } from 'react'
import { InputText } from 'primereact/inputtext';/*npm install primereact primeicons*/
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { useForm, Controller } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { Dropdown } from 'primereact/dropdown';
import {getAllUserTypes} from '../../services/usertypeService';

function RegisterUser() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [userTypes, setUserTypes] = useState(null);

  const defaultValues = {
    firstname: '',
    surname: '',
    email: '',
    password: '',
    address: '',
    cities_id:''
  };

  useEffect(() => {//es un hoook que ejecuta
    getAllUserTypes().then(response => setUserTypes(response));//llamo a el servicio de obtener todos los usuarios y seteo users para mostrarlos en la lista
    setLoading(true);
  }, [])
console.log("her ethe userTypes in form",userTypes);

  const selectOptions = [];
  selectOptions.push(userTypes);
  console.log("here the select options",selectOptions[0]);

  const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });
  const getFormErrorMessage = (name) => {
    return errors[name] && <small className="p-error">{errors[name].message}</small>
  };
  const saveRegister = (data) => {
    console.log("here the data in save register",data);
  }
  return (
    <div className="container-fluid">
      <center><h1>Register User</h1></center>
      <form className='p-fluid' onSubmit={handleSubmit(saveRegister)}> {/*como se refrescaria los campos?*/ }
        <div className="field">
          <label htmlFor="firstname" className={classNames({ 'p-error': errors.name })}>FirstName: </label>
          <Controller name='firstname' control={control} rules={{ required: "firstname is required" }} render={({ field, fieldState }) => (
            <InputText id={field.name} placeholder='FirstName' {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />)} />
          {getFormErrorMessage('firstname')}

          <label htmlFor="surname" className={classNames({ 'p-error': errors.name })}>SurName: </label>
          <Controller name='surname' control={control} rules={{ required: "surname is required" }} render={({ field, fieldState }) => (
            <InputText id={field.name} placeholder='SurName' {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />)} />
          {getFormErrorMessage('surname')}

          <label htmlFor="email" className={classNames({ 'p-error': errors.name })}>Email: </label>
          <Controller name='email' control={control} rules={{ required: "email is required" }} render={({ field, fieldState }) => (
            <InputText id={field.name} type="email" placeholder='Email' {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />)} />
          {getFormErrorMessage('email')}

          <label htmlFor="password" className={classNames({ 'p-error': errors.name })}>Password: </label>
          <Controller name='password' control={control} rules={{ required: "Password is required" }} render={({ field, fieldState }) => (
            <Password id={field.name} placeholder='Password' {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />)} />
          {getFormErrorMessage('password')}

          <label htmlFor="address" className={classNames({ 'p-error': errors.name })}>Address: </label>
          <Controller name='address' control={control} rules={{ required: "address is required" }} render={({ field, fieldState }) => (
            <InputText id={field.name} placeholder='Address' {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />)} />
          {getFormErrorMessage('address')}
            

          <label htmlFor="cities_id" className={classNames({ 'p-error': errors.name })}>City : </label>          
          <Controller name='cities_id' control={control} rules={{ required: "address is required" }} render={({ field, fieldState }) => (
            <Dropdown id={field.name}  value={field.value} onChange={(e)=>{field.onChange(e.value)}} options={selectOptions} placeholder="Select a City" className={classNames({ 'p-invalid': fieldState.invalid })} />)} />
          {getFormErrorMessage('cities_id')}
            

        </div>
        <Button type='submit' label="Send" />
      </form>
    </div>
  )

}
export default RegisterUser;