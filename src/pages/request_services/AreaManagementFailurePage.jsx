import React, { useState, useEffect, useRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import{
  Container,
  Row,
  Col,
  Button,
  Form,
  Modal
} from 'react-bootstrap'
import 'styles/pages/requestPropertyForm.css'
import InputFieldRef from 'components/input/InputComponentRef'
import InputField from 'components/input/InputComponent'
import { toast } from 'react-toastify';
import axios from 'axios'
import { API_URL } from 'utils/constants'
import Table from 'components/Table'
import * as moment from 'moment-timezone'
import { following_columns_failure } from 'utils/columns/followingColumns'
import { showPriceWithDecimals } from 'utils/functions'
import { s2ab } from 'utils/functions'
import { saveAs } from 'file-saver'
import * as xlsx from 'xlsx'
let columns_table = []

const AreaManagementFailurePage = (props) => {

  const [data, setData] = useState({
    id_reason_close: '',
    nro_ballot: '',
    to: '',
    from: '',
    id_status_ss: '',
    id_priority: '',
    id_housing_complexe: '',
    number_ownership: '',
    number_ss: '',
    radio_option: '',
    id_precint: '',
    id_status_failure: '',
    id_reason_failure: '',
    id_tipology_failure: '',
    id_point_failure:'',
  })

  const [validated,setValidated] = useState(false)
  const [status, setStatus] = useState([])
  const [statusFailure,setStatusFailure] = useState([])
  const [housingComplexe,setHosingComplexe] = useState([])
  const [priorities,setPriorities] = useState([])
  const [precints,setPrecints] = useState([])
  const [tipologies,setTipologies] = useState([])
  const [pointFailures,setPointFailures] = useState([])
  const [reasonFailures,setReasonFailures] = useState([])
  const [reasonClose,setReasonClose] = useState([])
  const [failures,setFailures] = useState([])
  const [followings,setFollowings] = useState([])
  const [isOpenModal,setIsOpenModal] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    
    fetchData(true)
    setTimeout(function () {
      inputRef.current.focus()
    }, 500);
    return () => {
      columns_table = []
    }
  },[])

  useMemo(() => {
    columns_table = [
      {
        Header: 'Nro.SS',
        accessor: props1 => [props1.area_ss.id],
        Cell: props1 => {
          return (
            <Button variant="link" onClick={() => goToForm(props1.cell.row.original.area_ss.id)} size="sm">{props1.cell.row.original.area_ss.id}</Button>
          )
        }
      },
      {
        Header: 'Fecha Emisión',
        accessor: props1 => [moment(props1.area_ss.date_request).format('DD-MM-YYYY')]
      },
      {
        Header: 'Cliente',
        accessor: props1 => props1.area_ss.client ? [props1.area_ss.client.name+" "+props1.area_ss.client.last_names] :''
      },
      {
        Header: 'Email',
        accessor: props1 => props1.area_ss.client ? [props1.area_ss.client.email] : ''
      },
      {
        Header: 'Teléfono',
        accessor: props1 => props1.area_ss.client ? [props1.area_ss.client.phone] : ''
      },
      {
        Header: 'Proyecto',
        accessor: props1 => [props1.area_ss.housing.name]
      },
      {
        Header: 'Recinto',
        accessor: props1 => [props1.precint.name]
      },
      {
        Header: 'Tipología de Falla',
        accessor: props1 => [props1.tipology.name]
      },
      {
        Header: 'Falla Puntual',
        accessor: props1 => [props1.point.name]
      },
      {
        Header: 'Motivo Falla',
        accessor: props1 => props1.reason_failure ? [props1.reason_failure.name] : []
      },
      {
        Header: 'Prioridad',
        accessor: props1 => [props1.area_ss.priority.name]
      },
      {
        Header: 'Nro.Papeleta',
        accessor: props1 => [props1.area_ss.nro_ballot]
      },
      {
        Header: 'Seguimiento',
        Cell: props1 => {
          const {original} = props1.cell.row
          return (
            <Button type="button" size="sm" onClick={() => displayFollowings(original.following_failure)} block={true} variant="secondary">Seguimientos</Button>
          )
        }
      },
      {
        Header: 'Estado',
        accessor: props1 => [props1.status.status]
      },
      {
        Header: 'Motivo Cierre',
        accessor: props1 => props1.reason_close ? [props1.reason_close.name] : []
      },
      {
        Header: 'Fecha Cierre',
        accessor: props1 => props1.date_close ? [moment(props1.date_close).format('DD-MM-YYYY')] : []
      },
      {
        Header: 'Valor Materiales',
        accessor: 'material_cost'
      },
      {
        Header: 'Valor Mano de Obra',
        accessor: 'workforce_cost'
      },
      {
        Header: 'Valor Tercero',
        accessor: 'third_party_cost'
      },
    ]
  },[])

  const goToForm = id => {
    props.history.replace('/request/area/managment/form/'+id)
  }

  const fetchData = (type = false) => {
    let promises = [
      axios.get(API_URL+'get_status'),
      axios.get(API_URL+'get_status_failure'),
      axios.get(API_URL+'housing_complexe'),
      axios.get(API_URL+'params_service_priority'),
      axios.get(API_URL+'master_precint'),
      axios.get(API_URL+'params_manage_problems_tipology'),
      axios.get(API_URL+'params_manage_problems_point_failures'),
      axios.get(API_URL+'get_reason_failures'),
      axios.get(API_URL+'params_service_reason_close'),
    ]

    let promises1 = [
      axios.get(API_URL+'area_failure_ss'),
    ]

    if(type){
      promises1 = promises1.concat(promises)
    }


    Promise.all(promises1).then(result => {

      setFailures(result[0].data)
      if(type){
        setStatus(result[1].data)
        setStatusFailure(result[2].data)
        setHosingComplexe(result[3].data)
        setPriorities(result[4].data)
        setPrecints(result[5].data)
        setTipologies(result[6].data)
        setPointFailures(result[7].data)
        setReasonFailures(result[8].data)
        setReasonClose(result[9].data)
      }

    }).catch(err => {
      if(err.response){
        toast.error(err.response.data.message)
      }else{
        console.log(err);
        toast.error('Error, contacte con soporte')
      }
    })

  }

  const displayFollowings = dataFollow => {
      setFollowings(dataFollow)
      openModalFollowing()
  }

  const openModalFollowing = () => {
    setIsOpenModal(!isOpenModal)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const objectPost = Object.assign({},data)
    axios.post(API_URL+'area_failure_ss_by_filter',objectPost).then(result => {
      setFailures(result.data)
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
      setData({...data, [e.target.name] : e.target.checked})
    }else{
      setData({...data, [e.target.name] : e.target.value})
    }
  }

  const exportToExcel = () => {

    let wb = xlsx.utils.book_new()
    let bodyTable = [['Nr.SS','Fecha Emisión','Cliente','Email','Teléfono','Proyecto','Recinto','Tipologia de Falla','Falla Puntual','Motivo Falla','Prioridad','Nro.Papeleta','Estado','Motivo Cierre','Fecha Cierre','Valor Materiales','Valor Mano de Obra','Valor Tercero']]

    wb.Props = {
      Title: "Reporte de Fallas de Area",
      Subject: "Exportación de Data",
      Author: 'Veanx tecnology',
      CreatedDate: moment().format('YYYY-MM-DD')
    };
    wb.SheetNames.push("Fallas");
    let total_workforce_cost = 0

    failures.forEach((v,i) => {

      bodyTable.push([
        v.area_ss.id,
        moment(v.area_ss.date_request).format('DD-MM-YYYY'),
        v.area_ss.client ? v.area_ss.client.name+' '+v.area_ss.client.last_names : '',
        v.area_ss.client ? v.area_ss.client.email : '',
        v.area_ss.client ? v.area_ss.client.phone : '',
        v.area_ss.housing.name,
        v.precint.name,
        v.tipology.name,
        v.point.name,
        v.reason_failure ? v.reason_failure.name : '',
        v.area_ss.priority.name,
        v.area_ss.nro_ballot,
        v.status.status,
        v.reason_close ? v.reason_close.name : '',
        v.date_close ? moment(v.date_close).format('DD-MM-YYYY') : '',
        v.material_cost ? showPriceWithDecimals(false,v.material_cost) : '',
        v.workforce_cost ? showPriceWithDecimals(false,v.workforce_cost) : '',
        v.third_party_cost ? showPriceWithDecimals(false,v.third_party_cost) : '',
      ])
    })

    var ws = xlsx.utils.aoa_to_sheet(bodyTable);
    wb.Sheets["Fallas"] = ws;
    var wbout = xlsx.write(wb, {bookType:'xlsx',  type: 'binary'});
    let datos1 = s2ab(wbout)
    saveAs(new Blob([datos1],{type:"application/octet-stream"}), 'Reporte de Fallas de Area'+moment().format('DD-MM-YYYY')+'.xlsx')
  }

  return (
    <Container fluid={true}>
      <Row  className="containerDiv">
        <Col sm={12} md={12} lg={12}>
          <Row className="">
            <Col sm={12} md={12} lg={12}>
              <h4 className="text-center title_principal">SEGUIMIENTO DE FALLAS POR SOLICITUDES DE SERVICIO - ÁREAS COMUNES</h4>
              <hr/>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12} lg={12}>
                <Form onSubmit={handleSubmit} noValidate validated={validated}>
                  <Row>
                    <InputFieldRef
                      {...props.inputSS}
                      value={data.number_ss}
                      handleChange={onChange}
                      ref={inputRef}
                      />
                    <InputField
                      {...props.inputNumberPapeleta}
                      value={data.nro_ballot}
                      handleChange={onChange}
                      />
                  </Row>
                  <Row>
                    <InputField
                      {...props.inputProyect}
                      value={data.id_housing_complexe}
                      handleChange={onChange}
                      >
                      <option value=''>--Seleccione--</option>
                      {housingComplexe.map((v,i) => (
                        <option key={i} value={v.id}>{v.name}</option>
                      ))}
                    </InputField>
                    <InputField
                      {...props.inputPriority}
                      value={data.id_priority}
                      handleChange={onChange}
                      >
                      <option value=''>Todas...</option>
                      {priorities.map((v,i) => (
                        <option key={i} value={v.id}>{v.name}</option>
                      ))}
                    </InputField>
                    <InputField
                      {...props.inputRecinto}
                      value={data.id_precint}
                      handleChange={onChange}
                      >
                      <option value=''>--Seleccione--</option>
                      {precints.map((v,i) => (
                        <option key={i} value={v.id}>{v.name}</option>
                      ))}
                    </InputField>
                  </Row>
                  <Row>
                    <InputField
                      {...props.inputTipologyFail}
                      value={data.id_tipology_failure}
                      handleChange={onChange}
                      >
                      <option value=''>--Seleccione--</option>
                      {tipologies.map((v,i) => (
                        <option key={i} value={v.id}>{v.name}</option>
                      ))}
                    </InputField>
                    <InputField
                      {...props.inputPuntualFail}
                      value={data.id_point_failure}
                      handleChange={onChange}
                      >
                      <option value=''>--Seleccione--</option>
                      {pointFailures.map((v,i) => (
                        <option key={i} value={v.id}>{v.name}</option>
                      ))}
                    </InputField>
                    <InputField
                      {...props.inputStatusSS}
                      value={data.id_status_ss}
                      handleChange={onChange}
                      >
                      <option value=''>Todas...</option>
                      {status.map((v,i) => (
                        <option key={i} value={v.id}>{v.status}</option>
                      ))}
                    </InputField>
                  </Row>
                  <Row>
                    <InputField
                      {...props.inputStautsFail}
                      value={data.id_status_failure}
                      handleChange={onChange}
                      >
                      <option value=''>--Seleccione--</option>
                      {statusFailure.map((v,i) => (
                        <option key={i} value={v.id}>{v.status}</option>
                      ))}
                    </InputField>
                    <InputField
                      {...props.inputFrom}
                      value={data.from}
                      handleChange={onChange}
                      />
                    <InputField
                      {...props.inputTo}
                      value={data.to}
                      handleChange={onChange}
                      />
                  </Row>
                  <Row>
                    <InputField
                      {...props.inputReasonFail}
                      value={data.id_reason_failure}
                      handleChange={onChange}
                      >
                      <option value=''>Todos...</option>
                      {reasonFailures.map((v,i) => (
                        <option key={i} value={v.id}>{v.name}</option>
                      ))}
                    </InputField>
                    <InputField
                      {...props.inputReasonClose}
                      value={data.id_reason_close}
                      handleChange={onChange}
                      >
                      <option value=''>Todos...</option>
                      {reasonClose.map((v,i) => (
                        <option key={i} value={v.id}>{v.name}</option>
                      ))}
                    </InputField>
                    <Col sm={4} md={4} lg={4}>
                      <br/>
                      <label forHtml="show_all">
                        <input id="show_all" type="checkbox" name="radio_option" checked={data.radio_option} onChange={onChange}/>
                        &nbsp;Mostrar Todos
                      </label>
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
                </Form>
              </Col>
          </Row>
          <br/>
          <Row>
            <Col sm={6} md={6} lg={6}>
              <h5 className="title_principal">Listado de S.S</h5>
            </Col>
            <Col sm={6} md={6} lg={6}>
              <h5 className="title_principal text-right">N° de Registros: 0</h5>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <Table columns={columns_table} data={failures} displayPaginationUp={true} />
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
              <Table columns={following_columns_failure} data={followings} letrasChicas={true}/>
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

AreaManagementFailurePage.defaultProps = {
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
  inputStatusSS:{
    type: 'select',
    required: false,
    name: 'id_status_ss',
    label : 'Estado S.S:',
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
  inputRecinto:{
    type: 'select',
    required: false,
    name: 'id_precint',
    label : 'Recinto:',
    messageErrors: [],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputTipologyFail:{
    type: 'select',
    required: false,
    name: 'id_tipology_failure',
    label : 'Tipología de Falla:',
    messageErrors: [],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputPuntualFail:{
    type: 'select',
    required: false,
    name: 'id_point_failure',
    label : 'Falla Puntual:',
    messageErrors: [],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputStautsFail:{
    type: 'select',
    required: false,
    name: 'id_status_failure',
    label : 'Estado Falla:',
    messageErrors: [],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
  inputReasonFail:{
    type: 'select',
    required: false,
    name: 'id_reason_failure',
    label : 'Motivo de Falla:',
    messageErrors: [],
    cols:"col-sm-4 col-md-4 col-lg-4 col-xs-4"
  },
}

export default AreaManagementFailurePage
