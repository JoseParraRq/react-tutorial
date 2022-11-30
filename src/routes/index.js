import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListOfProducts from '../pages/listOfProducts/ListOfProducts';
import ListOfUsers from '../pages/listOfUsers/ListOfUsers';
import RegisterProduct from '../pages/registerProducts/RegisterProduct';
import RegisterUser from '../pages/registerUser/RegisterUser';

function RoutesApp(props) {
  return (
    <Routes>
      <Route path='/' element={<ListOfProducts/>} />
      <Route path='/product/registerProduct' element={<RegisterProduct/>} />
      <Route path='/user/listOfUsers' element={<ListOfUsers/>} />
      <Route path='/user/registerUser' element={<RegisterUser/>}/>
    </Routes>
  )
}

export default RoutesApp;