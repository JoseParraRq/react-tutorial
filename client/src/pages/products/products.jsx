import React, { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Product } from '../../features/products/components/product/Product';
import ListProducts from '../../features/products/components/listProducts/ListProducts';
//

export default function Products() {
  const [shoppingCar, setShoppingCar] = useState([]);

  const addProductToShoppingCar = (product) => {
    console.log(product);
    setShoppingCar([...shoppingCar, product])
  }

  const products = [
    { id: 1, name: "monitor", brand: "benq", price: 5 },
    { id: 2, name: "mouse", brand: "Asus", price: 5 }
  ]

  return (
    <div>

      <div>
      <ListProducts products={products} addShoppingCar={addProductToShoppingCar}/>
      </div>

      <div>

      </div>
    </div>

  )
}
