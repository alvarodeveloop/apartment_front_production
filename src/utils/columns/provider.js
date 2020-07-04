import React from 'react'

export let providerColumns = [{
    Header: 'Proveedores Registrados',
    columns: [
      {
        Header: 'Nombre',
        accessor: 'name_fantasy',
      },
      {
        Header: 'Rut',
        accessor: 'rut_provider',
      },
      {
        Header: 'Teléfono',
        accessor: 'phone',
      },
      {
        Header: 'Spin',
        accessor: 'spin',
      },
    ]
}]

export let providerRepresentColumns = [{
  Header: 'Representantes Registrados',
  columns: [
    {
      Header: 'Nombre',
      accessor: 'name_contact',
    },
    {
      Header: 'Cargo',
      accessor: 'position',
    },
    {
      Header: 'Teléfono',
      accessor: 'phone',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
  ]
}]
