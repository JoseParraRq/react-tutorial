import { Button } from 'primereact/button';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Input } from '../../../../../shared';

export const CreateProduct = () => {

    const defaultValues = {
        name: '',
        brand : '',
      
    }

    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

    const onSubmit = (data) => {


        reset();
    };

    return (
        <div>
            <div className="flex justify-content-center">
                <div className="card">
                    <h5 className="text-center"> Agregar Producto</h5>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                        <Input name='name' label='Nombre' control={control} error={errors} style={{ span:"p-float-label" }} rules={{ required: 'Name is required.' }} />
                        <Input name='brand' label='Marca' control={control} error={errors} style={{ span: "p-float-label" }} rules={{ required: ' brand is required.' }} />
                        <Button type="submit" label="Submit" className="mt-4" />
                    </form>
                </div>
            </div>
        </div>
    )

}