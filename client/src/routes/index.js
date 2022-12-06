import React from 'react'
import { Route, Routes } from 'react-router-dom'

import ListOfUsers from '../pages/listOfUsers/ListOfUsers';
import Products from '../pages/products/products';
import RegisterProduct from '../pages/registerProducts/RegisterProduct';
import RegisterUser from '../pages/registerUser/RegisterUser';
import UpdateUser from '../pages/updateUser/UpdateUser.jsx';

function RoutesApp(props) {
  return (
    <Routes>
      <Route path='/products' element={<Products/>} />
      <Route path='/product/registerProduct' element={<RegisterProduct />} />
      <Route path='/' element={<ListOfUsers />} />
      <Route path='/user/registerUser' element={<RegisterUser />} />
      <Route path='/user/updateUser/:id' element={<UpdateUser />} />
    </Routes>
  )
}

export default RoutesApp;