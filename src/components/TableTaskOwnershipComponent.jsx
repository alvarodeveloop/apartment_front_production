import React, {useState, useEffect, useMemo} from 'react'
import PropTypes from 'prop-types'
import Table from './Table'
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  DropdownButton,
  Dropdown,
  Badge
} from 'react-bootstrap'
import {
  FaBook
} from 'react-icons/fa'
import * as moment from 'moment-timezone'

let columns = []
let columns_encargado = []
const TableTaskOwnershipComponent = (props) => {

  const [openModalEncargados, setOpenModalEncargados] = useState(false)
  const [displayWorkers,setDisplayWorkers] = useState([])
  useMemo(() => {
    columns = [
      {
        Header: 'Fecha_Creación',
        accessor: props1 => [moment(props1.createdAt).format('DD-MM-YYYY')]
      },
      {
        Header: 'Nro.SS',
        accessor: 'id_ownership_ss'
      },
      {
        Header: 'Tarea',
        accessor: props1 => [props1.task.name]
      },
      {
        Header: 'Solicitud Material',
        accessor: 'solicitude'
      },
      {
        Header: 'Descripción',
        accessor: 'description'
      },
      {
        Header: 'Fecha_Inicial',
        accessor: props1 => [moment(props1.initial_date).format('DD-MM-YYYY')]
      },
      {
        Header: 'Bloque Inicial',
        accessor: props1 => [props1.block_initial.block]
      },
      {
        Header: 'Fecha_Final',
        accessor: props1 => [moment(props1.final_date).format('DD-MM-YYYY')]
      },
      {
        Header: 'Bloque Final',
        accessor: props1 => [props1.block_final.block]
      },
      {
        Header: 'Status',
        accessor: props1 => props1.status == 1 ? ['Pendiente'] : ['Cerrada']
      },
      {
        Header: 'Fecha_Cierre',
        accessor: props1 => props1.date_close ? [moment(props1.date_close).format('DD-MM-YYYY')] : []
      },
      {
        Header: 'Razón_Cierre',
        accessor: 'reason_close'
      },
      {
        Header: 'Acciones',
        Cell: props1 => {

          const original = props1.cell.row.original

          return (
            <DropdownButton id={'drop'+original.id} title="Seleccione"  block="true" size="sm">
              <Dropdown.Item onClick={() => seeEncargados(original.workers)}>Ver Encargados</Dropdown.Item>
              <Dropdown.Item onClick={() => showSS(original.id_ownership_ss) }>Ver S.S</Dropdown.Item>
            </DropdownButton>
          )
        }
      },
    ]

    columns_encargado = [
      {
        Header: 'Tipo',
        accessor: props1 => props1.id_personal ? ['Personal'] : ['Contratista'],
        Cell: props1 => {
          const original = props1.cell.row.original
          let type = original.id_personal ? 'Personal' : 'Contratista'
          return(
            <Badge variant="danger" className="font-badge">{type}</Badge>
          )
        }
      },
      {
        Header: 'Rut',
        accessor: props1 => props1.id_personal ? [props1.personal.rut] : [props1.contractor.rut]
      },
      {
        Header: 'Nombre',
        accessor: props1 => props1.id_personal ? [props1.personal.name+' '+props1.personal.last_names] : [props1.contractor.name]
      },
      {
        Header: 'Email',
        accessor: props1 => props1.id_personal ? [props1.personal.email] : [props1.contractor.email]
      },
      {
        Header: 'Teléfono1',
        accessor: props1 => props1.id_personal ? [props1.personal.phone1] : [props1.contractor.phone1]
      },
      {
        Header: 'Teléfono2',
        accessor: props1 => props1.id_personal ? [props1.personal.phone2] : [props1.contractor.phone2]
      },
      {
        Header: 'Dirección',
        accessor: props1 => props1.id_personal ? [props1.personal.address] : [props1.contractor.address]
      },
    ]
  },[])

  const showSS = id => {
    props.history.replace('/request/property/managment/form/'+id)
  }

  const onHideModal = () => {
    setOpenModalEncargados(!openModalEncargados)
  }

  const seeEncargados = workers => {
    setDisplayWorkers(workers)
    onHideModal()
  }

  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <Table data={props.data} columns={columns} />
        </Col>
      </Row>
      <Modal
        show={openModalEncargados}
        onHide={onHideModal}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop='static'
      >
        <Modal.Header closeButton style={{ backgroundColor: 'black', color: 'white'}}>
          <Modal.Title id="contained-modal-title-vcenter">
             Encargados <FaBook />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table columns={columns_encargado} data={displayWorkers}/>
        </Modal.Body>
      </Modal>
    </Container>
  )
}

TableTaskOwnershipComponent.propTypes = {
  data : PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
}

export default TableTaskOwnershipComponent
