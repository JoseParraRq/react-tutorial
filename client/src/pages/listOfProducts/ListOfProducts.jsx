import React,{ useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
//

export default function ListOfProducts() {
  return (
    <div className='container-fluid'>
          <DataTable responsiveLayout='scroll' value={''} dataKey='id'>
        <Column field='id' header='Id'></Column>
        <Column field='firstName' header='Primer Nombre'></Column>
        <Column field='surName' header='Primer Apellido'></Column>
        <Column field='email' header='Email'></Column>
        <Column header='info' body={''}></Column>

      </DataTable>
    </div>
  )
}
