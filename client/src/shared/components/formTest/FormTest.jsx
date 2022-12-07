import React from 'react'
import CheckBox from '../atoms/checkbox/CheckBox';
import { EntradaTexto } from '../atoms/entradaTexto/EntradaTexto'
import TextArea from '../atoms/textArea/TextArea'

export default function FormTest() {


    const sendTheDataTest = (data) => {
        data.preventDefault();
        // console.log(data);
        let jsonSubmit = {

            EntradaTexto:data.target[0].value,
            TextArea:data.target[1].value,
            CheckBox:data.target[2].checked

        }
        console.log(jsonSubmit);
    }

    return (
        <div className='container-fluid'>

            <div className='row-2'>
                <form onSubmit={sendTheDataTest}>
                <EntradaTexto/>
                <TextArea/>
                <CheckBox/>
                <button type='submit' >Send Test</button>
                </form>
            </div>
        </div>
    )
}
