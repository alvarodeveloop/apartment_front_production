import React from 'react'
import * as moment from 'moment-timezone'
import {Badge} from 'react-bootstrap'

export const following_columns_failure = [
  {
    Header: 'Nro',
    accessor: 'id',
    Cell: props1 => {
      return <Badge variant="danger" style={{ fontSize: '14px'}}>{props1.cell.row.original.id}</Badge>
    }
  },
  {
    Header: 'Fecha',
    accessor: props1 => [moment(props1.createdAt).format('DD-MM-YYYY hh:mm:ss')]
  },
  {
    Header: 'Autor',
    accessor: props1 => [props1.user.email]
  },
  {
    Header: 'Detalle',
    accessor: 'detail',
    Cell: props1 => {
      const { original } = props1.cell.row
      if(original.detail.indexOf('/') === -1){
        return original.detail.split('@').map((v,i) => (
          <div style={{width: '100%'}}>
            {v}
            <hr/>
          </div>
        ))
      }else{
        return original.detail.split('/').map((v,i) => (
          <div style={{width: '100%'}}>
            {v}
            <br/>
          </div>
        ))
      }
    }
  },
  {
    Header: 'Privado',
    accessor: props1 => props1.is_private ? ['Si'] : ['No']
  },
  {
    Header: 'Documento',
    accessor: props1 => ['-']
  },
]

export const following_columns = [
  {
    Header: 'Nro',
    accessor: 'id',
    Cell: props1 => {
      return <Badge variant="danger" style={{ fontSize: '14px'}}>{props1.cell.row.original.id}</Badge>
    }
  },
  {
    Header: 'Fecha',
    accessor: props1 => [moment(props1.createdAt).format('DD-MM-YYYY hh:mm:ss')]
  },
  {
    Header: 'Autor',
    accessor: props1 => [props1.user.email]
  },
  {
    Header: 'Detalle',
    accessor: 'detail',
    Cell: props1 => {
      const { original } = props1.cell.row
      if(original.detail.indexOf('/') !== -1){
        return original.detail.split('/').map((v,i) => (
          <div style={{width: '100%'}}>
            {v}
            <br/>
          </div>
        ))
      }else{
        return original.detail.split('@').map((v,i) => (
          <div style={{width: '100%'}}>
            {v}
            <br/>
          </div>
        ))
      }
    }
  },
  {
    Header: 'Privado',
    accessor: props1 => props1.is_private ? ['Si'] : ['No']
  },
  {
    Header: 'Documento',
    accessor: props1 => ['-']
  },
]
