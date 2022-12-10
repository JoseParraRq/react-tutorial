import React from 'react'
import { Route, Routes } from 'react-router-dom'


import ListOfUsers from '../pages/listOfUsers/ListOfUsers';
import Products from '../pages/products/products';
import RegisterProduct from '../pages/registerProducts/RegisterProduct';
import RegisterUser from '../pages/registerUser/RegisterUser';
import UpdateUser from '../pages/updateUser/UpdateUser.jsx';
import { EntradaTexto } from '../shared/components/atoms/entradaTexto/EntradaTexto';
import TextArea from '../shared/components/atoms/textArea/TextArea';


function RoutesApp(props) {
  return (
    <Routes>
      <Route path='/product/registerProduct' element={<RegisterProduct/>} />
      <Route path='/' element={<ListOfUsers/>} />
      <Route path='/user/registerUser' element={<RegisterUser/>}/>
      <Route path='/user/updateUser/:id' element={<UpdateUser/>}/>
      <Route path='/inputText' element={<EntradaTexto/>}/>
      <Route path='/textArea' element={<TextArea/>}/>
      {/* <Route path='/formTest' element={<FormTest/>}/> */}
      <Route path='/products' element={<Products/>}/>



    </Routes>
  )
}

export default RoutesApp;