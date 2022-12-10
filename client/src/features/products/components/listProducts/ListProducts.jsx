import React from 'react'
import { Product } from '../product/Product';

export default function ListProducts({ products, addShoppingCar, onShoppingCar}) {

    console.log(onShoppingCar);
    return (
        <div className='container-fluid'>
            <h1>List Products</h1>
            {products.map((product) => (
                <Product key={product.id} name={product.name} brand={product.brand} price={product.price} 
                onClick={()=>{addShoppingCar(product)}} onShoppingCar={onShoppingCar? "agregado":"no Agregado"} />
            )
            )}
        </div>
    )
}


