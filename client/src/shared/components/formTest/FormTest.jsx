import React, { useState } from 'react'
import CheckBox from '../atoms/checkbox/CheckBox';
import { EntradaTexto } from '../atoms/entradaTexto/EntradaTexto'
import TextArea from '../atoms/textArea/TextArea'
import  {Input} from "../input-password/InputPassword";
import {InputPassword} from "../../components/input-text/InputText";
import { useForm, Controller } from 'react-hook-form';
import  "../input-text/style.css"
export default function FormTest() {

const [data,setData] = useState(null);
    const sendTheDataTest = (data) => {
        setData(data)
        console.log(data);

    }

let defaultValues = {
    
        name: '',
        pass:'',
        surName:'',
        pass2:''
}

const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

    return (
        <div className='container-fluid'>

            <div className='row-2'>
                <form onSubmit={handleSubmit(sendTheDataTest)}>
                <Input name="name" control={control} rules={{required:"is required"}} label={'name'} error={errors}/>
                <InputPassword name='pass' control={control} rules={{required:"is required"}} label={'pass'} error = {errors} style="span"/>
                <Input name="surName" control={control} rules={{required:"is required"}} label={'surName'} error={errors}/>
                <InputPassword name='pass2' control={control} rules={{required:"is required",maxLength:5}} label={'pass'} error = {errors} style="span"/>
                
                <button type='submit' >Send Test</button>
                </form>
            </div>
        </div>
    )
}
