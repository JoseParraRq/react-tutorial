import React from 'react';
import { Card } from 'primereact/card';
import {Button} from 'primereact/button'
import "./style.css";
export const Product = ({ name, brand, price,onClick }) => {

    return (
        <div className='row-2'>
            <Card style={{width:"30rem"}} title={name} subTitle={brand}>
                <div className="product">
                    <span>
                    {`$${price}`}
                    </span>
                    <Button className='ml-2' label='Buy' onClick={onClick}/>
                </div>
            </Card>
        </div>
    )

}
