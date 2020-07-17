import React, { useState, useEffect, useRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import{
  Container,
  Row,
  Col,
  Button,
  Form,
  Modal,
  Badge
} from 'react-bootstrap'
import {
  FaPlusCircle
} from 'react-icons/fa'
import 'styles/pages/requestPropertyForm.css'
import InputFieldRef from 'components/input/InputComponentRef'
import InputField from 'components/input/InputComponent'
import { toast } from 'react-toastify';
import axios from 'axios'
import { API_URL } from 'utils/constants'
import Table from 'components/Table'
import * as moment from 'moment-timezone'
import { following_columns } from 'utils/columns/followingColumns'
import { calculateDifferenceDaysBetweenDates } from 'utils/functions'
import { s2ab } from 'utils/functions'
import { saveAs } from 'file-saver'
import * as xlsx from 'xlsx'
let columns_table = []

const ManagementSolicitudePropertySSPage = (props) => {

  const [data, setData] = useState({
    id_reason_close: '',
    nro_ballot: '',
    to: '',
    from: '',
    id_status: '',
    id_priority: '',
    id_housing_complexe: '',
    number_ownership: '',
    number_ss: '',
    radio_option: '',
  })

  const [validated,setValidated] = useState(false)
  const [status, setStatus] = useState([])
  const [priorities, setPriorities] = useState([])
  const [housings, setHousings] = useState([])
  const [reasonClose, setReasonClose] = useState([])
  const [ownerships, setOwnerships] = useState([])
  const [showMessage,setShowMessage] = useState(false)
  const [followings,setFollowings] = useState([])
  const [isOpenModal,setIsOpenModal] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {

    fetchData()
    //inputRef.current.focus()
    return () => {
      columns_table = []
    }
  },[])

  useMemo(() => {
    columns_table = [
      {
        Header: 'Nro.SS',
        accessor: 'id',
        Cell: props1 => {

          const { original } = props1.cell.row

          return(
            <Button variant="link" block={true} onClick={() => modifyRegister(original)}>{original.id}</Button>
          )
        }
      },
      {
        Header: 'FechaEmisión',
        accessor: props1 => [moment(props1.date_request).format('DD-MM-YYYY')]
      },
      {
        Header: 'Proyecto',
        accessor: props1 => [props1.housing.name]
      },
      {
        Header: 'Cliente',
        accessor: props1 => props1.client ? [props1.client.name+' '+props1.client.last_names] : []
      },
      {
        Header: 'Depto.',
        accessor: props1 => [props1.ownership.number],
        Cell: props1 => {
          const original = props1.cell.row.original.ownership
          const total = calculateDifferenceDaysBetweenDates(moment().tz('America/Santiago'),moment(original.date_inscription_conservative),'year')
          if( total < 3){
            return original.number
          }else if(total >= 3 && total < 5){
            return (<Badge variant="danger" className="font-badge">{original.number}</Badge>)
          }else{
            return (<Badge variant="dark" className="font-badge">{original.number}</Badge>)
          }
        }
      },
      {
        Header: 'Módelo',
        accessor: props1 => [props1.ownership.models.name]
      },
      {
        Header: 'Prioridad',
        accessor: props1 => [props1.priority.name]
      },
      {
        Header: 'Nro.Papeleta',
        accessor: props1 => props1.nro_ballot ? [props1.nro_ballot] : []
      },
      {
        Header: 'Estado',
        accessor: props1 => [props1.status.status],
        Cell : props1 => {
          const original = props1.cell.row.original
          if(original.failures.length === 0){
            return (<Badge variant="warning" className="font-badge">{original.status.status}</Badge>)
          }else{
            return original.status.status
          }
        }

      },
      {
        Header: 'Fecha Inspección',
        accessor: props1 => props1.date_inspection ? [moment(props1.date_inspection).format('DD-MM-YYYY')] : []
      },
      {
        Header: 'Días Inspección',
        accessor: props1 => props1.date_inspection ? [calculateDifferenceDaysBetweenDates(moment(props1.date_inspection),moment(props1.date_request))] : []
      },
      {
        Header: 'Fecha Ejecución',
        accessor: props1 => props1.date_execution ? [moment(props1.date_execution).format('DD-MM-YYYY')] : []
      },
      {
        Header: 'Fecha(N/C/A)',
        accessor: props1 => props1.date_close ? [moment(props1.date_close).format('DD-MM-YYYY')] : []
      },
      {
        Header: 'Días Cierre',
        accessor: props1 => props1.date_close ? [calculateDifferenceDaysBetweenDates(moment(props1.date_close),moment(props1.date_execution))] : []
      },
      {
        Header: 'Total Días',
        accessor: props1 => props1.date_close ? [calculateDifferenceDaysBetweenDates(moment(props1.date_close),moment(props1.date_request))] : []
      },
      {
        Header: 'Total Presupuesto',
        accessor: props1 => [],
        Cell: props1 => {
          const original = props1.cell.row.original
          let total = 0
          original.failures.forEach((v, i) => {
            total+= parseFloat(v.material_cost) + parseFloat(v.workforce_cost) + parseFloat(v.third_party_cost)
          });
          return total
        }
      },
      {
        Header: 'Seguimiento',
        Cell: props1 => {
          const {original} = props1.cell.row
          return (
            <Button variant="secondary" block={true} size="sm" onClick={() => displayFollowings(original.followings)}><FaPlusCircle /></Button>
          )
        }
      },
    ]
  },[])

  const openModalFollowing = () => {
    setIsOpenModal(!isOpenModal)
  }
  const displayFollowings = dataFollow => {
      setFollowings(dataFollow)
      openModalFollowing()
  }

  const fetchData = () => {
    let promises = [
      axios.get(API_URL+'get_status'),
      axios.get(API_URL+'params_service_priority'),
      axios.get(API_URL+'housing_complexe'),
      axios.get(API_URL+'params_service_reason_close_to_finish'),
      axios.get(API_URL+'ownership_ss'),
    ]

    Promise.all(promises).then(result => {

      setStatus(result[0].data)
      setPriorities(result[1].data)
      setHousings(result[2].data)
      setReasonClose(result[3].data)
      setOwnerships(result[4].data)
      console.log(result[4].data,'aqioo');
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        console.log(err);
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setShowMessage(true)
    let objectPost = Object.assign({},data)
    axios.post(API_URL+'ownership_ss_by_filter',objectPost).then(result => {
      setOwnerships(result.data)
      setShowMessage(false)
    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        toast.error('Error, contacte con soporte')
      }
    })
  }

  const onChange = e => {
    if(e.target.name === 'radio_option'){
      let val = e.target.value === 'true' ? true : false
      setData({...data, [e.target.name] : val})
    }else{
      setData({...data, [e.target.name] : e.target.value})
    }
  }

  const modifyRegister = dataUpdate => {
    props.history.replace('/request/property/managment/form/'+dataUpdate.id)
  }

  const exportToExcel = () => {

    let wb = xlsx.utils.book_new()
    let bodyTable = [['Nr.SS','Fecha Emisión','Proyecto','Cliente','Depto.','Modelo','Prioridad','Nro.Papeleta','Estado','Motivo Cierre','Fecha Inspección','Días Diferencia','Fecha Ejecución','Fecha(N/C/A)','Días Diferencia','Total Días','Total Presupuesto']]

    wb.Props = {
      Title: "Reporte de Solicitudes de Propiedad",
      Subject: "Exportación de Data",
      Author: 'Veanx tecnology',
      CreatedDate: moment().format('YYYY-MM-DD')
    };
    wb.SheetNames.push("Seguimientos");
    let total_workforce_cost = 0

    ownerships.forEach((v,i) => {

      v.failures.forEach((item, i) => {
        total_workforce_cost+= parseFloat(item.material_cost) + parseFloat(item.workforce_cost) + parseFloat(item.third_party_cost)
      });

      bodyTable.push([
        v.id,
        moment(v.date_request).format('DD-MM-YYYY'),
        v.housing.name,
        v.client ? v.client.name+' '+v.client.last_names : '',
        v.ownership.number,
        v.ownership.models.name,
        v.priority.name,
        v.nro_ballot,
        v.status.status,
        v.reason_close ? v.reason_close.name : '',
        v.date_inspection ? moment(v.date_inspection).format('DD-MM-YYYY') : '',
        v.date_inspection ? calculateDifferenceDaysBetweenDates(moment(v.date_inspection),moment(v.date_request)) : '',
        v.date_execution ? moment(v.date_execution).format('DD-MM-YYYY') : '',
        v.date_close ? moment(v.date_close).format('DD-MM-YYYY') : '',
        v.date_close ? calculateDifferenceDaysBetweenDates(moment(v.date_close),moment(v.date_execution)) : '',
        v.date_close ? calculateDifferenceDaysBetweenDates(moment(v.date_close),moment(v.date_request)) : '',
        total_workforce_cost,
      ])
      total_workforce_cost = 0
    })

    var ws = xlsx.utils.aoa_to_sheet(bodyTable);
    wb.Sheets["Seguimientos"] = ws;
    var wbout = xlsx.write(wb, {bookType:'xlsx',  type: 'binary'});
    let datos1 = s2ab(wbout)
    saveAs(new Blob([datos1],{type:"application/octet-stream"}), 'Reporte de Seguimientos'+moment().format('DD-MM-YYYY')+'.xlsx')

  }

  return (
    <Container fluid={true}>
      <Row className="containerDiv">
        <Col sm={12} md={12} lg={12}>
          <Row className="">
            <Col sm={12} md={12} lg={12}>
              <h4 className="text-center title_principal">Gestión Solicitudes de Servicio</h4>
              <hr/>
            </Col>
          </Row>
          <Form onSubmit={handleSubmit} noValidate validated={validated}>
            <Row>
                <InputFieldRef
                  {...props.inputSS}
                  value={data.number_ss}
                  handleChange={onChange}
                  ref={inputRef}
                />
                <InputField
                  {...props.inputProperty}
                  value={data.number_ownership}
                  handleChange={onChange}
                />
                <InputField
                  {...props.inputProyect}
                  value={data.id_housing_complexe}
                  handleChange={onChange}
                >
                  <option value=''>--Seleccione--</option>
                    {housings.map((v,i) => (
                      <option value={v.id} key={i}>{v.name}</option>
                    ))}
                </InputField>
              </Row>
                <Row>
                  <InputField
                    {...props.inputPriority}
                    value={data.id_priority}
                    handleChange={onChange}
                  >
                    <option value=''>Todas...</option>
                    {priorities.map((v,i) => (
                      <option value={v.id} key={i}>{v.name}</option>
                    ))}
                  </InputField>
                  <InputField
                    {...props.inputStatus}
                    value={data.id_status}
                    handleChange={onChange}
                  >
                    <option value=''>Todas...</option>
                    {status.map((v,i) => (
                      <option key={i} value={v.id}>{v.status}</option>
                    ))}
                  </InputField>
                  <InputField
                    {...props.inputFrom}
                    value={data.from}
                    handleChange={onChange}
                  />
                </Row>
                <Row>
                  <InputField
                    {...props.inputTo}
                    value={data.to}
                    handleChange={onChange}
                  />
                  <InputField
                    {...props.inputNumberPapeleta}
                    value={data.nro_ballot}
                    handleChange={onChange}
                  />
                  <InputField
                    {...props.inputReasonClose}
                    value={data.id_reason_close}
                    handleChange={onChange}
                  >
                    <option value=''>Todos...</option>
                    {reasonClose.map((v,i) => (
                      <option value={v.id} key={i}>{v.name}</option>
                    ))}
                  </InputField>
                </Row>
                <Row>
                  <Col sm={3} md={3} lg={3}>
                    <label forhtml="radio_option">
                      <input id="radio_option" type="radio" name="radio_option" value={true} checked={data.radio_option === true} onChange={onChange}/>
                      &nbsp;Mostrar Todos
                    </label>
                  </Col>
                  <Col sm={3} md={3} lg={3}>
                    <label forhtml="radio_option1">
                      <input id="radio_option1" type="radio" name="radio_option" value={false} checked={data.radio_option === false} onChange={onChange}/>
                      &nbsp;Fallas Cerradas OK (PVC)
                    </label>
                  </Col>
                  <Col sm={6} md={6} lg={6}>
                    <Row>
                      <Col sm={12} md={12} lg={12}>
                        Garantías Vencidas de Propiedad
                      </Col>
                    </Row>
                    <br/>
                    <Row>
                      <Col sm={6} md={6} lg={6}>
                        <Row>
                          <Col sm={6} md={6} lg={6}>
                            <div className="div_garanty_1"></div>
                          </Col>
                          <Col sm={6} md={6} lg={6}>
                            3 años
                          </Col>
                        </Row>
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <Row>
                          <Col sm={6} md={6} lg={6}>
                            <div className="div_garanty_2"></div>
                          </Col>
                          <Col sm={6} md={6} lg={6}>
                            5 o 10 años
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
            <Row>
              <Col sm={3} md={3} lg={3}>
                <Button size="sm" type="submit" variant="secondary" block={true}>Buscar</Button>
              </Col>
              <Col sm={3} md={3} lg={3}>
                <Button size="sm" type="button" variant="secondary" block={true} onClick={exportToExcel}>Exportar a Excel</Button>
              </Col>
            </Row>
            {
              showMessage ? (
                <Row>
                  <Col sm={12} md={12} lg={12}>
                    <br/>
                    <p className="alert alert-info text-center">Cargado Registros...</p>
                  </Col>
                </Row>
              ) : ''
            }
          </Form>
          <br/>
          <Row>
            <Col sm={6} md={6} lg={6}>
              <h5 className="title_principal">Listado de S.S</h5>
            </Col>
            <Col sm={1} md={1} lg={1} className="div_garanty_3">

            </Col>
            <Col sm={2} md={2} lg={2}>
              Fallas Ok
            </Col>
            <Col sm={3} md={3} lg={3}>
              <h5 className="title_principal text-right">N° de Registros: {ownerships.length}</h5>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <Table columns={columns_table} data={ownerships} displayPaginationUp={true} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Modal
        show={isOpenModal}
        onHide={openModalFollowing}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop='static'
      >
        <Modal.Header closeButton style={{ backgroundColor: 'black', color: 'white'}}>
          <Modal.Title id="contained-modal-title-vcenter">
             Seguimientos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <Table columns={following_columns} data={followings} letrasChicas={true}/>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button size="sm" variant="danger" onClick={openModalFollowing}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

ManagementSolicitudePropertySSPage.defaultProps = {
  inputSS:{
    type: 'text',
    required: false,
    name: 'number_ss',
    label : 'Número SS:',
    messageErrors: [],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputProperty:{
    type: 'text',
    required: false,
    name: 'number_ownership',
    label : 'Propiedad Número:',
    messageErrors: [],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputProyect:{
    type: 'select',
    required: false,
    name: 'id_housing_complexe',
    label : 'Proyecto:',
    messageErrors: [],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputPriority:{
    type: 'select',
    required: false,
    name: 'id_priority',
    label : 'Prioridad:',
    messageErrors: [],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputStatus:{
    type: 'select',
    required: false,
    name: 'id_status',
    label : 'Estado:',
    messageErrors: [],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputFrom:{
    type: 'date',
    required: false,
    name: 'from',
    label : 'Desde:',
    messageErrors: [],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputTo:{
    type: 'date',
    required: false,
    name: 'to',
    label : 'Hasta:',
    messageErrors: [],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputNumberPapeleta:{
    type: 'number',
    required: false,
    name: 'nro_ballot',
    label : 'N° Papeleta:',
    messageErrors: [],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputReasonClose:{
    type: 'select',
    required: false,
    name: 'id_reason_close',
    label : 'Motivo de Cierre:',
    messageErrors: [],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
}

export default ManagementSolicitudePropertySSPage
