import React, { useState, useEffect } from 'react'
import { InputText } from 'primereact/inputtext';/*npm install primereact primeicons*/
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { useForm, Controller } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { Dropdown } from 'primereact/dropdown';
import {getAllUserTypes} from '../../features/users/services/usertypeService.js';
import { saveUser } from '../../features/users/services/userService.js';
import { Link, Navigate } from 'react-router-dom';
import { useParams, useNavigate } from "react-router-dom";

function RegisterUser() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [userTypes, setUserTypes] = useState(null);


  const navigate = useNavigate();

  const defaultValues = {
    firstName: '',
    surName: '',
    email: '',
    password: '',
    userTypeId:''
  };
  

const getTypes = async () => {
  const types = await getAllUserTypes();//llamo a el servicio de obtener todos los tipos de usuarios y seteo userTypes para mostrarlos en el select
  console.log("her ethe userTypes in form",types);
  let userTypes= types.map((type)=>{
    return {
      label:type.name,
      value:type.id
    }
  })
  setUserTypes(userTypes);
} 


  useEffect(() => {//es un hoook que ejecuta
    getTypes();
    setLoading(true);
    
  }, [])

  
  const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });
  const getFormErrorMessage = (name) => {
    return errors[name] && <small className="p-error">{errors[name].message}</small>
  };

  const saveRegister = (data) => {
    saveUser(data);
    reset();
    navigate('/');
  }



  return (
    
    <div className="container-fluid">
      <center><h1>Register User</h1></center>
      <form className='p-fluid' onSubmit={handleSubmit(saveRegister)}> {/*como se refrescaria los campos?*/ }
        <div className="field">
          <label htmlFor="firstName" className={classNames({ 'p-error': errors.name })}>FirstName: </label>
          <Controller name='firstName' control={control} rules={{ required: "firstName is required" }} render={({ field, fieldState }) => (
            <InputText id={field.name} placeholder='FirstName' {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />)} />
          {getFormErrorMessage('firstName')}

          <label htmlFor="surName" className={classNames({ 'p-error': errors.name })}>SurName: </label>
          <Controller name='surName' control={control} rules={{ required: "surName is required" }} render={({ field, fieldState }) => (
            <InputText id={field.name} placeholder='SurName' {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />)} />
          {getFormErrorMessage('surName')}

          <label htmlFor="email" className={classNames({ 'p-error': errors.name })}>Email: </label>
          <Controller name='email' control={control} rules={{ required: "email is required" }} render={({ field, fieldState }) => (
            <InputText id={field.name} type="email" placeholder='Email' {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />)} />
          {getFormErrorMessage('email')}

          <label htmlFor="password" className={classNames({ 'p-error': errors.name })}>Password: </label>
          <Controller name='password' control={control} rules={{ required: "Password is required" }} render={({ field, fieldState }) => (
            <Password id={field.name} placeholder='Password' {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />)} />
          {getFormErrorMessage('password')}
       
          <label htmlFor="userTypeId" className={classNames({ 'p-error': errors.name })}>User Type : </label>          
          <Controller name='userTypeId' control={control} rules={{ required: "userTypeId is required" }} render={({ field, fieldState }) => (
            <Dropdown id={field.name}  value={field.value} optionLabel='label' onChange={(e)=>{field.onChange(e.value)}} options={userTypes} placeholder="Select a userTypeId" className={classNames({ 'p-invalid': fieldState.invalid })} />)} />
          {getFormErrorMessage('userTypeId')}
            
        </div>
        <Button type='submit' label="Send" />
      </form>
    </div>
  )

}
export default RegisterUser;