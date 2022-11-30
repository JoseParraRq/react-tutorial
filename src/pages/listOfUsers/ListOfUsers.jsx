import React, { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';
import {getAllUsers} from '../../services/userService';


export default function ListOfUsers() {
  // const url = 'http://localhost:3000/getAllUsers';
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userDetail, setUserDetail] = useState(false);
  const [userType,setUserType] = useState(null);
  // const apiRest = async () => {
  //   const response = await fetch(url);
  //   const responseJson = await response.json();
  //   const { data } = responseJson;

  //   setLoading(true);
  //   setUsers(data[0].users);
  // }

  // useEffect(() => {//es un hoook que ejecuta
  //   apiRest()
  // }, [])

  // const test = getAllUsers().then(data=>console.log(data));

  useEffect(() => {//es un hoook que ejecuta
    getAllUsers().then(response => setUsers(response));//llamo a el servicio de obtener todos los usuarios y seteo users para mostrarlos en la lista
    setLoading(true);
  }, [])

const showUserDetail = (user) =>{
  console.log("here the user into the user detail function",user.userType.name);
  setUserType(user.userType.name);
  setUserDetail(user)
  setShowModal(true);  
}

const showUserRowData = (rowData) =>{
return <Button className="p-button-outlined" type='button' icon="pi pi-user" 
onClick={()=>{showUserDetail(rowData)}}/>
} 

  return (
    <div>
   <DataTable responsiveLayout='scroll' value={users} dataKey='id'>
        <Column  field='id' header='Id'></Column>
        <Column field='firstName' header='Primer Nombre'></Column>
        <Column field='surName' header='Primer Apellido'></Column>
        <Column field='email' header='Email'></Column>
        <Column header='info' body={showUserRowData}></Column>
      
    </DataTable>
    {/* <Dialog onHide={()=>{setShowModal(false)}} modal visible={showModal}><h1>{userDetail.firstName}</h1> </Dialog>sirve para crear Modales */}
    <Dialog onHide={()=>{setShowModal(false)}} modal visible={showModal}>
      <div className='container-fluid'>
      <table className="table table-responsive">
    <thead>
        <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Sur Name</th>
            <th>Email</th>
            <th>UserType</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{userDetail.id}</td>
            <td>{userDetail.firstName}</td>
            <td>{userDetail.SurName}</td>
            <td>{userDetail.email}</td>
            <td>{userType}</td>

        </tr>
    </tbody>
</table>

      </div>  
      </Dialog>
    </div>
  )
}
