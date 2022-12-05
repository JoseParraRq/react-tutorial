import React, { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { getAllUsers } from '../../features/services/userService';
import { Link} from 'react-router-dom';

export default function ListOfUsers() {

  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userDetail, setUserDetail] = useState(false);
  const [userType, setUserType] = useState(null);

  useEffect(() => {//es un hoook que ejecuta
    getAllUsers().then(response => setUsers(response));//llamo a el servicio de obtener todos los usuarios y seteo users para mostrarlos en la lista
    setLoading(true);
  }, [])

  const showUserDetail = (user) => {
    console.log("here the user into the user detail function", user.userType.name);
    setUserType(user.userType.name);
    setUserDetail(user)
    setShowModal(true);
  }

  const showUserRowData = (rowData) => {
    return <Button className="p-button-outlined" type='button' icon="pi pi-user"
      onClick={() => { showUserDetail(rowData) }} />
  }

  return (
    <div>
      
      <Link to ={'/user/registerUser'}>
      <Button className="p-button-outlined" type='button' icon="pi pi-user-plus" label='createUser'/>
      </Link> 
    
      <DataTable responsiveLayout='scroll' value={users} dataKey='id'>
        <Column field='id' header='Id'></Column>
        <Column field='firstName' header='Primer Nombre'></Column>
        <Column field='surName' header='Primer Apellido'></Column>
        <Column field='email' header='Email'></Column>
        <Column header='info' body={showUserRowData}></Column>

      </DataTable>
      <Dialog onHide={() => { setShowModal(false) }} modal visible={showModal}>
        <div className='container-fluid'>
      <Link to = {`/user/updateUser/${userDetail.id}`}>
      <Button className="p-button-outlined" type='button' icon="pi pi-pencil"/>
      </Link>
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
