import React,{useState} from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import "./style.css";
export const Product = ({ name, brand, price, onClick, label, onShoppingCar }) => {

    console.log(onShoppingCar);
    const [value20, setValue20] = useState(50);

    return (
        <div className='row-2'>
            <Card style={{ width: "30rem" }} title={name} subTitle={brand}>
                <div className="product">
                    <span>
                        {`$${price}`}
                    </span>
                    {
                        onShoppingCar ==='agregado' ?
                            <div className="field col-12 md:col-3">
                                <label htmlFor="minmax-buttons">Min-Max Boundaries</label>
                                <InputNumber inputId="minmax-buttons" value={value20} onValueChange={(e) => setValue20(e.value)} mode="decimal" showButtons min={0} max={100}/>
                            </div>
                            :
                            <Button className='ml-2' label={'buy'} onClick={onClick}/>
                    }
                </div>
            </Card>
        </div>
    )

}
