import React, { useEffect, useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import{
  Container,
  Row,
  Col,
  Button,
  Tabs,
  Tab
} from 'react-bootstrap'
import Table from 'components/Table'
import {
  FaFolderOpen,
  FaFileAlt
} from 'react-icons/fa'
import axios from 'axios'
import InputFieldRef from 'components/input/InputComponentRef'
import { API_URL } from 'utils/constants'
import { toast } from 'react-toastify'
import FileSaver from 'file-saver'
import * as moment from 'moment-timezone'
let columns_general = []
let columns_propiedad = []

const DownloadOwnershipPage = (props) => {
  const [fileHousing, setFileHousing] = useState([])

  useEffect(() => {
    fetchData()
  },[props.id_ownership_selected])

  useMemo(() => {
    columns_general = [
      {
        Header: 'Archivo',
        accessor: 'name'
      },
      {
        Header: 'Creación',
        accessor: props1 => [moment(props1.createdAt).format('DD-MM-YYYY')]
      },
      {
        Header: 'Acción',
        Cell: props1 => {
          const original = props1.cell.row.original
          return (
            <Button variant="danger" block={true} size="sm" type="button" onClick={() => downloadFileHousing(original)}>Descargar</Button>
          )
        }
      },
    ]

    columns_propiedad = [
      {
        Header: 'Archivo',
        accessor: props1 => [props1.ownership.file]
      },
      {
        Header: 'Creación',
        accessor: props1 => props1.ownership.date_file ? [moment(props1.ownership.date_file).format('DD-MM-YYYY')] : ['']
      },
      {
        Header: 'Acción',
        Cell: props1 => {
          const original = props1.cell.row.original.ownership
          if(original.file){
            return (
              <Button variant="danger" block={true} size="sm" type="button" onClick={() => downloadOwnershipFile(original)}>Descargar</Button>
            )
          }else{
            return ''
          }
        }
      },
    ]
  },[])

  const downloadFileHousing = original => {
    axios.get(API_URL+'housing_complexe_download_file/'+original.id,{
      responseType: 'blob'
    }).then(result => {
      FileSaver.saveAs(result.data,original.name)
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        console.log(err);
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const fetchData = () => {
    axios.get(API_URL+'housing_complexe_file_by_ownership/'+props.id_ownership_selected).then(result => {
      setFileHousing(result.data)
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        console.log(err);
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const downloadOwnershipFile = original => {
    axios.get(API_URL+'ownership_download_file/'+original.id,{
      responseType: 'blob'
    }).then(result => {
      FileSaver.saveAs(result.data,original.file)
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        console.log(err);
        toast.error('Error, contacte con soporte')
      }
    })
  }

  return (
    <Container>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <Tabs defaultActiveKey="general" id="uncontrolled-tab-example" variant="pills" className="nav nav-tabs nav-fill">
            <Tab eventKey="general" title="Archivos Comunes" key={'areas'}>
              <br/>
              <Table columns={columns_general} data={fileHousing} />
            </Tab>
            <Tab eventKey="propiedad" title="Archivos Propiedad" key={'propiedades'}>
              <br/>
              <Table columns={columns_propiedad} data={[props.ownership]} />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  )
}

function mapDispatchToProps(state){

  return {
    id_ownership_selected: state.ownership.ownership_selected,
    ownership : state.ownership.ownerships.find(v => v.id_ownership == state.ownership.ownership_selected),
    user: state.auth.user
  }
}

export default connect(mapDispatchToProps,{})(DownloadOwnershipPage)
