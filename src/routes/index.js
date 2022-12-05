import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListOfProducts from '../pages/listOfProducts/ListOfProducts';
import ListOfUsers from '../pages/listOfUsers/ListOfUsers';
import RegisterProduct from '../pages/registerProducts/RegisterProduct';
import RegisterUser from '../pages/registerUser/RegisterUser';
import UpdateUser from '../pages/updateUser/UpdateUser.jsx';

function RoutesApp(props) {
  return (
    <Routes>
      <Route path='/product/registerProduct' element={<RegisterProduct/>} />
      <Route path='/' element={<ListOfUsers/>} />
      <Route path='/user/registerUser' element={<RegisterUser/>}/>
      <Route path='/user/updateUser/:id' element={<UpdateUser/>}/>
    </Routes>
  )
}

export default RoutesApp;