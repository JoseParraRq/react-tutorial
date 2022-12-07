import React, { useState, useEffect } from 'react'
import { InputText } from 'primereact/inputtext';/*npm install primereact primeicons*/
import { Button } from 'primereact/button';
import { useForm, Controller } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { getUserById, updateUserService} from '../../features/users/services/userService.js';
import { useLocation } from 'react-router-dom';
import { useParams, useNavigate } from "react-router-dom";

function  UpdateUser() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [userTypes, setUserTypes] = useState(null);
  const [firstName,setFirstName] = useState(null);
  const [surName,setSurName] = useState(null);
  const [email,setEmail] = useState(null);
  
  const navigate = useNavigate();


let location = useLocation();

let path = location.pathname;

let idStr = path.split('/');

let number = new Number(idStr[3]);

let id = number.valueOf();

  useEffect(() => {//es un hoook que ejecuta
  
    getUserById(id).then((response)=> {
    setFirstName(response.firstName)
    setSurName(response.surName)
    setEmail(response.email)
  }
    ); 
    setLoading(true);
  }, [])

  const updateUser = async(data) =>{
    data.userId = id;
    data.firstName = firstName;
    data.surName = surName;
    data.email = email;
    console.log(data);
   const request = await updateUserService(data);
   navigate('/')
  }

  const { control, formState: { errors }, handleSubmit, reset } = useForm({
// firstName:firstName
  });

  const getFormErrorMessage = (name) => {
    return errors[name] && <small className="p-error">{errors[name].message}</small>
  };
  // onChange={(e) => setValues(e.target.values.firstName)} value={values.firstName} 
    return (
    
    <div className="container-fluid">
      <center><h1>Update User</h1></center>
      <form className='p-fluid' onSubmit={handleSubmit(updateUser)}> {/*como se refrescaria los campos?*/ }
        <div className="field">
          <label htmlFor="firstName" className={classNames({ 'p-error': errors.name })}>FirstName: </label>
          <Controller name='firstName' control={control}  render={({ field, fieldState }) => (
            <InputText id={field.name} placeholder='FirstName' {...field} onChange={(e) => setFirstName(e.target.value)} value={firstName} className={classNames({ 'p-invalid': fieldState.invalid })} />)} />
          {getFormErrorMessage('firstName')}

          <label htmlFor="surName" className={classNames({ 'p-error': errors.name })}>SurName: </label>
          <Controller name='surName' control={control}  render={({ field, fieldState }) => (
            <InputText id={field.name} placeholder='SurName' {...field} onChange={(e) => setSurName(e.target.value)} value={surName} className={classNames({ 'p-invalid': fieldState.invalid })} />)} />
          {getFormErrorMessage('surName')}

          <label htmlFor="email" className={classNames({ 'p-error': errors.name })}>Email: </label>
          <Controller name='email' control={control}  render={({ field, fieldState }) => (
            <InputText id={field.name} type="email"  placeholder='Email' {...field} onChange={(e) => setEmail(e.target.value)} value={email} className={classNames({ 'p-invalid': fieldState.invalid })} />)} />
          {getFormErrorMessage('email')}
            
        </div>
        <Button type='submit' label="Send" />
      </form>
    </div>
  )
}
export default UpdateUser;