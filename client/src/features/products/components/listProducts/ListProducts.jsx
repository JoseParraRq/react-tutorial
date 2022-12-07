import React from 'react'
import { Product } from '../product/Product';

export default function ListProducts({ products, addShoppingCar }) {

    return (
        <div className='container-fluid'>
            <h1>List Products</h1>
            {products.map(({ id, name, brand, price }) => (
                <Product key={id} name={name} brand={brand} price={price} onClick={addShoppingCar} />
            )
            )}
        </div>
    )
}


