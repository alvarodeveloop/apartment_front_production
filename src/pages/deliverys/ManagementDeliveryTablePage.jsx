import React, { useState, useEffect, useMemo, useRef } from 'react'
import PropTypes from 'prop-types'
import Table from 'components/Table'
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Badge
} from 'react-bootstrap'
import * as moment from 'moment-timezone'
import axios from 'axios'
import { API_URL } from 'utils/constants'
import { NotificationManager } from 'react-notifications'
import InputField from 'components/input/InputComponent'
import InputFieldRef from 'components/input/InputComponentRef'
import { calculateDifferenceDaysBetweenDates } from 'utils/functions'
let columns_delivery = []

const ManagementDeliveryTablePage = (props) => {

  const [data, setData] = useState([])
  const [dataForm,setDataForm] = useState({
    nro_propiedad: '',
    id: '',
    id_housing_complexe: '',
    id_type_ownership : '',
    id_status: '',
    name_deputy: '',
    is_delivery_finished: false,
    show_all: false
  })

  const [statusDelivery, setStatusDelivery] = useState([])
  const [housing, setHousing] = useState([])
  const [typeOwnership, setTypeOwnership] = useState([])
  const inputRef = useRef(null)

  useEffect(() => {
    
    fetchData()
  },[])

  useMemo(() => {
    columns_delivery = [
      {
        Header: 'Número',
        accessor: 'id',
        Cell: props1 => {
          const { original } = props1.cell.row
          return (
            <Button variant="link" block={true} onClick={() => {updateRecord(original)} } size="sm">{original.id}</Button>
          )
        }
      },
      {
        Header: 'Fecha Emisión',
        accessor: props1 => [moment(props1.date_request).format('DD-MM-YYYY')],
      },
      {
        Header: 'C.Habitacional',
        accessor: props1 => [props1.housing.name]
      },
      {
        Header: 'Nro.Propiedad',
        accessor: props1 => [props1.ownership.number]
      },
      {
        Header: 'Tipo Propiedad',
        accessor: props1 => [props1.ownership.typeOwnership.name]
      },
      {
        Header: 'Módelo',
        accessor: props1 => [props1.ownership.models.name]
      },
      {
        Header: 'FechaLímite Cierre',
        accessor: props1 => props1.date_limit_close ? [moment(props1.date_limit_close).format('DD-MM-YYYY')] : '-'
      },
      {
        Header: 'Estado',
        accessor: props1 => [props1.status.status]
      },
      {
        Header: 'Fecha Solución Observaciones',
        accessor: props1 => props1.date_solution_observation ? moment(props1.date_solution_observation).format('DD-MM-YYYY') : '-'
      },
      {
        Header: 'FechaCierre Entrega',
        accessor: props1 => props1.date_close ? moment(props1.date_close).format('DD-MM-YYYY') : '-'
      },
      {
        Header: 'Días de Atraso',
        accessor: props1 => props1.days_overdue ? [props1.days_overdue] : [calculateDifferenceDaysBetweenDates( moment().tz('America/Santiago'), moment(props1.date_limit_close) ) ],
        Cell: props1 => {
          const original = props1.cell.row.original
          let days = original.days_overdue !== null && original.days_overdue !== "" ? original.days_overdue : calculateDifferenceDaysBetweenDates( moment().tz('America/Santiago'), moment(original.date_limit_close) )
          return (
            <Badge variant={days <= 0 ? 'success' : 'danger'}><span style={{fontSize: '14px'}}>{days}</span></Badge>
          )
        }
      },
      {
        Header: 'Días de Cierre',
        accessor: props1 => props1.days_close ? props1.days_close : '',
      },
      {
        Header: 'FechaEntrega Llaves',
        accessor: props1 => props1.date_delivery_key ? moment(props1.date_delivery_key).format('DD-MM-YYYY') : '-'
      },
      {
        Header: 'Días Corrección de Observaciones',
        accessor: props1 => props1.date_solution_observation ? calculateDifferenceDaysBetweenDates( moment(props1.date_solution_observation).tz('America/Santiago'), moment(props1.date_request).tz('America/Santiago') ) : []
      },
      {
        Header: 'Cantidad de Observaciones',
        accessor: props1 => [props1.failures.length]
      },
      {
        Header: 'Envío Correo Observaciones',
        accessor: props1 => props1.send_mail_observation ? ['Si'] : ['No']
      },
      {
        Header: 'Fecha Envío Observaciones',
        accessor: props1 => props1.date_mail_observation ? [moment(props1.date_mail_observation).format('DD-MM-YYYY')] : []
      },
    ]
  },[])

  const fetchData = () => {
    let promises = [
      axios.get(API_URL+'delivery'),
      axios.get(API_URL+'get_status_delivery'),
      axios.get(API_URL+'housing_complexe'),
      axios.get(API_URL+'type_ownership'),
    ]
    Promise.all(promises).then(result => {
      setData(result[0].data)
      setTypeOwnership(result[3].data)
      setStatusDelivery(result[1].data)
      setHousing(result[2].data)
    }).catch(err => {
      if(err.response){
        NotificationManager.error(err.response.data.message)
      }else{
        NotificationManager.error('Error, contacte con soporte')
      }
    })
  }

  const updateRecord = datos => {
    props.history.replace('/delivery/form/'+datos.id)
  }

  const onChange = e => {
    if(e.target.name === "show_all" || e.target.name === "is_delivery_finished"){
      setDataForm({...dataForm, [e.target.name] : e.target.checked})
    }else{
      setDataForm({...dataForm, [e.target.name] : e.target.value})
    }
  }

  const onSubmit = e => {
    e.preventDefault()
    let objectSearch = Object.assign({},dataForm)
    axios.post(API_URL+'delivery_find_by_filter',dataForm).then(result => {
      setData(result.data)
    }).catch(err => {
      if(err.response){
        NotificationManager.error(err.response.data.message)
      }else{
        NotificationManager.error('Error, contacte con soporte')
      }
    })
  }

  const goToForm = () => {
    props.history.replace('/delivery/form')
  }

  return (
    <Container fluid>
      <Row className="containerDiv">
        <Col sm={12} md={12} lg={12}>
          <Form onSubmit={onSubmit}>
            <Row>
              <InputFieldRef
                type="number"
                name="id"
                handleChange={onChange}
                value={dataForm.id}
                required={false}
                label="Nro.Entrega"
                cols="col-md-4 col-sm-4 col-lg-4"
                messageErrors={[
                  ''
                ]}
                ref={inputRef}
              />
              <InputField
                type="text"
                name="nro_propiedad"
                handleChange={onChange}
                value={dataForm.nro_propiedad}
                required={false}
                label="Nro.Propiedad"
                cols="col-md-4 col-sm-4 col-lg-4"
                messageErrors={[
                  ''
                ]}
              />
              <InputField
                type="text"
                name="name_deputy"
                handleChange={onChange}
                value={dataForm.name_deputy}
                required={false}
                label="Propietario Nombre"
                cols="col-md-4 col-sm-4 col-lg-4"
                messageErrors={[
                  ''
                ]}
              />
            </Row>
            <Row>
              <InputField
                type="select"
                name="id_housing_complexe"
                handleChange={onChange}
                value={dataForm.id_housing_complexe}
                required={false}
                label="Conjunto Habitacional"
                cols="col-md-4 col-sm-4 col-lg-4"
                messageErrors={[
                  ''
                ]}
              >
                <option value={''}>--Seleccione--</option>
                {housing.map((v,i) => (
                  <option value={v.id} key={i}>{v.name}</option>
                ))}
              </InputField>
              <InputField
                type="select"
                name="id_type_ownership"
                handleChange={onChange}
                value={dataForm.id_type_ownership}
                required={false}
                label="Tipo Propiedad"
                cols="col-md-4 col-sm-4 col-lg-4"
                messageErrors={[
                  ''
                ]}
              >
                <option value={''}>--Seleccione--</option>
                {typeOwnership.map((v,i) => (
                  <option value={v.id} key={i}>{v.name}</option>
                ))}
              </InputField>
              <InputField
                type="select"
                name="id_status"
                handleChange={onChange}
                value={dataForm.id_status}
                required={false}
                label="Estado"
                cols="col-md-4 col-sm-4 col-lg-4"
                messageErrors={[
                  ''
                ]}
              >
                <option value={''}>--Seleccione--</option>
                {statusDelivery.map((v,i) => (
                  <option value={v.id} key={i}>{v.status}</option>
                ))}
              </InputField>
            </Row>
            <Row>
              <Col sm={3} md={3} lg={3}>
                <label forhtml="is_delivery_finished">
                  <input type="checkbox" name="is_delivery_finished" id="is_delivery_finished" checked={dataForm.is_delivery_finished} onChange={onChange} />
                  &nbsp;Con Entrega de Llaves
                </label>
              </Col>
              <Col sm={3} md={3} lg={3}>
                <label forhtml="show_all">
                  <input type="checkbox" name="show_all" id="show_all" checked={dataForm.show_all} onChange={onChange} />
                  &nbsp;Mostrar Todos
                </label>
              </Col>
            </Row>
            <Row>
              <Col sm={3} md={3} lg={3}>
                <Button variant="secondary" block={true} size="sm" type="submit">Buscar</Button>
              </Col>
              <Col sm={3} md={3} lg={3}>
                <Button variant="secondary" block={true} size="sm" type="button">Exportar Entregas</Button>
              </Col>
              <Col sm={3} md={3} lg={3}>
                <Button variant="secondary" block={true} size="sm" type="button">Exportar Observaciones</Button>
              </Col>
              <Col sm={3} md={3} lg={3}>
                <Button variant="secondary" block={true} size="sm" type="button" onClick={goToForm}>Crear Entrega</Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col sm={12} md={12} lg={12}>
          <br/>
          <Row>
            <Col sm={6} md={6} lg={6}>
              <h5 className="title_principal">Listado de Entregas</h5>
            </Col>
            <Col sm={6} md={6} lg={6} className="text-right text-danger">
              <h5 className="title_principal">Total Entregas: {data.length}</h5>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <Table columns={columns_delivery} data={data} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default ManagementDeliveryTablePage
